import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Carrusel(){
          return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    }
    
    const itemData = [
      {
        img: '/images/Imag4.jpg',
        title: 'Breakfast',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Burger',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Camera',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Coffee',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Hats',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Honey',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Basketball',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Fern',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Mushrooms',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Tomato basil',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Sea star',
      },
      {
        img: '/images/Imag4.jpg',
        title: 'Bike',
      },
    ];