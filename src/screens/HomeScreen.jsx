import React from 'react'
import { FooterComponent } from '../components/FooterComponent'
import { CardCurseComponent } from '../components/home/CardCurseComponent'
import { NavbarComponent } from '../components/home/NavbarComponent'
import { SkillComponent } from '../components/home/SkillComponent'
import { TitleHomeComponent } from '../components/home/TitleHomeComponent'
import { skills } from '../constants/Skills'
import { courses } from '../constants/Courses'

export const HomeScreen = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <TitleHomeComponent />
        <h2 className="text-light my-4">Cursos</h2>

        <div className='cursos justify-content-center'>

          {
            courses.map((course) => (
              <CardCurseComponent key={course.id} {...course} />
            ))
          }


        </div>

        <h2 class="text-light">Skills</h2>

        <div className="icons row">

          {
            skills.map(skill => (
              <SkillComponent key={skill.id} {...skill} />
            ))
          }

        </div>

        <FooterComponent />

      </div>
    </>
  )
}
