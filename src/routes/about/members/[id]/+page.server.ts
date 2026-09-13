import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { Member } from '$lib/types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ params }) => {
    const { data: member, error: memberError } = await supabase
        .from('members')
        .select<'members', Member>()
        .eq('id', params.id)
        .single();

    if (memberError) {
        console.error('Error loading member data:', memberError?.message);
        throw error(404, 'Member not found');
    }

    return {
        member,
    };
};
