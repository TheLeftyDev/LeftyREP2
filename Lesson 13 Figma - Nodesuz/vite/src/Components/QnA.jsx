import React, { useRef, useState } from 'react'
import { QnAdata } from './MockData'
import Question from './Question'

const QnA = () => {
    // const [maxHeight, setMaxHeight] = useState(0)

    return (
        <div className='qna'>
            {QnAdata.map((element) =>{
               return <Question key= {element.id} id = {element.id} question = {element.question} answer = {element.answer}/>
            })}

        </div>

    )
}

export default QnA