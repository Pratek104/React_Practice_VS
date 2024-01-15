import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>
                        5star
                    </h1>
                    <p>Making your life easy</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, earum error inventore eligendi debitis 
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor pudiandae minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur natus eius quibusdam id aut quam repellat? Error, nostrum veniam dignissimos eveniet maxime nihil corrupti, ad eum fugit voluptatem ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam a dolorum nihil eligendi est eos nam ullam ratione adipisci dignissimos.
                    dolores voluptatem consectetur aliquam veritatis provident nisi voluptates, ut iure facilis saepe aspernatur inventore. Molestiae distinctio voluptatibus, deleniti exercitationem dolorum officiis velit minima nulla est odit pariatur dolorem rerum, architecto, sapiente voluptas iusto. Odio, praesentium reprehenderit ad aliquid iusto, esse deserunt eum tenetur veritatis labore et quas, illo ut.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"0.9s"
                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}

export default Home