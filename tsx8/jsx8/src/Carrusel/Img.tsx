import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
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
    img: '',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Imag4.jpg',
    title: 'Burger',
  },
  {
    img: '/images/Imag5.png',
    title: 'Camera',
  },
  {
    img: '/images/Imag6.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'images/Imag4.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '/images/Imag5.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Imag6.png',
    title: 'Basketball',
  },
  {
    img: 'images/Imag4.jpg',
    title: 'Fern',
  },
  {
    img: '/images/Imag5.png',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/Imag6.png',
    title: 'Tomato basil',
  },
  {
    img: 'images/Imag4.jpg',
    title: 'Sea star',
  },
  {
    img: '/images/Imag5.png',
    title: 'Bike',
    cols: 2,
  },
];