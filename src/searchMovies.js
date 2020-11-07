import React from 'react'

const SearchMovies = () => {
  return (
    <form className='form'>
      <label className='input' htmlFor='query'>
        Movie Name
      </label>
      <input
        className='input'
        type='text'
        name='query'
        placeholder='i.e. Titanic'
      />
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchMovies
