import React from 'react'
import user from '../../assets/svg/user.svg'

const UserWidget = () => {
    return (
        <>
            <a href="#" className="d-block text-center mt-3 me-1 me-md-0 px-4 userWidget">
                <img src={user} className="" alt="Log In" />
                <p className="text-iconos text-secondary">Log In</p>
            </a>
        </>
    )
}

export default UserWidget
