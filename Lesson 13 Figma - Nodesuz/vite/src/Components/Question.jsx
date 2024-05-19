import React, { useRef, useState } from 'react'

const Question = ({ question, answer, id }) => {
    const [plus, setPlus] = useState('+')
    const pe = useRef()

    const handleclick = (e) => {
        e.target.parentElement.nextElementSibling.children[0].classList.toggle('off')
        e.target.parentElement.nextElementSibling.children[0].classList.toggle('on')
        if (plus === '+') {
            setTimeout(() => {
                setPlus('-')
            }, 50);
        }
        else {
            setTimeout(() => {
                setPlus('+')
            }, 50);
        }
    }

    return (
        <div className='question'>
            <div onClick={handleclick} className='left2'>
                <h2>0{id}</h2>
                <h1>{question}</h1>
                <h3>{plus}</h3>
            </div>
            <div className='right2'>
                <div className='pdiv off' ref={pe}>
                    <p>
                        {answer}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Question