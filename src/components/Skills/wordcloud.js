import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Java',
    'React',
    'Express',
    'NodeJS',
    'Redux',
    'HTML5',
    'CSS3',
    'JS',
    'MySQl',
    'C++',
    'C',
    'Python',
    'Git',
  ]
  const options = {
    radius: 300,
    maxSpeed: 'noraml',
    initSpeed: 'fast',
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  // to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
