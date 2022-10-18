import React from 'react'
import { BannerComponent } from '../components/BannerComponent'
import { BuyActionComponent } from '../components/BuyActionComponent'
import { CardViewComponent } from '../components/CardViewComponent'
import { CategoriesComponent } from '../components/CategoriesComponent'
import { CategoryComponent } from '../components/CategoryComponent'
import { ColInfo2Component } from '../components/ColInfo2Component'
import { ColInfoComponent } from '../components/ColInfoComponent'
import { CommentComponent } from '../components/CommentComponent'
import { CounterBuyComponent } from '../components/CounterBuyComponent'
import { FooterComponent } from '../components/FooterComponent'
import { Header2Component } from '../components/Header2Component'
import { CardCurseComponent } from '../components/home/CardCurseComponent'
import { ImgComponent } from '../components/ImgComponent'
import { InfoSectionComponent } from '../components/InfoSectionComponent'
import { LogoComponent } from '../components/LogoComponent'
import { ProgressComponent } from '../components/ProgressComponent'
import { QuestionComponent } from '../components/QuestionComponent'
import { TitleComponent } from '../components/TitleComponent'
import { VideoComponent } from '../components/VideoComponent'
import { garantia } from '../constants/Images'

import { comments } from '../constants/Comments'
import { questions } from '../constants/Questions'

export const LadingPageScreen = () => {
  return (
    <>
        <LogoComponent />
        <div className='container'>
            <TitleComponent />
            <VideoComponent />
        </div>
        <BannerComponent />

        <div className="container">
            <Header2Component />
            <div class="d-flex justify-content-evenly">

                <div class="row">

                    <CardViewComponent />
                    <div className='col-md-6'>
                        <BuyActionComponent />
                    </div>

                </div>

            </div>


            <div className="container-progress">

                <ProgressComponent />

            </div>

            <InfoSectionComponent />

            <div class="container py-5 d-flex justify-content-evenly">

                <div className="row">

                    <ColInfoComponent file={garantia}/>
                    <ColInfo2Component />

                </div>

            </div>

        </div>

        <div className="container">

            <a href="#">
                {/* <ImgComponent file="/src/assets/botonpago1.png"/> */}
                <BuyActionComponent />
                {/* <CounterBuyComponent /> */}
            </a>

        </div>

        <div class="container d-flex justify-content-evenly my-5">

            <div className="row">

                <div className="col">

                {
                    comments.map( (comment) => (
                        <CommentComponent id={comment.id} {...comment} />
                    ))
                }

                </div>


            </div>

        </div>

        <div class="d-flex flex-column container">
            

            <h2 class="text-light align-self-center my-4">Preguntas Frecuentes</h2>


            <CategoriesComponent />

        
        </div>

        <FooterComponent />

    </>
  )
}
