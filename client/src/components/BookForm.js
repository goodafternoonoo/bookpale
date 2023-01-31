import React from 'react'
import png from '../js.png'

import '../css/BookForm.css'

export default function BookForm() {
    return (
    <div>
      <ul className='content'>
        <li><img alt='' src={png}></img><span>1</span></li>
        <li><img alt='' src={png}></img><span>2</span></li>
        <li><img alt='' src={png}></img><span>3</span></li>
        <li><img alt='' src={png}></img><span>4</span></li>
        <li><img alt='' src={png}></img><span>5</span></li>
      </ul>
    </div>)
}