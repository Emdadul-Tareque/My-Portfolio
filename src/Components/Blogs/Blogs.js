import React from 'react';
import react from '../../images/Blogs/React.png';
import javaScript from '../../images/Blogs/javascriptSkill.png';
import interestingFact from "../../images/Blogs/InterestingFact.png"
import AllBlogs from './AllBlogs';
import Header from '../HomePage/Header/Header';

const Blogs = () => {
    const blogs = [
        {
            title: "10 Interesting topics in JavaScript",
            img: interestingFact,
            link: "https://emdadulhoque446.medium.com/10-interesting-things-in-javascript-b187ca5f366d"
        },
        {
            title: "React Core Concepts",
            img: react,
            link: "https://emdadulhoque446.medium.com/the-core-concept-of-react-bbbc7994a5fb"
        },
        {
            title: "Upgrade your JavaScript Skill",
            img: javaScript,
            link: "https://emdadulhoque446.medium.com/upgrade-your-javascript-skill-aad03cb0a277"
        }
    ]
    return (
        <div className="section">
            <Header></Header>
            <div className="container">
            <h1 className="text-center font-details-b pb-4 ">Blogs</h1>
                <div className="row text-center ">
                    {
                        blogs.map(blog => <AllBlogs blog={blog}></AllBlogs>)
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Blogs;