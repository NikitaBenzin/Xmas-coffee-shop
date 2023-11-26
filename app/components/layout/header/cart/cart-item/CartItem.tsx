import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '../Cart.module.scss'

import { ICartItem } from '@/types/cart-item.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			></Image>
			<section>
				<div className={styles.name}>
					<Link href='/'>{item.product.name}</Link>
				</div>
				<div className={styles.price}>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</div>
				<div className={styles.itemManipulating}>
					<section>
						<button>
							<Image
								src='/images/minus-icon.png'
								width={25}
								height={25}
								alt='Minus'
							/>
						</button>
						<span>1</span>
						<button>
							<Image
								src='/images/plus-icon.png'
								width={25}
								height={25}
								alt='Plus'
							/>
						</button>
					</section>

					<button className={styles.delete}>Delete</button>
				</div>
			</section>
		</div>
	)
}

export default CartItem
