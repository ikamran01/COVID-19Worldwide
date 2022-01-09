import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css';



function Cards({ title , cases, total}) {
    return (
        <Card className='cardbox'>
            <CardContent>
                <Typography className='cardtitle' color='textSecondary'>{title}</Typography>
                <Typography className='cardcases' variant='h5'>{cases}</Typography>
                <Typography className='cardtotle' color='textSecondary'>{total} Total</Typography>
            </CardContent>
        </Card>
         
      )   
}

export default Cards
