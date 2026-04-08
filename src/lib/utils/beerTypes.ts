const typeGroups = {
	sour: [
		'raspberry sour',
		'Ice Cream Sour',
		'ultra fruited sour',
		'wild sour',
		'kettle sour',
		'dry hopped sour',
		'sour',
		'Pulp sour',
		'gelato sour',
		'sour ipa'
	],
	ipa: [
		'west coast ipa',
		'double ipa',
		'new england ipa',
		'NEIPA',
		'session ipa',
		'hazy ipa',
		'DDHIPA',
		'DIPA',
		'black ipa',
		'IPA',
		'DH West Coast Pale Ale',
		'Hazy Session IPA',
		'Triple Dry Hopped IPA',
		'Mandarin Oat IPA',
		'Triple IPA',
		'Antipodean IPA',
		'Chili ipa',
		'Wc ipa'
	],
	stout: [
		'imperial stout',
		'Imp. Stout',
		'oatmeal stout',
		'chocolate stout',
		'Chocolate Milk Stout',
		'Imperial Pastry Stout',
		'Imperial Rye Stout',
		'Pastry Stout',
		'Breakfast Stout',
		'Dry stout',
		'stout'
	],
	lager: ['pilsner', 'blonde lager', 'dunkel', 'Rød Pilsner', 'New Zealand Pilsner', 'lager'],
	nonAlcoholic: ['non-alcoholic', 'alcohol-free', 'near beer', 'alkoholfri', 'non alcoholic'],
	brownAle: ['brown ale', 'english brown ale', 'american brown ale'],
	other: [
		'Flavored Malt Beverage',
		'Fruit beer',
		'Rustic Beer',
		'Wild Ale',
		'Saison',
		'Strong Ale',
		'Barleywine',
		'Belgian Strong Dark Ale',
		'Old Ale',
		'pale ale',
		'porter',
		'lambic',
		'kriek',
		'framboise'
	]
};

export function areTypesInSameGroup(type1: string, type2: string): boolean {
	for (const group of Object.values(typeGroups)) {
		if (group.includes(type1.toLowerCase()) && group.includes(type2.toLowerCase())) {
			return true;
		}
	}
	return false;
}
