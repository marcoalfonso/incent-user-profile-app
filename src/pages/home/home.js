import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/container/container'
import logo from '../../logo.png'
import styles from './home.module.css'
import CallToAction from '../../components/callToAction/callToAction'
class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className={`nav ` + styles.navbar}>
            <a className={`navbar-brand ` + styles.navbarBrand} href="/">
              <img src={logo} width="160" height="30" alt="Incent logo" />
            </a>
            <Link className={styles.homeLink} to="/">Home</Link>
            <Link className={styles.profileLink} to="/profile">Profile</Link>
          </nav>
        </header>
        <Container>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recent with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <CallToAction>
            <Link to="/profile">Complete profile</Link>
          </CallToAction>
        </Container>
      </div>
    );
  }
}

export default Home;
