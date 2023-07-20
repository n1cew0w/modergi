import {useState} from 'react'

import './App.css'
import card from './assets/card.png'
import button from './assets/button.png'

function App() {
    return (
        <>
            <div>
                {/*<video width="600" height="100%" autoPlay loop muted playsInline>*/}
                {/*    <source src="https://rotato.netlify.app/alpha-demo/movie-webm.webm" type="video/webm"></source>*/}
                {/*</video>*/}
                <div className='socials'>
                    <a href="https://www.instagram.com/modergi/" target="_blank">Instagram</a>
                    <a href="https://www.youtube.com/channel/UCmGEFW1wcB7W4zHoSBg1ImQ" target="_blank">YouTube</a>
                    <a href="https://vk.com/ignatovich000" target="_blank">Вконтакте</a>
                </div>
                <div className='upper-main'>
                    <img src={card} alt=""></img>
                    <div className='upper-text'>
                        <div className='upper-head-text'>
                            2D, 3D MOTION DESIGNER
                        </div>
                        <div className='upper-head-name'>
                            ERIK GILIZHDINOV
                        </div>
                        <div className='upper-head-desc'>
                            Занимаюсь визуализацией продуктов и услуг. Создаю рекламные (и не только) видео на основе
                            анимированной графики.
                        </div>
                    </div>
                </div>
                <div className='main-text'>
                    <div className='text'>
                        <span className='zabud'>ЗАБУДЬ. </span><span className='word'>СЛОВО.</span> <span
                        className='advert'>РЕКЛАМА.</span>
                    </div>
                    <div className='text-description'>
                        Если видео вызывает эстетическое удовольствие и положительные эмоции, то в восприятие зрителя
                        оно не только перестает быть
                  рекламным, но и повышает доверие к бренду.
                    </div>
                </div>
                <div className='buttons'>
                    <a href="">
                        <div className='button'>
                            <img className='btn-image' src={button} alt=""></img>
                            <span className='btn-text'>
                          Портфолио
                      </span>
                        </div>
                    </a>
                    <a href="https://t.me/Modergi" target='_blank'>
                        <div className='button button2'>
                            <img className='btn-image' src={button} alt=""></img>
                            <span className='btn-text2'>
                          Cвязаться со мной
                      </span>
                        </div>
                    </a>

                </div>
            </div>

        </>
    )
}

export default App
