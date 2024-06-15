import React, { useEffect, useState } from 'react'
import ProfessionalCard from '../ProfessionalCard'

const Professional = () => {
  const [data, setData] = useState([])
  function datalar() {
    fetch('https://cafenaserver.onrender.com/professional')
      .then(res => res.json())
      .then(items => setData(items))
  }
  useEffect(() => {
    datalar()
  }, [])
  console.log(data)

  return (
    <div className='row'>
      {data &&
        data.map(x => (
          <ProfessionalCard
            image={x.image}
            name={x.name}
            experience={x.experience}
          />
        ))}
    </div>
  )
}

export default Professional
