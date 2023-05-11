import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import StarIcon from '@mui/icons-material/StarBorder';
import Hidden from '@mui/material/Hidden';
const Donnie = require('../album-cover-media/Donnie McClurkin.jpeg');
const Rod = require('../album-cover-media/gjhodryzrsoxpuednklu.jpeg');
const Cece = require('../album-cover-media/cece.jpeg');
const ThePolice = require('../album-cover-media/Police-album-zenyattamondatta.jpeg');
const RaCheese = require('../album-cover-media/racheesecover.jpeg');
const BuckeyeImage = require('../album-cover-media/buckeye.jpeg')
const BeepleImage = require('../album-cover-media/beeple.jpeg');

const images: any = [{
    cols: 2,
    genre: 'Gospel',
    src: Donnie,
    title: 'Donnie McClurkin',
}, {
    genre: 'Gospel',
    src: Cece,
    title: 'CeCe Winans',
}, {
    genre: 'Hip Hop',
    src: Rod,
    title: 'Rod Wave',
}, {
    genre: 'Classic Rock',
    src: ThePolice,
    title: 'The Police',
}, {
    cols: 2,
    genre: 'Old School Rap',
    rows: 2,
    src: RaCheese,
    title: 'Racheese',
}, {
    genre: 'Marching Band',
    src: BuckeyeImage,
    title: 'Buckeye Marching Band',
}, {
    genre: 'Creative Scape',
    src: BeepleImage,
    title: 'Hello Beeple',
}];

export default function ImageListExample() {
    const arr = ['1', '1', '2', '3', '4'];
    const tester = arr.find(element => element === '1');
    console.log('The tester result is:', tester);
    return (
        <Hidden only={['lg', 'xl']}>
        <ImageList cols={2} gap={8} sx={{ minHeight: 450, margin: 'auto', overFlow: 'scroll', width: 500, padding: 0 }}>
            <ImageListItem>
                <ListSubheader>
                    Hot Artists
                </ListSubheader>
            </ImageListItem>
            {images.map((image: any, index: React.Key | null | undefined) => (
                <ImageListItem cols={1} key={index} rows={1}>
                    <img 
                        aria-label={`image-${image.title}`}
                        alt={image.title}
                        loading="lazy"
                        src={image.src}
                        srcSet={image.src}
                        title={image.title}
                    />
                    <ImageListItemBar
                        actionIcon={
                            <IconButton sx={{ color: 'rgb(255, 255, 255, 0.9)' }}>
                                <StarIcon />
                            </IconButton>
                        }
                        actionPosition="left"
                        subtitle={image.genre}
                        title={image.title}
                        position="top"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </Hidden>
    );
}