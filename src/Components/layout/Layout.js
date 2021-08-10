import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../styles/layout.module.css'
import Link from 'next/Link'
const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.side}>
                    <Navbar />
                </div>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <Header />
                    </div>
                    <div className={styles.pages}>
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout
