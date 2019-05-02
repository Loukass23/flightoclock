import React from 'react'
import { Link } from 'react-router-dom'



const Post = ({ post }) => {
    console.log(post)
    return (
        <div style={{ height: "300px" }} className='card small itinerary-list-item-card col s12 m6 xl4 mx-4'>
            <div className='card-image'>
                <img src={post.photoURL} alt='' className='activator' />
                <span id="city-card"
                    className='itinerary-list-item-title activator card-title black-text lighten-2 '>
                    {post.title}
                    <i className='material-icons right'>more_vert</i>
                </span>
            </div>
            <div className='itinerary-list-item-details red-text text-lighten-2'>
                <p>{post.duration}<i className='far fa-clock small red-text text-lighten-2' /></p>
                <i className='fas fa-2x fa-euro-sign small red-text text-lighten-2' />
                <p>{post.price}</p>
                <i className='far fa-2x fa-star red-text text-lighten-2' />
                <p>{post.rating}</p>
            </div>
            <div className='card-reveal white-text' id='card-reveal'>
                <span className='center-align itinerary-list-item-title activator card-title'>
                    <i className='material-icons right '>close</i>
                </span>
                <p className='itinerary-list-item-summary'>{post.summary}</p>

                <div className='explore-itinerary-btn center-align'>
                    <Link to={{
                        pathname: `/post/${post.id}`,
                        state: {
                            itinerary_id: post._id
                        }
                    }}
                        className='btn red lighten-2 '
                    >
                        Explore This Itinerary
           </Link>
                </div>
            </div>
        </div>
    )
}

export default Post

