import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import victoria from '../resources/Victoria.jpg';
import zero from '../resources/photo_mosaic/0.jpg'
import one from '../resources/photo_mosaic/1.jpg'
import two from '../resources/photo_mosaic/2.jpg'
import three from '../resources/photo_mosaic/3.jpg'
import four from '../resources/photo_mosaic/4.jpg'
import five from '../resources/photo_mosaic/5.jpg'
import six from '../resources/photo_mosaic/6.jpg'
import seven from '../resources/photo_mosaic/7.jpg'
import eight from '../resources/photo_mosaic/8.jpg'
import nine from '../resources/photo_mosaic/9.jpg'
import aboutUs1 from '../resources/about-us-1.png'
import giving from '../resources/giving.jpg'
import foodBank from '../resources/food-bank.jpg'
import '../styles/Body.css';
import CustomImageGallery from './ImageGallery';
import MediaCard from './Card';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';

const resources = [zero, one, two, three, four, five, six, seven, eight, nine];


const Body = () => {
    return (
        <div className="body">
            <img className='victoria-img' src={victoria} alt="victoria" />
            <div className="body-text">
                <h1 className='body-text-title'>ONE COMMUNITY FOR ALL <FontAwesomeIcon className='icon' icon={faHeart} /></h1>
                <p className='body-text-paragraph'>OBRF is a charity seeking to contribute to the empowerment of target communities through projects,
                    development programs, strategic partnerships and specialized human competencies.</p>
            </div>
            <div className='body-img-gallery'>
                <MediaCard image={giving} title="Donation" />
                <CustomImageGallery images={resources} />
                <MediaCard image={foodBank} title="Food Bank" />
            </div>
            < div className="about-us">
                <h1 className='about-us-title'>About Us <FontAwesomeIcon className='icon' icon={faHeart} /></h1>
                <div className='about-us-images'>
                    <img className="about-us-img" src={aboutUs1} alt="aboutUs1" />
                </div>

                < p className='about-us-paragraph'>We are a charity seeking to contribute to the empowerment of target communities through projects,
                    development programs, strategic partnerships and specialized human competencies.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dignissimos nisi
                    repellat quis libero inventore velit iste est, voluptates provident temporibus consequatur aut voluptate
                    animi ratione assumenda sed? Qui ut beatae non fugiat libero cumque quisquam temporibus sapiente? Ipsum
                    earum neque quae ullam laborum. Ea nostrum aut nisi accusamus quos ipsum sequi maiores architecto
                    quaerat <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Expedita voluptas hic,
                    adipisci neque maxime similique magnam fugiat sapiente dolor assumenda optio ex eveniet quisquam
                    consequuntur.Modi, assumenda non ex quos harum maxime magnam ipsum, mollitia est voluptate sed
                    repellendus iure sint velit quia dolor eos vel quas labore.Tenetur voluptatibus molestiae similique
                    nulla neque.Temporibus quo consectetur quibusdam natus nihil commodi quasi dolorem possimus aspernatur
                    cumque, facilis sit officia odio... <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum sunt corporis rem
                    impedit beatae incidunt autem molestiae quasi dolores consequatur?Sit, culpa dolores, neque suscipit
                    similique debitis tenetur quae quo magnam laborum nostrum sint repellendus est qui distinctio.
                    Voluptatum quo tempore reiciendis vero optio sint ipsa debitis aspernatur ipsam minus maxime labore
                    ullam cum.
                </p>

                <ul className="about-us-goals">
                    <h1 className="about-us-goals-title">Our Goals</h1>
                    <li className="about-us-goals-list">Innovating fundamental solutions to eradicate poverty in accordance with Islamic
                        values and
                        following the example of luminous charity models deeply rooted in Islamic history.</li>
                    <li className="about-us-goals-list">Providing assistance to those in need wherever they are, through the relief of
                        victims of wars,
                        disasters, etc., providing shelter to the homeless, food and drink for the hungry, clothing for the
                        needy, treatment and medicine for the sick and caring for the orphans and needy children.</li>
                    <li className="about-us-goals-list">Eliminating illiteracy, ignorance and spreading knowledge through building
                        educational institutes
                        and training centers.</li>
                    <li className="about-us-goals-list">Giving priority to development projects that would make available work
                        opportunities to the needy
                        and abstemious to become productive and rely on themselves so as not to be a burden to others.</li>
                    <li className="about-us-goals-list">Enabling needy communities to invest their resources and to improve their
                        situation and to transform
                        them from consumer communities into productive communities.</li>
                    <li className="about-us-goals-list">Spreading awareness about the Islamic world issues and introducing the Muslims
                        conditions in
                        different parts of the world.</li>
                    <li className="about-us-goals-list">Supporting Islamic communities to help them preserve their Islamic identity and
                        rights.</li>
                    <li className="about-us-goals-list">Strengthening the bonds of unity and brotherhood between the Islamic peoples in
                        light of the
                        teachings of Islam and the practical application of Islamic principles in achieving coexistence and
                        solidarity among human societies.</li>
                </ul>

            </div>
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Body
