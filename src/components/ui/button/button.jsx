
import './button.css'
const Button = ({label,...buttonProps}) => {


  return (
    <div className='form'>
        <button className='button' {...buttonProps}>
          {label}
        </button>
        
        
        

    </div>
  )
}

export default Button