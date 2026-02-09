import React, { useState } from 'react';
import TextEditorText from '../../TextEditorText/TextEditorText';
import obj from './obj.json';

/*SASS*/
import './BlogPost.scss';

const BlogPost = ({ blogpost }) => {
    const content = JSON.parse(blogpost.content);
    const iframeBlocks = content.blocks.filter(b => b.text.includes('<iframe'));
    const cleanBlocks = content.blocks.filter(b => !b.text.includes('<iframe'));
    const cleanContent = { ...content, blocks: cleanBlocks };

    return (
        <article className="blogpost">
            <div className="article-content">
                <h2>{blogpost.title}</h2>
                <div className="article-text">
                    <TextEditorText data={cleanContent} />
                    {iframeBlocks.map((b, i) => (
                        <div
                            key={i}
                            className="video-article-container"
                            dangerouslySetInnerHTML={{
                                __html: b.text.replace('<iframe', '<iframe style="width: 100%; aspect-ratio: 16/9; border: none;" ')
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="article-images-container">
                {blogpost.images.map((image) => {
                    const backendUrl = process.env.REACT_APP_BACKEND_SERVER || 'https://api.moderni-zelesice.cz';
                    let src = backendUrl + image;
                    return <img src={src} key={src} alt={image.split("/media/")[1]} />
                })}
            </div>
        </article>
    );
}
export default BlogPost;