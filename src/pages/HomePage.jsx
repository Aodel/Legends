import React from 'react'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import CardList from '../components/cardList/CardList'
import Footer from '../components/footer/Footer'
//import ComicCard from '../components/comicCard/ComicCard'



function HomePage() {
  return (
    <>
    
      <Header />
      <Search />
      <div>I am a HomePage</div>
      
      {/* <ComicCard /> */}
      <CardList /> 
      <Footer />

    </>
  )
}

export default HomePage