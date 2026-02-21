export type Guess = {
	guess: Beer;
	correct: {
		name: 'correct' | 'incorrect' | 'partial';
		brewery: 'correct' | 'incorrect' | 'partial';
		type: 'correct' | 'incorrect' | 'partial';
		abv: 'correct' | 'incorrect' | 'partial';
	};
};

export type Beer = {
	id: number;
	name: string;
	brewery: string;
	type: string;
	abv: number;
	bringer: string;
	taste: number;
	packaging: number;
	pvs: number;
	name_score: number;
	extra_spice: number;
	total_score: number;
	assembly_nr: number;
};

export type Brewery = {
	id: number;
	name: string;
	country: string;
};
