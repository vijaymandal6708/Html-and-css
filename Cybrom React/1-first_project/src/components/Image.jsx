import myimg from '../assets/react.svg'

function Image(){
  return(
    <>
      <img src="vite.svg"/>
      <img src="image.png"/>
      <div>
        <img src={myimg}/>
      </div>
    </>
  )
}

export default Image