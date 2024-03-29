import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import "./Home.css";
function Home() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Most loved Properties</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

        </div>
       
    </div>
  )
}

export default Home