import React from 'react'
import Cart from '../assets/images/icon-cart.svg'

const Article = ({darkHandler, dark}) => {

    const style = dark ? "dark" : "white"

    return (
        <>
            <article className={`article ${style}`}>
                <div className='article__header'>
                    <div className='header__info'>
                        <span className='header__span'>perfume</span>
                        <div className='header__check'>
                            <input 
                                className='header__dark' 
                                type="checkbox"
                                id="checkbox"
                                onChange={darkHandler}
                            />
                            <label className='ball' htmlFor='checkbox'></label>
                        </div>
                    </div>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                </div>
                <p className='article__text'>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className='article__price'>
                    <h2>$149.99</h2>
                    <span>$169.99</span>
                </div>
                <button className='submit-button'>
                    <img src={Cart}></img>
                    Add to Cart
                </button>
            </article>
            {/*
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </div>
            */}
        </>
    )
}

export { Article }