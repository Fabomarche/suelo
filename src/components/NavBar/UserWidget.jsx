import React from 'react'
import user from '../../assets/svg/user.svg'

const UserWidget = () => {
    return (
        <>
            <a href="#" className="d-block text-center mt-3 ms-md-5 me-1 me-md-5  me-md-0">
                <img src={user} className="" alt="Log In" />
                <p className="texto-iconos text-secondary">Log In</p>
            </a>
        </>
    )
}

export default UserWidget
