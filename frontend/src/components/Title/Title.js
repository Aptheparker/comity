// css
import "./Title.css"

const Title =({text, fontSize, marginTop, marginRight})=>{

  const titleStyle = {
    fontSize: `${fontSize}px`,
    marginTop: `${marginTop}px`,
    marginRight: `${marginRight}px`
  }

  return <div className="title" style={titleStyle}>{text}</div>
}

export default Title;