import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		description: 'This is the first product',
		name: 'Midnight Mint Mocha Francfurd',
		price: 9,
		reviews: [],
		images: ['/products/coffee-1.png']
	},

	{
		id: 2,
		description: 'This is the first product',
		name: 'Mocha Cream',
		price: 4,
		reviews: [],
		images: ['/products/coffee-2.png']
	},

	{
		id: 3,
		description: 'This is the first product',
		name: 'Frapuchino Mocha',
		price: 19,
		reviews: [],
		images: ['/products/coffee-3.png']
	},

	{
		id: 4,
		description: 'This is the first product',
		name: 'Alwadere Coffee',
		price: 7,
		reviews: [],
		images: ['/products/coffee-4.png']
	}
]
