import React, { useState, createContext } from "react";

export const ImageViewerContext = createContext();

const ImageViewerProvider = ({children}) => {

    const [imageViewerOpen, setImageViewerOpen] = useState(false);
    const [imageViewerConfig, setImageViewerConfig] = useState({images: [], currentImage: 0});

    return <ImageViewerContext.Provider 
        value={{imageViewerOpen, setImageViewerOpen, imageViewerConfig, setImageViewerConfig}}>
        {children}
    </ImageViewerContext.Provider>
};

export default ImageViewerProvider;