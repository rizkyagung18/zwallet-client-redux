import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthLogo from '../../components/AuthLogo'
import { formFilled } from '../../redux/action/register'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const Register = props => {
    const { register, handleSubmit } = useForm()
    const { isFormFilled } = useSelector(state => state.register)
    const dispatch = useDispatch()

    const style = {
        right: {
            backgroundColor: "#FFFFFF",
            flex: 1,
            padding: "120px 150px 150px 40px"
        }
    }

    const onSubmit = ({ name, email, password }) => {
        if(name && email && password) {
            dispatch(formFilled({
                name,
                email,
                password
            }))
        }
    }

    if(isFormFilled) {
        return <Redirect to="/register/pin" />
    } else {
        return (
            <div className="d-flex">
                <AuthLogo />
                <div style={style.right} className="right">
                    <div className="bold big start">Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </div>
                    <div className="text desc-right">
                        Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="users input mb-5">
                            <img src="" alt="person" className="person"/>
                            <input ref={register} name="name" type="text" placeholder="Enter your username" autoComplete="off" />
                        </div>
                        <div className="email input mb-5">
                            <img src="" alt="mail" className="mail"/>
                            <input ref={register} name="email" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                        </div>
                        <div className="password input mb-5">
                            <img src="" alt="lock" className="lock" />
                            <input ref={register} name="password" placeholder="Enter your password" autoComplete="off" />
                            <img src="" className="eye-auth" alt="eye" />
                        </div>
                        <div className="button">
                            <button className="auth-primary-btn" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className="sign-up">
                        <p className="text">Already have an account? Let’s <Link to="/login" className="bold primary">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register