// css
import "./Text.css"

const Text =({text, color, fontSize, marginTop, marginRight, marginLeft})=>{

  const textStyle = {
    color: `${color}`,
    fontSize: `${fontSize}px`,
    marginTop: `${marginTop}px`,
    marginRight: `${marginRight}px`,
    marginLeft: `${marginLeft}px`,
  }

  return <div className="text" style={textStyle}>{text}</div>
}

export default Text;