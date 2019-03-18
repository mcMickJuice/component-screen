import React from 'react'
import qs from 'query-string'
import { Link } from 'react-router-dom'

// on load, check if there is a search param with an id
// if there is, scroll down to item
const historyItems = Array.from({ length: 30 }, (_, idx) => idx).map(id => ({
  id
}))

const nextLink = id => {
  const itemLength = historyItems.length
  const randomItem = Math.floor(Math.random() * itemLength)

  return Math.max(1, Math.min(randomItem, itemLength + 1))
}

const ComponentHistoryItem = ({ id, onItemMountReport }) => {
  const itemRef = React.useRef(null)
  React.useEffect(() => {
    if (itemRef.current != null) {
      const itemOffset = itemRef.current.offsetTop
      onItemMountReport({
        id,
        itemOffset
      })
    }
  }, [])

  const nextId = nextLink(id)

  return (
    <div
      ref={itemRef}
      style={{
        height: '300px'
      }}
    >
      <h3>I am content for {id}</h3>
      <span>
        Link to Item<Link to={`/history?id=${nextId}`}>{nextId}</Link>
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam
        odio, pretium ac hendrerit in, elementum vitae magna. Ut eu laoreet
        nunc, non mollis augue. Sed ac fringilla mauris, eu convallis urna.
        Praesent vel tellus non arcu consequat egestas. Nam posuere metus sed
        dui pharetra sodales. Duis pulvinar posuere lorem, nec sagittis nulla
        dapibus a. Mauris at metus vitae mauris lacinia tempor non quis mi.
        Suspendisse sed sem tellus. Etiam vehicula, tortor non congue posuere,
        elit eros pretium arcu, in varius ipsum ligula sit amet risus.
      </p>
    </div>
  )
}

const ComponentHistory = ({ match, location }) => {
  const searchParams = location.search
  const arrRef = React.useRef([])
  const parentRef = React.useRef(null)

  function handleItemMount(item) {
    arrRef.current.push(item)
  }

  let selectedId = -1
  if (searchParams !== '') {
    const queryStringParsed = qs.parse(searchParams)
    const parsedId = Number(queryStringParsed.id)
    if (!isNaN(parsedId)) {
      selectedId = parsedId
    }
  }
  React.useEffect(
    () => {
      if (selectedId > -1) {
        const item = arrRef.current.find(item => item.id === selectedId)

        parentRef.current.scrollTo({
          top: item.itemOffset,
          behavior: 'smooth'
        })
      }
    },
    [selectedId]
  )

  return (
    <div ref={parentRef} style={{ height: '400px', overflowY: 'scroll' }}>
      <h2>History</h2>

      {historyItems.map(item => (
        <ComponentHistoryItem
          onItemMountReport={handleItemMount}
          isScrollTo={selectedId === item.id}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default ComponentHistory
