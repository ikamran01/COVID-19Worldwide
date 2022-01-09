import React from "react";



import Header from './Components/Header/Header'
import Search from "./Components/Search/Search";
import styles from './App.module.css'


class App extends React.Component{

  

  render(){

 
    return(
      <div >
        <Header/>
        <Search/>
        


      </div>
    )
  }
}

export default App