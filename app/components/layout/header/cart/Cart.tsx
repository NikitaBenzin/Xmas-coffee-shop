import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			<div className={styles.myBasket}>
				<span className={styles.counter}>1</span>
				<p>My Basket</p>
			</div>

			<section className={styles.popupCart}>
				<Image
					src='/images/coffee.png'
					width={180}
					height={150}
					alt='coffee'
				></Image>
				<section>
					<div className={styles.itemInfo}>
						<Link href='/'>Coffee Cappuccino</Link>
						<p>$89.00</p>
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
							<p>1</p>
							<button>
								<Image
									src='/images/plus-icon.png'
									width={25}
									height={25}
									alt='Plus'
								/>
							</button>
						</section>

						<button>
							<Image
								src='/images/delete-icon.png'
								width={50}
								height={50}
								alt='Trash bin'
							/>
						</button>
					</div>
				</section>
			</section>

			<Image
				src='/images/menu-icon.svg'
				width={35}
				height={35}
				alt='menu icon'
			/>
		</div>
	)
}

export default Cart
