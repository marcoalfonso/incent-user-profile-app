import React from 'react'
import styles from './backButton.module.css'

export default ({ children  }) => {
  return (
    <div className={styles.backButton}>{`< Back`}</div>
  )
}
