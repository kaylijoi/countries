import React from 'react'

const Languages = ({ country }) => {
  return (
    <ul>
      {country.languages.map(language => (
        <li key={Languages.name}>{language.name}</li>
      ))
      }    
    </ul>
  )
}

export default Languages
