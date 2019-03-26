import React from 'react'
import styles from './navbar.module.css'

export default ({ children  }) => {
  return (
    <nav className={`nav ` + styles.navbar}>
      {children}
    </nav>
  )
}
