import React from 'react'
import styles from '../../../styles/header.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from 'next/Link'
const Header = () => {
    const theme = createTheme({
        palette: {
            type: 'dark'
        }
    })
    return (
        <>
            <div className={styles.head}>
                <div className={styles.head_first_section}>
                    <div><MenuIcon /></div>
                    <div className={styles.input_box}>
                        <input
                            className={styles.input_section}
                            type="text"
                        />
                        <div className={styles.inner_input}>
                            <SearchIcon />
                            <p>search</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile_section}>
                    <AddIcon />
                    <ThemeProvider theme={theme} >
                        <Badge badgeContent={4} color='primary'>
                            <NotificationsOutlinedIcon />
                        </Badge>
                    </ThemeProvider>

                    <Avatar alt="Remy Sharp" src="/pp.jpg" />
                </div>
            </div>
        </>
    )
}

export default Header
