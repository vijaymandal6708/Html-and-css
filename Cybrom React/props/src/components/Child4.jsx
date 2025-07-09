const Child4 = (props) => {
  // let {name,age} = props

  return (
    <>
      <h1>This is child4</h1>
      <h1>{props.user.name}</h1>
      <h1>{props.user.city}</h1>
      <h1>{props.user.contact}</h1>
    </>
  )
}

export default Child4