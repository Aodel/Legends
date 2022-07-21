import React from 'react'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import CardList from '../components/cardList/CardList'
import Footer from '../components/footer/Footer'






function HomePage() {
  return (
    <>
    
      <Header />
      <Search />

      <CardList />
      <Footer />

    </>
  )
}

export default HomePage