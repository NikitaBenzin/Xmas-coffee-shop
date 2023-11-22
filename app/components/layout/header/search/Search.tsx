import Image from 'next/image'
import { FC } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Search' />
			<Image
				className={styles.search_ico}
				src='/images/search-icon.svg'
				width={20}
				height={20}
				alt='search'
			></Image>
		</div>
	)
}

export default Search
