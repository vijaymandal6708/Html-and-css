const Child5 = ({myname}) => {
  // let {name,age} = props

  return (
    <>
      <h1>This is child 5</h1>
      <h1>{myname.name}</h1>
      <h1>{myname.city}</h1>
    </>
  )
}

export default Child5