import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Logo from '../Logo/Logo.tsx';

import '../styles/Home.module.css';
export default function Parrafo(){
    return(
    <>
    <div className='mover'>
    <br/>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
      <Logo/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
    );
}