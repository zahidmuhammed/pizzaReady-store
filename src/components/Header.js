import logo from "../assets/food.png";

const Header = () => {
  return (
    <div
      className="sticky-top"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#112241bb",
          color: "#fff",
          height: "70px",
          fontSize: "30px",
        }}
      >
        <img src={logo} alt="logo" height={30} />
        PizzaReady
      </div>
    </div>
  );
};

export default Header;
