function ListApps(props) {
  return (
    <ul>
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.apps.map((item) => (
        <div className="my-3  pb-5" key={item.id}>
          <div className="card shadow">
            <img
              className="card-img-top"
              src={item.img}
              alt="Card image cap"
              style={{ objectFit: "cover", width: "100%", height: "30vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.text}</p>
            </div>

            <div className="card-body">
              <button href={item.glink} className="card-link btn btn-dark">
                Github Repo
              </button>
              <button href={item.link} className="card-link btn btn-dark">
                Live Link
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default ListApps;
