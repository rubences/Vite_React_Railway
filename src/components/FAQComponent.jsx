import React from 'react'
import { CategoriesComponent } from './CategoriesComponent'
import { QuestionComponent } from './QuestionComponent'

export const FAQComponent = () => {
  return (
    <>
        <div class="categories">

            <CategoriesComponent />

        </div>
        <div class="questions container text-light">
                <div class="container-questions">

                {
                    
                    //filter by categories
                    questions.map( (question) => (
                        (question.category === "curso") 
                        && <QuestionComponent id={question.id} {...question} />
                        // <QuestionComponent answer={question.answer} {...question} />
        
                    ))
                }

                </div>
         </div>
    </>
  )
}
