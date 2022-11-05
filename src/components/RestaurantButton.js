const RestaurantButton = props => {
  const orderOne = props.orderOne;
  return (
    <button className="btn btn-primary" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
