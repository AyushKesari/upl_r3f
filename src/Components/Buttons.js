import { useState } from "react"

function Buttons() {
  const [shown, setShown] = useState(false)
  const [shown2, setShown2] = useState(false)
  const [shown3, setShown3] = useState(false)
  const [shown4, setShown4] = useState(false)

  const Frame1 = (props) => {
    return (
      <div className="iframe">
        <iframe title={props.src} allowFullScreen height="90%" src={props.src} width="90%" />
      </div>
    )
  }

  return (
    <div className="buttons">
      {shown ? <Frame1 src="https://d38jq1emmpkbwh.cloudfront.net" /> : null}
      <button onClick={() => setShown(!shown)}>1</button>
      {shown2 ? <Frame1 src="https://d23s8akr3x1ndo.cloudfront.net" /> : null}
      <button onClick={() => setShown2(!shown2)}>2</button>
      {shown3 ? <Frame1 src="https://d22qrbohzl5zu7.cloudfront.net" /> : null}
      <button onClick={() => setShown3(!shown3)}>3</button>
      {shown4 ? <Frame1 src="https://dv5uoxkgpl0af.cloudfront.net" /> : null}
      <button onClick={() => setShown4(!shown4)}>4</button>
    </div>
  )
}

export default Buttons
