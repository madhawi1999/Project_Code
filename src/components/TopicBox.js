import React from 'react'
import './topicbox.css'


export default function TopicBox() {
  
    const topic = "Gold Aquarium"

     return (
    <div>
      <div className="Topic">
        <span className="text">{topic}</span>
      </div>
    </div>
  )
}
