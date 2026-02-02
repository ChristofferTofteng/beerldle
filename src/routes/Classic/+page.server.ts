import type { PageServerLoad } from './$types';
import type { Beer } from '../../types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
	const { data, error } = await supabase.from('beers').select<'beers', Beer>();
	if (error) {
		console.error('Error loading beers:', error.message);
		return { beers: [] };
	}
	console.log('Data collected', data);

	return {
		beers: data ?? []
	};
};
