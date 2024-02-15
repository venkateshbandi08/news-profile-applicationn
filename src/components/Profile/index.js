import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationButton from '../NavigationButton'
import './index.css'

const profileImgUrl = 'https://cdn5.vectorstock.com/i/1000x1000/82/09/avatar-journalist-cartoon-vector-10578209.jpg'

const navigationButtons = ['Posts', 'Bookmarks', 'Liked'] // navigation tabs

// profile page

class Profile extends Component {
    render() {
        return (
            <div className='profile-bg-container'>
                <div className='profile-pic-container'>
                    <img src={profileImgUrl} alt='profile' className='profile-pic' />
                </div>
                <div className='personal-info-container'>
                    <p className='bio-text'> <span className='personal-detail-name'>Bio</span> : Passionate journalist committed to truth-seeking and 
                        amplifying marginalized voices through impactful storytelling.</p>
                    <p className='personal-detail'> <span className='personal-detail-name'>Name</span> : Venkatesh bandi </p>
                    <p className='personal-detail'> <span className='personal-detail-name'>Age</span> : 21 yrs </p>
                    <p className='personal-detail'> <span className='personal-detail-name'>Location</span> : Hyderabad </p>
                    <p className='personal-detail'> <span className='personal-detail-name'>Articles Published</span> : 32 </p>
                </div>
                    <ul className='nav-tabs-container'>
                        {navigationButtons.map((eachItem, index) => (
                            <NavigationButton key={index} buttonName={eachItem} />
                        ))}
                    </ul>
          </div>
        )
    }
}

  
export default Profile // exporting
