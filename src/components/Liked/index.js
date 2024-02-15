import NewsCard from '../NewsCard';
import { FaHeart } from 'react-icons/fa'
import './index.css'

// liked page

const Liked = (props) => {
    // destructuring props
    const {likedNewsData} = props;
    return (
        <>
        <h4 className='tab-heading'> Stories You Liked <FaHeart /> </h4>
        <ul className='news-card-container'>
            {
                likedNewsData.map((eachItem, index) => (
                    <NewsCard newsDetails={eachItem} key={index} />
                ))
            }
        </ul>
        </>
    )
}

export default Liked