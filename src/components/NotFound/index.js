import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const NotFound = () => (
    <div className='not-fount-bg-container'>
        <img src='https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg' alt='error' />
        <Link to='/' className='home-button'>
            <button className='btn btn-danger'> Go to Home Page </button>
        </Link>
    </div>
)

export default NotFound
