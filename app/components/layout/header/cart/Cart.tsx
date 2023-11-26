import Image from 'next/image'
import { FC, useState } from 'react'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { cart } from '@/data/cart.data'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.myBasket} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>My Basket</span>
			</button>

			{isOpen && (
				<>
					<span className={styles.cartBg}></span>
					<div className={styles.cart}>
						<span>My cart</span>
						{cart.map(item => (
							<CartItem item={item} key={item.id} />
						))}

						<button className={styles.checkOut}>CheckOut</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
