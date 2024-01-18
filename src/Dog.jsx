function Dog(props) {
  return (
    <div className="Dog-Div">
      <h2>{props.props.name}</h2>
      <h3>{props.props.age}</h3>
      <img className="dog-img" src={props.props.src} alt={props.props.name} />
      <h3>facts!</h3>
      <ul>
        {props.props.facts.map((val, idx) => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default Dog;
