import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <Header />
            <Body />
        </div>
    )
}

export default Home
