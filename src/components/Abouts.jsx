import React from 'react'
import { Link } from 'react-router-dom'

function Abouts() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <div className='pt-28  justify-start '>
                <h1 className='text-2xl  md:text-4xl  text-start '>About <span className='text-pink-500'> Us!</span></h1>
                <div className='pt-20'>
                    <h1 className='bold text-2xl text-red-600 text-md py-3'>Brand Story</h1>
                    <p>Begin by sharing the origin story of your bookstore. Why did you start it? What inspired you? Make it memorable and personal so that readers can relate to your journey1</p>
                </div>
                <div>
                    <h1 className='bold text-2xl text-red-600 text-md py-3'>Audience and Value Proposition</h1>
                    <p>Begin by sharing the origin story of your bookstore. Why did you start it? What inspired you? Make it memorable and personal so that readers can relate to your journey1Clearly define who your bookstore serves. Is it a cozy neighborhood shop for book lovers, a specialized store for rare editions, or an online platform for e-books? Explain how your offerings add value to your customers’ lives.</p>
                </div>
                <div>
                    <h1 className='bold text-2xl text-red-600 text-md py-3'>Business Operations</h1>
                    <p> Describe how your bookstore operates. If you offer unique features like personalized recommendations, book clubs, or author events, highlight them. Transparency about your business model and processes builds credibility with shoppers and helps you stand out against competitors.</p>
                </div>
                <div>
                    <h1 className= 'bold text-2xl  text-red-600 text-md py-3'>The Face of Your Business</h1>
                    <p>Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with.</p>
                </div>
                <div className='mb-20'>
                    <h1 className=' bold text-2xl text-red-600 text-md py-3'>Persuasive Content</h1>
                    <p className=''>Consider what step you’d like readers to take next. Use additional content and calls to action (CTAs) to move them forward toward that goal. This could include buttons, testimonials, an explainer video, data visualizations, links to blog posts, products, your social media accounts, or newsletter</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Abouts