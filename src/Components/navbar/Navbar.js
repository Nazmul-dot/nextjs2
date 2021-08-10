import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/nab.module.css'
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TableChartIcon from '@material-ui/icons/TableChart';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import NoteIcon from '@material-ui/icons/Note';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import CloudQueueOutlinedIcon from '@material-ui/icons/CloudQueueOutlined';
import { useRouter } from 'next/router'
const Navbar = () => {
    const a = true;
    const [isfull, setisfull] = useState(true)
    const router = useRouter()
    console.log(router.pathname)
    const cheak = (path) => {
        if (path == router.pathname) {
            return styles.isActive
        }
    }
    return (
        <>
            <nav className={styles.nav}>
                <p className={styles.top_item}>
                    Gull
                </p>
                <Link href='/'>
                    <a className={`${styles.item} ${cheak('/')}`}

                    ><div className={styles.inner_item}><HomeWorkIcon />Dashboard</div></a>
                </Link>
                <Link href='/table'>
                    <a className={`${styles.item} ${cheak('/table')}`}

                    ><div className={styles.inner_item}><TableChartIcon />Table</div></a>
                </Link>
                <Link href='/file'>
                    <a className={`${styles.item} ${cheak('/file')}`}

                    ><div className={styles.inner_item}><FileCopyIcon />File</div></a>
                </Link>
                <Link href='/note'>
                    <a className={`${styles.item} ${cheak('/note')}`}

                    ><div className={styles.inner_item}><NoteIcon />Note</div></a>
                </Link>
                <Link href='/answer'>
                    <a className={`${styles.item} ${cheak('/answer')}`}

                    ><div className={styles.inner_item}><PanToolOutlinedIcon />Answer</div></a>
                </Link>
                <Link href='/profile'>
                    <a className={`${styles.item} ${cheak('/profile')}`}

                    ><div className={styles.inner_item}><SupervisorAccountOutlinedIcon />Profile</div></a>
                </Link>
                <Link href='/cloude'>
                    <a className={`${styles.item} ${cheak('/cloude')}`}

                    ><div className={styles.inner_item}><CloudQueueOutlinedIcon />Cloude</div></a>
                </Link>

            </nav>

        </>
    )
}

export default Navbar
