import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import styles from '../../../styles/card.module.css'
import Link from 'next/Link'
const useStyles = makeStyles((theme) => ({
    card_box: {
        border: '2px solid red',
        width: 296,
        height: 131,
        margin: '0px auto',
        borderRadius: 24,
        backgroundColor: '#FFFFFF'
    }
}));
const Cards = () => {
    const classes = useStyles()
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={5}

            >
                <Grid item xs={3} >
                    <Box className={styles.card_box} >
                        <div className={styles.icon_field}>
                            <PersonOutlinedIcon />
                        </div>
                        <div>
                            <p style={{ fontWeight: 400, fontSize: 14, margin: 0, padding: 0 }} >New Leds</p>
                            <p style={{ fontWeight: 700, fontSize: 30, margin: 0, padding: 0, color: '#663399' }} >205</p>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={3} >
                    <Box className={styles.card_box}  >
                        <div className={styles.icon_field} style={{ backgroundColor: '#C5DBFF' }}>
                            <LocalAtmOutlinedIcon />
                        </div>
                        <div>
                            <p style={{ fontWeight: 400, fontSize: 14, margin: 0, padding: 0 }} >Seles</p>
                            <p style={{ fontWeight: 700, fontSize: 30, margin: 0, padding: 0, color: '#3981F7' }} >$4021</p>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={3} >
                    <Box className={styles.card_box} >
                        <div className={styles.icon_field}
                            style={{ backgroundColor: '#BCDDB3' }}
                        >
                            <DonutLargeOutlinedIcon />
                        </div>
                        <div>
                            <p style={{ fontWeight: 400, fontSize: 14, margin: 0, padding: 0 }} >Orders</p>
                            <p style={{ fontWeight: 700, fontSize: 30, margin: 0, padding: 0, color: '#5DAE49' }} >80</p>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3} >
                    <Box className={styles.card_box} >
                        <div className={styles.icon_field}
                            style={{ backgroundColor: '#FFF6E0' }}
                        >
                            <AttachMoneyOutlinedIcon />
                        </div>
                        <div>
                            <p style={{ fontWeight: 400, fontSize: 14, margin: 0, padding: 0 }} >Expense</p>
                            <p style={{ fontWeight: 700, fontSize: 30, margin: 0, padding: 0, color: '#FFC620' }} >$1200</p>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Cards
