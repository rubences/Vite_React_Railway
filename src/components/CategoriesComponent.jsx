import React, { useState } from 'react'
import { CategoryComponent } from './CategoryComponent'
import { QuestionComponent } from './QuestionComponent'
import { questions } from '../constants/Questions'
import { categories } from '../constants/Categories'

export const CategoriesComponent = () => {

    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [category, setCategory] = useState("curso")

    const show_first = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
        setCategory("curso")
    }
    const show_second = () => {
        setFirst(false)
        setSecond(true)
        setThird(false)
        setCategory("pago")
    }
    const show_third = () => {
        setFirst(false)
        setSecond(false)
        setThird(true)
        setCategory("seguridad")
    }

  return (
    <>
        <div className="categories">
            <div onClick={show_first}>
                <CategoryComponent name="Acerca del programa" active={first} svg={categories[0].svg}/>
            </div>
            <div onClick={show_second}>
                <CategoryComponent name="Metodos de pago" active={second} svg={categories[1].svg}/>
            </div>
            <div onClick={show_third}>
                <CategoryComponent name="Seguridad" active={third} svg={categories[2].svg}/>
            </div>
        </div>

        <div class="questions container text-light">
                <div class="container-questions">

                {
                    
                    //filter by categories
                    questions.map( (question) => (
                        (question.category === category) 
                        && <QuestionComponent id={question.id} {...question} />
                    ))
                }

                </div>
         </div>
                    
    </>
  )
}
