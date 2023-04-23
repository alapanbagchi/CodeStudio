import Image from 'next/image'
import Button from '../Shared/Button'
import './Header.module.css'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navlist}>
                    <li className={styles.logo}>
                        <Image width={40} height={40} src="/logo.svg" alt='Code Studio Logo' />
                        CODE_STUDIO
                    </li>
                    <ul className={styles.links}>
                        <li>Learn</li>
                        <li>Test</li>
                        <li>Contests</li>
                    </ul>
                    <ul className={styles.user}>
                        <Button
                            type='secondary'
                        >Log In</Button>
                        <Button
                            type='primary'
                        >
                            Sign Up
                        </Button>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}



export default Header