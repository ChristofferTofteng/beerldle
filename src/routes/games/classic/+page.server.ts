import type { PageServerLoad } from './$types';
import type { Beer, Brewery } from '../../../types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async () => {
	const { data: beers, error: beerError } = await supabase.from('beers').select<'beers', Beer>();
	const { data: breweries, error: breweryError } = await supabase
		.from('breweries')
		.select<'breweries', Brewery>();
	if (beerError || breweryError) {
		console.error('Error loading beer data:', beerError?.message);
		console.error('Error loading brewery data:', breweryError?.message);
		// Something went wrong. Create some kind of error feedback instead.
		return { beers, breweries };
	}

	return {
		beers,
		breweries
	};
};
