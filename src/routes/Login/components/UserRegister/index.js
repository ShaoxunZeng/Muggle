import {register} from '../../../../services/apiLoginAndRegister.js'
import React, {Component} from 'react'
import LoginInput from "../../../../components/LoginInput";
import RegisterInput from "../../../../components/RegisterInput";

class UserRegister extends Component {
    render() {
        return (
            <div>
                <RegisterInput/>
            </div>
        )
    }
}
export default UserRegister
