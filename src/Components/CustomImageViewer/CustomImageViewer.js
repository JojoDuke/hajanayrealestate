import React, { useContext } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { ImageViewerContext } from '../../Context/ImageViewerContext';

const CustomImageViewer = (props) => {

    const { imageViewerOpen, setImageViewerOpen, imageViewerConfig, setImageViewerConfig } = useContext(ImageViewerContext);

    const closeImageViewer = () => {
        setImageViewerConfig({images: [], currentImage: 0});
        setImageViewerOpen(false);
    }

    return (
        <>
            {imageViewerOpen ?
                <ImageViewer 
                    src={ imageViewerConfig.images }
                    currentIndex={ imageViewerConfig.currentImage }
                    onClose={ closeImageViewer }
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)"
                      }}
                />
            :
            <div></div>}
        </>
    );
}

export default CustomImageViewer;