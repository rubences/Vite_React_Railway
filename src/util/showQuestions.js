import React from 'react'
import { questions } from '../constants/Questions'

export const showQuestions = ({category}) => {

    const questionsToShow = []

    questions.map( (question) => (
        (question.category === category) 
        && questionsToShow.push(question)
    ))

  return questionsToShow
}
