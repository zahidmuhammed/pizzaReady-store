const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className="sticky-bottom"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1586511926434-91876a99354f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="sticky-bottom d-flex justify-content-center"
        style={{
          backgroundColor: "#112241bb",
          height: "50px",
          color: "#fff",
          alignItems: "center",
        }}
      >
        © {year} PizzaReady, Inc
      </div>
    </div>
  );
};

export default Footer;
