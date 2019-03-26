import React from 'react'
import styles from './sidemenu.module.css'

export default ({ children  }) => {
  return (
    <ul class={`nav ` + styles.sidemenu}>
      <li class="nav-item">
        <a class="nav-link active" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Logout</a>
      </li>
    </ul>
  )
}
