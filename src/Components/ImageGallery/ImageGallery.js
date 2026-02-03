import React, { useState, useCallback, useContext } from 'react';
import { ImageViewerContext } from '../../Context/ImageViewerContext';
import BackendDataContext from "../../Context/BackendDataContext";

import './ImageGallery.scss';
import { useWindowSize } from '../../Utils/useWindowSize';

const ImageGallery = ({ images, startIndex = 0, fullPhotoList = [] }) => {

    const { setImageViewerOpen, setImageViewerConfig } = useContext(ImageViewerContext);
    const windowSize = useWindowSize();

    // Use fullPhotoList if provided, otherwise build it from images
    const photoList = fullPhotoList.length > 0
        ? fullPhotoList
        : images.map((image) => (process.env.REACT_APP_BACKEND_SERVER || "https://api.moderni-hajany.cz") + image);

    const getRowStyling = (length) => {
        let remainderRows = 0;
        let rowNumber = 0;
        switch (length % 7) {
            case 1:
            case 2:
                remainderRows = 4;
                break;
            case 3:
                remainderRows = 9;
            case 4:
            case 5:
            case 6:
                remainderRows = 15;
                break;
            case 0:
                remainderRows = 0;
                break;
            default:
                remainderRows = 0;
        }
        rowNumber = (length - length % 7) / 7 * 20 + remainderRows;
        if (windowSize.width < 1200) {
            return { gridTemplateRows: `repeat(${rowNumber}, minmax(8vw, 20px))` };
        } else return {};
    }

    const rowStyleObject = getRowStyling(images.length);

    const openPopUp = (index) => {
        // Shift index by startIndex for the correct lightbox position
        setImageViewerConfig({ images: [...photoList], currentImage: index + startIndex });
        setImageViewerOpen(true);
    }

    return (
        <div className="image-gallery-container">
            <ul style={rowStyleObject}>
                {images.map((image, index) => {
                    const photo = (process.env.REACT_APP_BACKEND_SERVER || "https://api.moderni-hajany.cz") + image;
                    let altProp = photo.split("/")[photo.split("/").length - 1].split(".")[0];
                    return (
                        <li key={index}>
                            <div className="gallery-single-img-wrapper" onClick={() => openPopUp(index)}>
                                <img src={photo} alt={altProp} loading="lazy"></img>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ImageGallery;