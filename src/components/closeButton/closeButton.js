import React from 'react'
import styles from './closeButton.module.css'

export default ({ children  }) => {
  return (
    <div className={styles.closeButton}>{`X Close`}</div>
  )
}
