import React from 'react'
import Hero from '../Components/Hero/Hero'
import ProductGrid from '../Components/cards/ProductGrid'
import Newsletter from '../Components/Newsletter/NewLetter'
import CategoryCarousel from '../Components/Hero/CategoryCarousel'
import ProductCard from '../Components/cards/ProductCard'
import Testimonial from '../Components/Hero/Testimonial'
import About from './About'
import Service from '../Services/Service'
import Videocategory from '../Components/videoComponets/videocategory'
import Shopbycategory from '../Components/Category/Shopbycategory'

function Home() {
  return (
    <div>
      <Hero/>
      <CategoryCarousel/>
      
      <Shopbycategory/>
      <Videocategory/>
      <ProductGrid/>
      <ProductCard/>
      <About/>
      <Service />
      <Testimonial/>
      <Newsletter/>

    </div>
  )
}

export default Home