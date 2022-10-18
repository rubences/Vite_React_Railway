import React, { useState } from 'react'

export const QuestionComponent = ({question, answer}) => {


    const [active, setActive] = useState(false)

    const show_answer = () => {
        setActive(!active)
    }
    console.log(active)

  return (
    <div class={"container-question" + (active ? " active" : "")} onClick={show_answer}>
        <p class="question">{question}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
        </p>
        <p class="answer">{answer}</p>
    </div>
  )
}
