import React from 'react'
import logoSuelo from '../assets/images/Logo_Suelo.jpg'

let stylesNav = {
    display: 'flex',
    backgroundColor: '#1D1D1B',
    width: '100%',
    justifyContent: 'center',
    margin: '0',
    padding: '0',

}

let stylesUl ={
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center'
}

let stylesLi={
    padding: '0 2% 0 2%'
}

let styleImg={
    width: '10%',
    height: '100%'
}

const NavBar = () => {
    return (
        <div style={stylesNav}>
            <img src={logoSuelo} style={styleImg} />
            <h2>Suelo</h2>
            <ul style={stylesUl}>
                <li style={stylesLi}><a href="">Vegetales</a></li>
                <li style={stylesLi}><a href="">Frutas</a></li>
                <li style={stylesLi}><a href="">Sandwiches</a></li>
                <li style={stylesLi}><a href="">Ensaladas</a></li>
            </ul>
        </div>
    )
}

export default NavBar
