import React, {Component} from 'react'
import MemberCard from "../../../../../../components/MemberCard";

class Payment extends Component {


    render() {
     return (
         <div>
             <MemberCard memberInfo={this.props.memberInfo}/>
         </div>
     )
 }
}
export default Payment
