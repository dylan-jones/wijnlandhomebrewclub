const toSig = (seed = 'brew') =>
	Array.from(String(seed)).reduce((sum, ch) => sum + (ch.codePointAt(0) || 0), 0);

const BEER_IMAGE_URLS = [
	'https://images.unsplash.com/photo-1514361892635-eae31ecf2d3d',
	'https://images.unsplash.com/photo-1436076863939-06870fe779c2',
	'https://images.unsplash.com/photo-1505075106905-fb05289290f7',
	'https://images.unsplash.com/photo-1485265449635-ca623a55e95c',
	'https://images.unsplash.com/photo-1532635241-17e820acc59f',
	'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
	'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
	'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
	'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
	'https://images.unsplash.com/photo-1618885472179-5e474019f2a9',
	'https://images.unsplash.com/photo-1584225064785-c62a8b43d148',
	'https://images.unsplash.com/photo-1608270586620-248524c67de9',
];

export const pic = (w, h, seed = 'brew') =>
	`${BEER_IMAGE_URLS[toSig(seed) % BEER_IMAGE_URLS.length]}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
