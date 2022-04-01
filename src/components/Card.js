export default function Card(props) {
  const handleDelete = (index) => {
    const copyList = [...props.cart];
    console.log(copyList.splice(index, 1));
    props.setCart(copyList);
  };
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={props.img} class="img-fluid rounded-start" alt={props.name} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p>{props.price}</p>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => handleDelete(props.index)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
