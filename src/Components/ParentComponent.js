import React,{ useState, useEffect, useCallback} from 'react'
import Button from './Button'
import Title from './Title'
import Count from './Count'

function ParentComponent() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(50000)
    const incrementAge = useCallback(
        () => {
            setage(age+1)
        },
        [salary],
    )
    const incrementSalary = useCallback(
        () => {
            setsalary(salary+1000)
        },
        [salary],
    )
    return (
        <div>
            <Title/>
            <Count text="age" count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="salary" count={salary}></Count>
            <Button handleClick={incrementSalary}>Increment salary</Button>
            
        </div>
    )
}

export default ParentComponent
