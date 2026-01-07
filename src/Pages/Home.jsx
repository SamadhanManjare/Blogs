import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'


const Home = () => {
    return (
        // Home Page displaying header, blogs, and pagination
        <div>
            <Header />
            <Blogs />
            <Pagination />
        </div> 
        
    )
}

export default Home