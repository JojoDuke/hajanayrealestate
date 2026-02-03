import React, { useEffect, useState } from 'react';
import BlogPost from '../Components/pages/News/BlogPost';
import axios from 'axios';

/*SASS*/
import './scenes.scss';

const News = () => {

    const [blogposts, setBlogPosts] = useState([]);

    const fetchBlogPosts = () => {
        axios.get('https://api.moderni-hajany.cz/blogposts')
            .then(res => {
                setBlogPosts(res.data.blogpost);
            }).catch(err => console.log(err, "ERROR ON FETCH"))
    }

    useEffect(() => {
        fetchBlogPosts();
    }, [])

    return (
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Aktuality
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                {blogposts.map((bp) => {
                    return <BlogPost blogpost={bp} />
                })}
            </div>
        </div>
    );
}

export default News;