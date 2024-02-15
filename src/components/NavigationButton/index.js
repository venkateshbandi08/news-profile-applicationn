import { Link } from 'react-router-dom';
import { FaNewspaper, FaBookmark, FaHeart } from 'react-icons/fa';
import './index.css';

const NavigationButton = (props) => {
    const { buttonName } = props;
    let iconComponent;

    // Choosing icon based on buttonName
    switch (buttonName) {
        case 'Posts':
            iconComponent = <FaNewspaper />;
            break;
        case 'Bookmarks':
            iconComponent = <FaBookmark />;
            break;
        case 'Liked':
            iconComponent = <FaHeart />;
            break;
        default:
            iconComponent = null;
            break;
    }

    return (
        <li className='nav-item'>
            <Link to={`/profile/${buttonName.toLowerCase()}`}>
                <button className='btn btn-outline-danger'>
                    {iconComponent} {buttonName}
                </button>
            </Link>
        </li>
    );
};

export default NavigationButton;
