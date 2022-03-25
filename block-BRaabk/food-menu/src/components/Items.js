function Items(props) {
  return (
    <div className="grid">
      {props.menuItem.map((type) => {
        return (
          <div key={type.id} className="box">
            <img src={type.img} alt="pic" />
            <div>
              <h3>
                <span>{type.title}</span>
                <span className="price">$ {type.price}</span>
              </h3>
              <hr />
              <p>{type.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
