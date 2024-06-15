import React, { useEffect, useState } from 'react'
import NewsCard from '../NewsCard'

const News = () => {
  const [data, setData] = useState([])
  function datalar() {
    fetch('https://cafenaserver.onrender.com/news')
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
          <NewsCard
            key={x.id}
            image={x.image}
            name={x.name}
            about={x.about}
            date={x.data}
            description={x.description}
          />
        ))}
    </div>
  )
}

export default News
