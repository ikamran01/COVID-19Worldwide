import React from "react"

import styles from './Header.module.css'


const Header = () => {
  return(
<div className={styles.navbar}>
        <a href="#">
          Covid-19
          <span>Worldwide</span>
        </a>
      </div>
  )
  }


export default Header