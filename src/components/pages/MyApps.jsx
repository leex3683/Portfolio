import apps from "../AppCards";

function MyApps() {
  return (
    <div>
      <h2>My Apps</h2>

      <div className="card"  >
  <img className="card-img-top" src={apps[0].img} alt="Card image cap" style={{objectFit: 'cover', width:"100%", height:"30vh"}}/>
  <div className="card-body">
    <h5 className="card-title">{apps[0].name}</h5>
    <p className="card-text">{apps[0].text}</p>
  </div>

  <div className="card-body">
    {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
    </div>
  );
}

export default MyApps;
