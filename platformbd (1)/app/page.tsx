'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentGrid from './components/ContentGrid'
import CategoryBar from './components/CategoryBar'
import FeaturedCreators from './components/FeaturedCreators'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  return (
    <main style={{minHeight: '100vh', background: '#050508'}}>
      <Navbar />
      <HeroSection />
      <CategoryBar active={activeCategory} onSelect={setActiveCategory} />
      <ContentGrid category={activeCategory} />
      <FeaturedCreators />
      <CommunitySection />
      <Footer />
    </main>
  )
}
