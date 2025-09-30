import "../components/Button.css"

const Button = ({name, action}) => {
  return (
    <div>
        <button onClick={action}>{name}</button>
    </div>
  )
}

export default Button