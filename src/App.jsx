import "./App.css";

function App() {
  let user = {
    id: "2",
    firstName: "Aiden",
    lastName: "Schuppe",
    phone: "1-826-407-7913",
    email: "Osbaldo73@gmail.com",
    address: {
      region: "Delaware",
      zip: "92218-6311",
    },
    image: "https://picsum.photos/200?random=2",
    cars: ["Ford", "Toyota", "Mercedes"],
  };

  return (
    <>
      <h1>Users information ⬇</h1>

      <div className="wrapper container">
        <div className="user">
          <img src="https://picsum.photos/200/300" alt="picture" />
          <h3>Andres Cristansen</h3>
          <span>
            <h6>Telefon:+998901234567</h6>
            <h6>Email:andres@gmail.com</h6>
          </span>
          <h5>Address: Shvetsariya Glublin </h5>
          <span>
            Cars:
            <p>{user.cars[0]}</p>
            <p>{user.cars[1]}</p>
            <p>{user.cars[2]}</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
