import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserRegistrationIntro from './userRegistrationIntro/userRegistrationIntro'
import UserRegistrationStepOne from './userRegistrationStepOne/userRegistrationStepOne'
import UserRegistrationStepTwo from './userRegistrationStepTwo/userRegistrationStepTwo'
import UserRegistrationDone from './userRegistrationDone/userRegistrationDone'
import { userActions } from '../../actions/userActions'

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  onSubmit = (data) => {
    console.log("data", data)
    this.setState({ page: this.state.page + 1 })
  }

  nextPage = (data) => {
    console.log(data)
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
        {page === 3 && <UserRegistrationStepTwo previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
        {page === 4 && <UserRegistrationDone />}
      </div>
    )
  }
}

UserRegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  userActions: () => dispatch(userActions())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistrationForm)
