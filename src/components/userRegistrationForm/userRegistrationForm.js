import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserRegistrationIntro from '../../components/userRegistrationIntro/userRegistrationIntro'
import UserRegistrationStepOne from '../../components/userRegistrationStepOne/userRegistrationStepOne'
import UserRegistrationStepTwo from '../../components/userRegistrationStepTwo/userRegistrationStepTwo'
import UserRegistrationDone from '../../components/userRegistrationDone/userRegistrationDone'

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }


  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <UserRegistrationIntro onSubmit={this.nextPage}/>}
        {page === 2 && <UserRegistrationStepOne previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <UserRegistrationStepTwo previousPage={this.previousPage} onSubmit={onSubmit}/>}
        {page === 4 && <UserRegistrationDone />}
      </div>
    )
  }
}

UserRegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default UserRegistrationForm
