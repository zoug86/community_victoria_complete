import React from 'react'

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

//Styles
import '../styles/ImageGallery.css';

const CustomImageGallery = ({ images }) => {
    const imageList = images?.map(image => {
        return {
            original: image,
            thumbnail: image
        }
    })
    return (
        <div className="custom-image-gallery">
            <ImageGallery items={imageList} showThumbnails={false} autoPlay={true} infinite disableThumbnailScroll={true} showFullscreenButton={false} showNav={false} />
        </div>
    )
}

export default CustomImageGallery;