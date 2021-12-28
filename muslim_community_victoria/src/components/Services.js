import React from 'react'

import { faBook, faBriefcase, faDesktop, faGraduationCap, faHeart, faHeartbeat, faHome, faLifeRing, faMedkit, faMicrochip, faReplyAll, faShoppingBasket, faStethoscope, faTruck, faUsers, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import foodBank from '../resources/food_bank.jpg'
import communitySupport from '../resources/community_support.jpg'
import youthSupport from '../resources/youth_support.jpg'

import '../styles/Services.css'
import { faComment, faFutbol } from '@fortawesome/free-regular-svg-icons'

const Services = () => {
    return (
        <section id="section-3" className="section-3">
            <div className="section-3-1">
                <h1 className='section-3-1-title'>Our Services <FontAwesomeIcon className='icon' icon={faHeart} /></h1>
                <div className="section-3-1-btns">
                    <button className="section-3-1-btn">
                        <a className='donate-btn' href="https://www.canadahelps.org/en/" target="_blank" rel="noreferrer">Donate </a>
                    </button>
                    <button className="section-3-1-btn">Volunteer</button>
                </div>

            </div>
            <div className="division-main-title">
                <h1>Program Divisions</h1>
            </div>

            <div className="section-3-divisions">
                <div className="division-1">
                    <img className="division-img" src={foodBank} alt="food-bank" />
                    <div className="header">
                        <h1 className="division-title">
                            FOOD BANK PROGRAMS
                        </h1>
                        <p className="division-text">
                            Serves the needs of clients who have special dietary needs (halal, kosher, vegetarian, and
                            vegan).
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faTruck} />
                            FOOD DISTRIBUTION
                        </h1>

                        <p className="paragraph-text">
                            Food security is provided by giving healthy food hampers, which include fruits, vegetables,
                            cheese, milk, rice, meat, to ensure physical needs of families are met.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faMedkit} />
                            REFUGEE SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            (toiletries / diapers) – Provide necessities for personal hygiene to newly arrived immigrant and
                            refugee families and children.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faLifeRing} />
                            DISABILITY SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            Diapers and adult diapers are provided to children and adults who may have developed urinary
                            incontinence due to trauma or disability.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faDesktop} />
                            COMPUTER DISTRIBUTION
                        </h1>

                        <p className="paragraph-text">
                            Refurbished computers / laptops are provided to families with school aged children to assist
                            them with educational requirements.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faShoppingBasket} />
                            FURNITURE
                        </h1>

                        <p className="paragraph-text">
                            Working in partnership with other agencies and local partners, furniture items are provided to
                            families who are most in need of basic furniture.
                        </p>
                    </div>

                </div>
                <div className="division-2">
                    <img className="division-img" src={communitySupport} alt="" />
                    <div className="header">
                        <h1 className="division-title">
                            ASPIRE PROGRAMS
                        </h1>
                        <p className="division-text">
                            Promotes the development and independence of clients by focusing on the core areas of education,
                            employment, and community support.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faUsers} />
                            CASE MANAGEMENT
                        </h1>

                        <p className="paragraph-text">
                            A trained volunteer caseworker will provide one on one social support to newcomer families.
                            Caseworkers provide emotional support and connect families to local resources.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faBriefcase} />
                            EMPLOYMENT SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            To encourage financial independence, we aim to provide support for clients and connecting them
                            with employment support workshops, and training.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faHeartbeat} />
                            PHARMACY/MEDICAL SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            One on one consultation provided to families who have questions regarding health coverage,
                            medication, Pharmacare and IFHP coverage.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faStethoscope} />
                            DENTAL SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            Providing opportunities for families to be assessed by professional dentists, and learn about
                            preventive dental care and oral hygiene.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faHeart} />
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            PARENTAL SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            The Parenting Support Program (PSP) aims to help new immigrant and refugee families settle
                            successfully in a new culture and contribute to Canadian society..
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faWheelchair} />
                            SPECIAL NEEDS SUPPORT
                        </h1>

                        <p className="paragraph-text">
                            Providing awareness and education, and to advocate for individuals with Special Needs to have
                            equal access to their faith by providing support programs in an encouraging environment.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faReplyAll} />
                            PRISON OUTREACH
                        </h1>

                        <p className="paragraph-text">
                            A program that provides culturally-relevant social and emotional support to inmates and formerly
                            incarcerated persons self-identifying as Muslim.
                        </p>
                    </div>

                </div>
                <div className="division-3">
                    <img className="division-img" src={youthSupport} alt="" />
                    <div className="header">
                        <h1 className="division-title">
                            YOUTH SUPPORT PROGRAMS
                        </h1>
                        <p className="division-text">
                            Programs and services tailored for the mental health of our community with a special focus on
                            our youth.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faHome} />
                            HOPE
                        </h1>

                        <p className="paragraph-text">
                            This program strives to provide a safe space for new , returning youth to explore issues
                            pertaining everyday life, faith, and overall emotional well-being.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faComment} />
                            BREATHING ROOM
                        </h1>

                        <p className="paragraph-text">
                            This program strives to provide a safe space for new , returning youth to explore issues
                            pertaining everyday life, faith, and overall emotional well-being.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faGraduationCap} />
                            SUMMER SCHOOL
                        </h1>

                        <p className="paragraph-text">
                            The Summer School Program aims to ease the transition of Syrian refugee children into the BC
                            education system by providing English, Math, and Canadian socialization classNamees.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faMicrochip} />
                            DIGITAL STORYTELLING
                        </h1>

                        <p className="paragraph-text">
                            Digital Stories are short videos which allow for a more appealing delivery of a story rather
                            than just a verbal story.Sometimes all that people need is to have their voices heard to remind
                            them they’re not alone.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faFutbol} />
                            YOUTH SOCCER
                        </h1>

                        <p className="paragraph-text">
                            Soccer training programs run weekly on Saturday for kids 6-18. Once the kids are more skilled,
                            they are recruited on the MFB united team, who play against other teams in the community.
                        </p>
                    </div>
                    <div className="paragraph">

                        <h1 className="paragraph-title">
                            <FontAwesomeIcon className='icon' icon={faBook} />
                            CAPACITY BUILDING
                        </h1>

                        <p className="paragraph-text">
                            Helping youth develop skills in our community by offering courses/workshops in cooperation with
                            local partners.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Services
