import {login} from "../../../../services/apiLoginAndRegister.js"
import React, {Component} from 'react'
import Button from "../../../../components/Button";
import {withRouter} from 'react-router-dom';
import LoginInput from "../../../../components/LoginInput";
import {clearAuthorization} from "../../../../utils/authorization";


class UserLogin extends Component {
  componentWillMount() {
    clearAuthorization();
  }

  render() {
    return (
        <div>
          <LoginInput buttonText={'用户登录'}/>
        </div>
    )
  }
}

export default withRouter(UserLogin)
