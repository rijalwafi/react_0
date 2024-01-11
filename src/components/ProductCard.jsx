const ProductCard = (props) => {
  const HandleClick = (name) => {
    console.log(`my name is ${name}`)
  }
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        alt=""
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '10px 10px 0px 10px',
        }}
      />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.deskripsi} </p>
        <button
          className="button"
          onClick={() => HandleClick(props.name)}
          style={{
            borderRadius: '10px 10px 10px 10px',
            width: '30%',
            backgroundColor: 'aquamarine',
            textAlign: 'end',
            padding: '4px 4xp 5px 5px',
            margin: '4px 4xp 5px 5px',
          }}
        >
          submit
        </button>
      </div>
    </div>
  )
}

export default ProductCard
