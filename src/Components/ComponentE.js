import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './userContext'
import ComponentF from './ComponentF'

export class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E context {this.context}
               <ComponentF/>

            </div>
        )
    }
}

export default ComponentE
