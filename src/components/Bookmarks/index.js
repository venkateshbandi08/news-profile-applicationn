import NewsCard from '../NewsCard';
import { FaBookmark } from 'react-icons/fa'
import './index.css'

const Bookmarks = (props) => {
    const {bookmarkedNewsData} = props;
    return (
        <>
        <h4 className='tab-heading'> Your Bookmark's <FaBookmark /> </h4>
        <ul className='news-card-container'>
            {
                bookmarkedNewsData.map((eachItem, index) => (
                    <NewsCard newsDetails={eachItem} heading={'Bookmarks'} key={index} />
                ))
            }
        </ul>
        </>
    )
}

export default Bookmarks