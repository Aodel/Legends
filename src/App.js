import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage"

import axios from "axios";
import{useState, useEffect} from 'react'

// https://gateway.marvel.com:443/v1/public/comics?apikey=3189be3503287e3df629857ce15d59e6

// public key: 3189be3503287e3df629857ce15d59e6
// private key: ca9465c91d3450c885cd6c79c46b2900ea46ed8a
// ts:1

// 1ca9465c91d3450c885cd6c79c46b2900ea46ed8a3189be3503287e3df629857ce15d59e6

// md-5 hash: cf6a9776c1b8521c81ca954cd05f310e

// const apiUrl = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3189be3503287e3df629857ce15d59e6"


// const apiUrl = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3189be3503287e3df629857ce15d59e6&hash=cf6a9776c1b8521c81ca954cd05f310e"

function App() {


  return (
    <>

    <HomePage/>
    </>
  );
}

export default App;
