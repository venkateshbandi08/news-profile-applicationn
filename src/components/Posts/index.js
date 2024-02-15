import NewsCard from '../NewsCard';
import {FaNewspaper} from 'react-icons/fa'
import './index.css'

// posts page
const Posts = (props) => {
    // destructuring the props
    const {postedNewsData} = props;
    return (
        <>
            <h4 className='tab-heading'> Your Posts's <FaNewspaper /> </h4>
            <ul className='news-card-container'>
                {postedNewsData.map((eachItem, index) => (
                    <NewsCard key={index} newsDetails={eachItem} />
                ))}
            </ul>
        </>
    )
}

export default Posts