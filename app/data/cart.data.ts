import { products } from './product.data'
import { ICartItem } from '@/types/cart-item.interface'

export const cart: ICartItem[] = [
	{
		id: 1,
		product: products[0],
		quantity: 1
	},
	{
		id: 2,
		product: products[1],
		quantity: 2
	}
]
