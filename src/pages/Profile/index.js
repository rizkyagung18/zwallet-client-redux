import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Edit from '../../icons/edit-profile.svg'
import ArrowRight from '../../icons/arrow-right.svg'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/action/login'
import { userLogout } from '../../redux/action/user'

const Profile = props => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)

    const style = {
        label: {
            borderRadius: "10px",
            backgroundColor: "#E5E8ED",
            padding: "20px",
            marginBottom: "20px",
            width: "433px",
            cursor: 'pointer'
        }
    }

    const splitPhone = (phone) => {
        if(phone) {
            const newPhone = phone.split('').map((item, index) => {
                if(index === 2 || index === 6) {
                    return item + '-'
                } else {
                    return item
                }
            })
    
            return newPhone
        } else {
            return ""
        }
    }

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={4} />
                <div className="content-main d-flex flex-column align-items-center py-5">
                    <img className="mb-3" style={{borderRadius: '10px'}} width="80px" height="80px" src="http://localhost:8000/images/1602675286369-2020.10.01-10.55_01.png" alt="" />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <img style={{cursor: 'pointer'}} className="mr-2" src={Edit} alt="edit" height="11px" />
                        <p className="mb-0 text-muted med">Edit</p>
                    </div>
                    <p className="mb-2 big bold text-dark">{data.name}</p>
                    <p className="med text-muted">+62 {splitPhone(data.phone)}</p>
                    <Link to={{ pathname: `/profile/info`}} style={style.label} className="mt-4 d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Personal Information</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link to={{ pathname: `/profile/password`}} style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Change Password</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link to={{ pathname: `/profile/pin`}} style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Change PIN</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link onClick={() => {
                            dispatch(logout())
                            dispatch(userLogout())
                        }} to="/" style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Logout</p>
                    </Link>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Profile