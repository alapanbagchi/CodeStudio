"use client"
import Button from '../Shared/Button'
import './Header.module.css'
import styles from './ProblemHeader.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Dropdown from '../Shared/Dropdown';

const ProblemHeader = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} ${styles.back}`}>
                <ul className={styles.navlist}>
                    <li className={styles.w_50}>
                        <h1 className={styles.problemTitle}>Good Turn</h1>
                    </li>   
                    <li className={styles.controls}>
                        <a href="" className={styles.control}>
                            <Button
                                type='icon'
                            >
                                <KeyboardArrowLeftIcon
                                    sx={{
                                        fontSize: '20px'
                                    }}
                                />
                            </Button>
                            <p>Previous Problem</p>
                        </a>
                        <a href="" className={styles.control}>
                            <p>Next Problem</p>
                            <Button
                                type='icon'
                            >
                                <KeyboardArrowRightIcon
                                    sx={{
                                        fontSize: '20px'
                                    }}
                                />
                            </Button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default ProblemHeader