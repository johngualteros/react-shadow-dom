import React, { useEffect } from 'react'
import root from 'react-shadow';
import styles from './styles.css';

export const Quote = () => {

  // shadow dom examples

  const styles = `
    .quote {
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      text-align: center;
      margin: 2rem;
    }
    .author {
      display: block;
      font-size: 1rem;
      margin-top: 1rem;
    }
  `




  return (
    <root.div>
      <div className="quote">
        <p>
          "The greatest glory in living lies not in never falling, but in rising every time we fall."
        </p>
        <span className="author">- Nelson Mandela</span>
        <style>{styles}</style>
      </div>
    </root.div>
  )
}

// other shadow dom example for see the usage of shadow dom

export const Container = () => {

  const styles = `
    .container {
      border: 1px solid black;
      padding: 1rem;
      margin: 1rem;
    }

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 7rem;
    }
  `

  return (
    <root.div>
      <div className='container'>
        {/* use the styles */}
        <h1>Shadow DOM Example</h1>
        <p>
          Lorem
        </p>
        <style>{styles}</style>
      </div>
    </root.div>
  )
}
