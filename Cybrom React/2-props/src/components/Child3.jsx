const Child3 = (props) => {
  // let {name,age} = props

  return (
    <>
      <h1>This is child 3</h1>
      <h1>{props.userinfo.name}</h1>
      <h1>{props.userinfo.city}</h1>
      <h1>{props.userinfo.contact}</h1>
    </>
  )
}

export default Child3