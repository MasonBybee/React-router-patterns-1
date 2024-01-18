function Home(props) {
  return (
    <div className="Home-Div">
      <h1>Welcome! Look at some dogs below!</h1>
      {props.props.dogs.map((val, idx) => {
        return (
          <div key={idx} className="dog-card">
            <h2>
              <a href={`/dogs/${val.name}`}>{val.name}</a>
            </h2>
            <img className="dog-img" src={val.src} alt={val.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
