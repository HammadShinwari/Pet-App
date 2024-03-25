import React from 'react'
import Pets from './Pets'

function Results({ pets }) {
  return (
    <div className='search'>
      {
        !pets.length ? (
          <h1>No pets Found</h1>
        )
          :
          (
            pets.map((item, ind) => {
              return <Pets id={item.id} name={item.name} animal={item.animal} breed={item.breed} location={item.state} key={item.id} images={item.images} />
            })
          )
      }
    </div>
  )
}

export default Results;