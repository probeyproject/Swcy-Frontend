import React from 'react'
import Hero from '../Components/Hero/Hero'
import Newsletter from '../Components/Newsletter/NewLetter'
import CategoryCarousel from '../Components/Hero/CategoryCarousel'
import ProductCard from '../Components/cards/ProductCard'
import Testimonial from '../Components/Hero/Testimonial'
import About from './About'
import Service from '../Services/Service'
import Videocategory from '../Components/videoComponets/videocategory'
import Shopbycategory from '../Components/Category/Shopbycategory'
import ProductList from '../Components/cards/ProductList'
// import Filter from '../Components/Sidebar/Filter'
// import CategorySection from '../Components/Categories/CategorySection'
import AllCategory from '../Components/Category/AllCategory'
import CategoryMen from '../Components/Category/CategoryMen'
import CardAllservices from '../Services/CardAllservices'
import WhySwcy from '../Components/StorySection/WhySwcy'
import OfferBanner from '../Components/Offer Banner/OfferBanner'

function Home() {
  return (
    <div>
      <Hero/>    
     <AllCategory/>    
      {/* <CategorySection/> */}
      {/* <OfferBanner/> */}
      <ProductCard/>
      <Videocategory/>
      <WhySwcy/>
       <Testimonial/>
      <CardAllservices/>

    </div>
  )
}

export default Home