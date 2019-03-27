import React from 'react'
import styles from './callToAction.module.css'

export default ({ children  }) => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}
