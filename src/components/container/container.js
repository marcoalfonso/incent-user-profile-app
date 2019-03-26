import React from 'react'
import styles from './container.module.css'

export default ({ children  }) => {
  return (
    <section className={styles.container}>
      <div className={styles.body}>
        {children}
      </div>
    </section>
  )
}
