import type { PageServerLoad } from './$types';
import type { Member } from '$lib/types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
    const { data: members, error: memberError } = await supabase.from('members').select<'members', Member>();

    if (memberError) {
        console.error('Error loading member data:', memberError?.message);
        // Something went wrong. Create some kind of error feedback instead.
        return { members: [] };
    }

    return {
        members: members ?? [],
    };
};
