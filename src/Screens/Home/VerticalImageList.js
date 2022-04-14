import React, { Component } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import moviesData from '../../Common/moviesData';
import './verticalImageList.css';

class VerticalImageList extends Component {
  render() {
    return (
        <ImageList  sx={{ width: 1519, height: 250 }}>
        <ImageListItem  key="Subheader" cols={moviesData.length}>
        </ImageListItem>
        {moviesData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img
              id='image-vertical-image-list'
              src={`${item.poster_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }
}
export default VerticalImageList;