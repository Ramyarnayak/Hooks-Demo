import React, { Component } from 'react'
import ComponentE from './ComponentE'
import ComponentF from './ComponentF'

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE/>
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentC
