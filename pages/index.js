import React, {useState} from 'react'

import json from '../pix.json'

const PAGE_SIZE = 20

function getPictures(page) {
  let start = (page - 1) * PAGE_SIZE
  return json.pictures.slice(start, start + PAGE_SIZE)
}

let pageNumbers = (function getPageNumbers() {
  let pages = Math.ceil(json.pictures.length / PAGE_SIZE)
  let pageNumbers = []
  for (let i = 0; i < pages; i++) {
    pageNumbers.push(i + 1)
  }
  return pageNumbers
})()

function Home() {
  let [page, setPage] = useState({
    page: 1,
    pictures: getPictures(1),
  })

  return <>
    <ul className="pager">
      {pageNumbers.map(num => {
        let onClick = (e) => {
          e.preventDefault()
          setPage({page: num, pictures: getPictures(num)})
        }
        return <li key={num}>{num === page.page ? <strong>{num}</strong> :
          <a href="#" onClick={onClick}>{num}</a>}</li>
      })}
    </ul>

    <ul className="gallery">
      {page.pictures.map(picture => {
        let id = picture.src.split('.')[0]
        let onClick = (e) => {
          e.preventDefault()
        }
        return <li>
          <a href={`/picture/${id}`} onClick={onClick}>
            <img src={`/static/thumbs/${id}.png`}/>
          </a>
        </li>
      })}
    </ul>

    <style jsx>{`
      .pager {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
      }
      .pager li {
      }
      
      .gallery a {
        width: 120px;
        height: 120px;
      }
    `}</style>
  </>
}

export default Home