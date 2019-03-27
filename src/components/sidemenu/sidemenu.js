import React from 'react'
import styles from './sidemenu.module.css'
import CloseIcon from './close.svg'

export default ({ children  }) => {
  return (
    <ul className={`nav ` + styles.sidemenu}>
      <li className={`nav-item ` + styles.firstItem}>
        <a className="nav-link active" href="/">
          <div className={styles.mobileButtonContainer}>
            <img className={styles.closeIcon} src={CloseIcon} alt="Mobile Close Button" />
          </div>
          <div className={styles.link}>Home</div>
        </a>
      </li>
      <li className={`nav-item ` + styles.secondItem}>
        <a className="nav-link disabled" href="#">
          <div className={styles.mobileButtonContainer}>
            <img className={styles.closeIcon} src={CloseIcon} alt="Mobile Close Button" />
          </div>
          <div>Settings</div>
        </a>
      </li>
      <li className={`nav-item ` + styles.thirdItem}>
        <a className="nav-link disabled" href="#">
          <div className={styles.mobileButtonContainer}>
            <img className={styles.closeIcon} src={CloseIcon} alt="Mobile Close Button" />
          </div>
          <div>Logout</div>
        </a>
      </li>
    </ul>
  )
}
