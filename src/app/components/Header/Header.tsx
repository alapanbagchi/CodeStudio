import Image from 'next/image'
import Button from '../Shared/Button'
import './Header.module.css'
import styles from './Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [path, setPath] = useState(pathname);
    useEffect(() => {
        setPath(pathname);
      }, [pathname, searchParams]);
      console.log(path.split('/')?.filter(item => item))
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navlist}>
                    <li className={styles.logo}>
                        <Image width={40} height={40} src="/logo.svg" alt='Code Studio Logo' />
                        CODE_STUDIO
                    </li>
                    <ul className={styles.links}>
                        <li className={path.split('/')?.filter(item => item)[0] === 'learn' ? styles.active : ''}>
                            <Link href='/learn'>Learn</Link>
                        </li>
                        <li className={path.split('/')?.filter(item => item)[0] === 'practice' ? styles.active : ''}>
                            <Link href='/practice'>Practice</Link>
                        </li>
                        <li className={path.split('/')?.filter(item => item)[0] === 'test' ? styles.active : ''}>
                            <Link href='/test'>Test</Link>
                        </li>
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