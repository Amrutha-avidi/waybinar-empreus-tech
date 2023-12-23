 import { useEffect, useState } from "react"
import WebinarItem from "./WebinarItem"

function Webinars() {
  const [list, setList] = useState([])
  useEffect(() => {
    const data = () => {
      fetch('http://localhost:8000/webinars')
        .then((response) => response.json())
        .then((json) => setList(json))

    }
    data()
  }, [])
  return (
    <div className="webinar">
      <h1 className="webinar-head">LIVE WEBINARS</h1>
      <div className="webinar-container">
        {list.map(each => (
          <WebinarItem webinar={each} key={each.id} />
        ))}
      </div></div>
  )
}

export default Webinars