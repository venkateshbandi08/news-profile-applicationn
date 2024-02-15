import './index.css'

// NewsCard component, which renders the news card of each news item
const NewsCard = (props) => {
    const {newsDetails} = props;
    const {author, url, urlToImage, content, publishedAt, title} = newsDetails
    return (
        <li className='news-card'>
            <p className='author-name'> Author: {author}</p>
            <div className='news-image-container'>
            <img src={urlToImage} alt='news' className='newsImage' />
            </div>
            <h5 className='news-title'>{title}</h5>
            <a href={url} target='_blank' rel='noopener noreferrer' className='href-newslink'>News Article</a>
            <p className='news-content'> {content} </p>
            <p className='news-published-at'>{publishedAt}</p>
        </li>
    )
}

export default NewsCard