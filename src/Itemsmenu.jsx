import React, { useState } from "react";
import "./Three.css";
const MenuItemCard = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Caesar Salad",
      price: 49,
      image:
        "https://img.freepik.com/free-photo/chicken-caesar-salad-black-background_123827-29280.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Italian Salad",
      price: 55,
      image:
        "https://img.freepik.com/free-photo/aerial-view-people-getting-food_53876-20786.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Greek Salad",
      price: 60,
      image: "/greeksalad2.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Cobb Salad",
      price: 49,
      image:
        "https://img.freepik.com/premium-photo/top-view-tasty-salad-with-seasonings-white-floor-salad-vegetable-meal-food-health_960396-767398.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);

  const handleQuantityChange = (index, type) => {
    const newMenuItems = [...menuItems]; //all items at onetime iterating
    if (type === "increase") {
      newMenuItems[index].quantity += 1;
      newMenuItems[index].totalPrice += newMenuItems[index].price;
    } else if (newMenuItems[index].quantity > 0) {
      newMenuItems[index].quantity -= 1;
      newMenuItems[index].totalPrice -= newMenuItems[index].price;
    }
    setMenuItems(newMenuItems);
  };

  const handleAddToCart = (menuItem) => {
    const newCart = [...cart]; //all items at onetime iterating
    const existingItem = newCart.find((item) => item.id === menuItem.id);
    if (existingItem) {
      existingItem.quantity += menuItem.quantity;
      existingItem.totalPrice += menuItem.totalPrice;
    } else {
      newCart.push(menuItem);
    }
    setCart(newCart);
    alert(`Added ${menuItem.name} to cart`);
  };

  const [showMenuItems1, setShowMenuItems1] = useState(false);
  const [menuItems1, setMenuItems1] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 100,
      image: "/chocolateCake.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Cheese Cake",
      price: 80,
      image: "/cheeseCake.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Vanilla Custard",
      price: 80,
      image: "/vanilla.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Sorbet",
      price: 90,
      image: "/sorbetCake.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange1 = (index1, type1) => {
    const newMenuItems1 = [...menuItems1];
    if (type1 === "increase") {
      newMenuItems1[index1].quantity += 1;
      newMenuItems1[index1].totalPrice += newMenuItems1[index1].price;
    } else if (newMenuItems1[index1].quantity > 0) {
      newMenuItems1[index1].quantity -= 1;
      newMenuItems1[index1].totalPrice -= newMenuItems1[index1].price;
    }
    setMenuItems1(newMenuItems1);
  };
  const handleAddToCart1 = (menuItem1) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem1.id);
    if (existingItem) {
      existingItem.quantity += menuItem1.quantity;
      existingItem.totalPrice += menuItem1.totalPrice;
    } else {
      newCart.push(menuItem1);
    }
    setCart(newCart);
    alert(`Added ${menuItem1.name} to cart`);
  };

  const [showMenuItems2, setShowMenuItems2] = useState(false);
  const [menuItems2, setMenuItems2] = useState([
    {
      id: 1,
      name: "Chicken Noodles",
      price: 90,
      image: "/Chicken noodle.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Egg Noodles",
      price: 80,
      image: "/Egg noodle.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Veg Manchuria",
      price: 80,
      image: "/Manchuria.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Chicken fried Rice",
      price: 70,
      image: "/Chicken-fried-rice.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 5,
      name: "Egg Rice",
      price: 60,
      image: "/Egg Fried Rice.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange2 = (index2, type2) => {
    const newMenuItems2 = [...menuItems2];
    if (type2 === "increase") {
      newMenuItems2[index2].quantity += 1;
      newMenuItems2[index2].totalPrice += newMenuItems2[index2].price;
    } else if (newMenuItems2[index2].quantity > 0) {
      newMenuItems2[index2].quantity -= 1;
      newMenuItems2[index2].totalPrice -= newMenuItems2[index2].price;
    }
    setMenuItems2(newMenuItems2);
  };

  const handleAddToCart2 = (menuItem2) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem2.id);
    if (existingItem) {
      existingItem.quantity += menuItem2.quantity;
      existingItem.totalPrice += menuItem2.totalPrice;
    } else {
      newCart.push(menuItem2);
    }
    setCart(newCart);
    alert(`Added ${menuItem2.name} to cart`);
  };

  const [showMenuItems3, setShowMenuItems3] = useState(false);
  const [menuItems3, setMenuItems3] = useState([
    {
      id: 1,
      name: "ButterNaan (Chicken)",
      price: 160,
      image: "/butternaan.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "ButterNaan (Panneer)",
      price: 140,
      image: "/butter-panneer.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Chicken Curry",
      price: 120,
      image: "/Chicken Curry.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Rotis",
      price: 20,
      image: "/Rotis.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange3 = (index3, type3) => {
    const newMenuItems3 = [...menuItems3];
    if (type3 === "increase") {
      newMenuItems3[index3].quantity += 1;
      newMenuItems3[index3].totalPrice += newMenuItems3[index3].price;
    } else if (newMenuItems3[index3].quantity > 0) {
      newMenuItems3[index3].quantity -= 1;
      newMenuItems3[index3].totalPrice -= newMenuItems3[index3].price;
    }
    setMenuItems3(newMenuItems3);
  };

  const handleAddToCart3 = (menuItem3) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem3.id);
    if (existingItem) {
      existingItem.quantity += menuItem3.quantity;
      existingItem.totalPrice += menuItem3.totalPrice;
    } else {
      newCart.push(menuItem3);
    }
    setCart(newCart);
    alert(`Added ${menuItem3.name} to cart`);
  };

  const [showMenuItems4, setShowMenuItems4] = useState(false);
  const [menuItems4, setMenuItems4] = useState([
    {
      id: 1,
      name: "Masala Fish FRy",
      price: 250,
      image: "/masalafishfry.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Fish_Takos",
      price: 200,
      image: "/Fish_Takos.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Grilly Salmon",
      price: 219,
      image: "/Griiy_Salman.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange4 = (index4, type4) => {
    const newMenuItems4 = [...menuItems4];
    if (type4 === "increase") {
      newMenuItems4[index4].quantity += 1;
      newMenuItems4[index4].totalPrice += newMenuItems4[index4].price;
    } else if (newMenuItems4[index4].quantity > 0) {
      newMenuItems4[index4].quantity -= 1;
      newMenuItems4[index4].totalPrice -= newMenuItems4[index4].price;
    }
    setMenuItems4(newMenuItems4);
  };

  const handleAddToCart4 = (menuItem4) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem4.id);
    if (existingItem) {
      existingItem.quantity += menuItem4.quantity;
      existingItem.totalPrice += menuItem4.totalPrice;
    } else {
      newCart.push(menuItem4);
    }
    setCart(newCart);
    alert(`Added ${menuItem4.name} to cart`);
  };

  const [showMenuItems5, setShowMenuItems5] = useState(false);
  const [menuItems5, setMenuItems5] = useState([
    {
      id: 1,
      name: "Clear Chicken Soup",
      price: 20,
      image: "/Clear-Chicken-Soup-2-3.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Dried Veg Soup",
      price: 15,
      image: "/DriedVegSoup.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Italian Veg Soup",
      price: 20,
      image: "/ItalianVegsoup.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Tomatto Soup",
      price: 15,
      image: "/TomatoSoup.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 5,
      name: "Carrot Soup",
      price: 15,
      image: "/carrotSoup.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 6,
      name: "Cucumber Soup",
      price: 15,
      image: "/CucumberSoup.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange5 = (index5, type5) => {
    const newMenuItems5 = [...menuItems5];
    if (type5 === "increase") {
      newMenuItems5[index5].quantity += 1;
      newMenuItems5[index5].totalPrice += newMenuItems5[index5].price;
    } else if (newMenuItems5[index5].quantity > 0) {
      newMenuItems5[index5].quantity -= 1;
      newMenuItems5[index5].totalPrice -= newMenuItems5[index5].price;
    }
    setMenuItems5(newMenuItems5);
  };

  const handleAddToCart5 = (menuItem5) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem5.id);
    if (existingItem) {
      existingItem.quantity += menuItem5.quantity;
      existingItem.totalPrice += menuItem5.totalPrice;
    } else {
      newCart.push(menuItem5);
    }
    setCart(newCart);
    alert(`Added ${menuItem5.name} to cart`);
  };

  const [showMenuItems6, setShowMenuItems6] = useState(false);
  const [menuItems6, setMenuItems6] = useState([
    {
      id: 1,
      name: "Veg Biryani",
      price: 80,
      image: "/easy-vegetable-biryani.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Curd Rice",
      price: 35,
      image: "/curd-rice-featured.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Chilli Panneer",
      price: 79,
      image: "/ChilliPanneer.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Panneer Pakora",
      price: 150,
      image: "/PanneerPakora.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 5,
      name: "Panneer Tikka",
      price: 180,
      image: "/panneerTikka.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 6,
      name: "Aloo Tikka",
      price: 100,
      image: "/AlooTikka.jpg",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const handleQuantityChange6 = (index6, type6) => {
    const newMenuItems6 = [...menuItems6];
    if (type6 === "increase") {
      newMenuItems6[index6].quantity += 1;
      newMenuItems6[index6].totalPrice += newMenuItems6[index6].price;
    } else if (newMenuItems6[index6].quantity > 0) {
      newMenuItems6[index6].quantity -= 1;
      newMenuItems6[index6].totalPrice -= newMenuItems6[index6].price;
    }
    setMenuItems6(newMenuItems6);
  };

  const handleAddToCart6 = (menuItem6) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem6.id);
    if (existingItem) {
      existingItem.quantity += menuItem6.quantity;
      existingItem.totalPrice += menuItem6.totalPrice;
    } else {
      newCart.push(menuItem6);
    }
    setCart(newCart);
    alert(`Added ${menuItem6.name} to cart`);
  };

  const [showMenuItems7, setShowMenuItems7] = useState(false);
  const [menuItems7, setMenuItems7] = useState([
    {
      id: 1,
      name: "Chicken Birani",
      price: 99,
      image: "/chickenBiryani.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "Chicken Mandi",
      price: 140,
      image: "/chickenMandi.webp",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "Mutton Biryani",
      price: 170,
      image: "/Mutton-Biryani.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 4,
      name: "Chicken Wings",
      price: 50,
      image: "/chickenwings.webp",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 5,
      name: "Chicken Fry Piece Biryani",
      price: 120,
      image: "/chickenFryPiece.jpg",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 6,
      name: "Mutton Mandi",
      price: 200,
      image: "/muttonMandi.avif",
      quantity: 0,
      totalPrice: 0,
    },
    {
      id: 7,
      name: "Chicken Seekh",
      price: 140,
      image: "/chickenseekhkabab.webp",
      quantity: 0,
      totalPrice: 0,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const handleQuantityChange7 = (index7, type7) => {
    const newMenuItems7 = [...menuItems7];
    if (type7 === "increase") {
      newMenuItems7[index7].quantity += 1;
      newMenuItems7[index7].totalPrice += newMenuItems7[index7].price;
    } else if (newMenuItems7[index7].quantity > 0) {
      newMenuItems7[index7].quantity -= 1;
      newMenuItems7[index7].totalPrice -= newMenuItems7[index7].price;
    }
    setMenuItems7(newMenuItems7);
  };

  const handleAddToCart7 = (menuItem7) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.id === menuItem7.id);
    if (existingItem) {
      existingItem.quantity += menuItem7.quantity;
      existingItem.totalPrice += menuItem7.totalPrice;
    } else {
      newCart.push(menuItem7);
    }
    setCart(newCart);
    alert(`Added ${menuItem7.name} to cart`);
  };

  const handleRemoveFromCart = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    alert(`Removed From the cart`);
  };

  const handleOrderNow = () => {
    const newOrders = [...orders];
    const date = new Date();
    cart.forEach((item) => {
      newOrders.push({
        id: item.id,
        name: item.name,
        price: item.price,
        date: date.toLocaleString(),
      });
    });
    setOrders(newOrders);
    setCart([]);
    alert("Order Success");
  };

  const handleShowProducts = () => {
    setShowCart(false);
    setShowOrders(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
    setShowOrders(false);
  };

  const handleShowOrders = () => {
    setShowCart(false);
    setShowOrders(true);
  };

  return (
    <div className="">
      <div className="navigation-container">
        <button onClick={handleShowProducts} className="nav-button">
          View Menu
        </button>
        <button onClick={handleShowCart} className="nav-button">
          Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="20"
            fill="currentColor"
            className="cart-imageee"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </button>
        <button onClick={handleShowOrders} className="nav-button">
          Order
        </button>
      </div>
      {showCart ? (
        <div id="cartSection">
          <h1 className="cart-heading mt-3 ml-4">Cart</h1>
          <div className="sub-cart p-4">
            {cart.length === 0 ? (
              <p className="subb-cart">No items in cart</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="all-cart flex justify-between mb-2"
                  >
                    <img className="image-cart" src={item.image} alt="" />
                    <br />
                    <span>{item.name + " "}</span>
                    <br />
                    <span>{"Quantity==>" + item.quantity}</span>
                    <br />
                    <span>₹{item.totalPrice}</span>
                    <button
                      className="add-remove-cart-1"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button className="add-remove-cart-2" onClick={handleOrderNow}>
                  Order
                </button>
              </div>
            )}
          </div>
        </div>
      ) : showOrders ? (
        <div>
          <h1 className="order-heading mt-3 ml-4">Orders</h1>
          <h2 className="ml-4">Order History</h2>
          <div className="bg-white rounded shadow p-4">
            {orders.length === 0 ? (
              <p className="subb-cart">No orders</p>
            ) : (
              <div>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="all-cart flex justify-between mb-2"
                  >
                    <span>{order.name + "  "}</span>
                    <span>₹{order.price + " "}</span>
                    <br />
                    <span>{order.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div
              id="exploreMenuSection"
              className="explore-menu-section pt-5 pb-5"
            >
              <h1 className="menu-section-heading ml-4">View Menu</h1>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://t3.ftcdn.net/jpg/06/08/84/24/360_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg"
                        className="chicken-imagee w-100"
                      />
                      <h1 className="menu-card-title">Non-Veg Starters</h1>
                      <button
                        onClick={() => setShowMenuItems7(!showMenuItems7)}
                        className="btn btn-primary"
                      >
                        View All
                      </button>
                      {showMenuItems7 && (
                        <div className="mt-4">
                          {menuItems7.map((menuItem7, index7) => (
                            <div
                              key={index7}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem7.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem7.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem7.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange7(index7, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem7.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange7(index7, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart7(menuItem7)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem7.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/free-photo/half-top-view-tasty-eggplant-rolls-with-fresh-tomatoes-greens_140725-130968.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Veg Starters</h1>
                      <button
                        onClick={() => setShowMenuItems6(!showMenuItems6)}
                        className="btn btn-primary"
                      >
                        View All
                      </button>
                      {showMenuItems6 && (
                        <div className="mt-4">
                          {menuItems6.map((menuItem6, index6) => (
                            <div
                              key={index6}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem6.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem6.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem6.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange6(index6, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem6.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange6(index6, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart6(menuItem6)}
                                >
                                  Add to Cart
                                </button>

                                <p className="total-cart">
                                  Total: ₹{menuItem6.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/free-photo/top-view-tasty-borsch-ukranian-beet-soup-with-fresh-vegetables-dark-space_140725-98040.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Soups</h1>
                      <button
                        onClick={() => setShowMenuItems5(!showMenuItems5)}
                        className="btn btn-primary"
                      >
                        View All
                      </button>
                      {showMenuItems5 && (
                        <div className="mt-4">
                          {menuItems5.map((menuItem5, index5) => (
                            <div
                              key={index5}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem5.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem5.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem5.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange5(index5, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem5.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange5(index5, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart5(menuItem5)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem5.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19936.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Fish & Sea Food</h1>
                      <button
                        onClick={() => setShowMenuItems4(!showMenuItems4)}
                        className="btn btn-primary"
                      >
                        View All
                      </button>
                      {showMenuItems4 && (
                        <div className="mt-4">
                          {menuItems4.map((menuItem4, index4) => (
                            <div
                              key={index4}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem4.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem4.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem4.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange4(index4, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem4.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange4(index4, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart4(menuItem4)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem4.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/premium-photo/indian-food-curry-butter-chicken-palak-paneer-chicken-tikka-biryani-vegetable-curry_641503-86555.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Main course</h1>
                      <button
                        onClick={() => setShowMenuItems3(!showMenuItems3)}
                        className="btn btn-primary"
                      >
                        View all
                      </button>
                      {showMenuItems3 && (
                        <div className="mt-4">
                          {menuItems3.map((menuItem3, index3) => (
                            <div
                              key={index3}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem3.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem3.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem3.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange3(index3, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem3.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange3(index3, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart3(menuItem3)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem3.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/premium-photo/bowl-fried-noodles-with-pile-parsley-top_893055-88.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Noodles</h1>
                      <button
                        onClick={() => setShowMenuItems2(!showMenuItems2)}
                        className="btn btn-primary"
                      >
                        View all
                      </button>
                      {showMenuItems2 && (
                        <div className="mt-4">
                          {menuItems2.map((menuItem2, index2) => (
                            <div
                              key={index2}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem2.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem2.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem2.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange2(index2, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem2.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange2(index2, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart2(menuItem2)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem2.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://img.freepik.com/premium-photo/top-view-tasty-salad-with-seasonings-white-floor-salad-vegetable-meal-food-health_960396-767398.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Salads</h1>
                      <button
                        onClick={() => setShowMenuItems(!showMenuItems)}
                        className="btn btn-primary"
                      >
                        View all
                      </button>
                      {showMenuItems && (
                        <div className="mt-4">
                          {menuItems.map((menuItem, index) => (
                            <div
                              key={index}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange(index, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange(index, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart(menuItem)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGf6-XNXOfWqq7R4EIi3RBTedqcQx79ZWGHDrYjd5ngx9T86x0E3Z5S40VJFbbf5LtggsClXu3-pTAtq9YHWsyYXIJC212s6CuG6zdjZ4MiPCx7U86mcVTacEfAv50aplCmhjMjIqNRDE/s1600/yammy-good-morning-breakfast-coffee-ice-cream-full-hd-image.jpg"
                        className="menu-item-image w-100"
                      />
                      <h1 className="menu-card-title">Desserts</h1>
                      <button
                        onClick={() => setShowMenuItems1(!showMenuItems1)}
                        className="btn btn-primary"
                      >
                        View all
                      </button>
                      {showMenuItems1 && (
                        <div className="mt-4">
                          {menuItems1.map((menuItem1, index1) => (
                            <div
                              key={index1}
                              className="mb-4 flex justify-between items-center"
                            >
                              <div className="flex justify-between items-center">
                                <div className="ml-4">
                                  <h2 className="sub-heading">
                                    {menuItem1.name}
                                  </h2>
                                  <img
                                    className="image-cart"
                                    src={menuItem1.image}
                                  />
                                  <p className="price-cart">
                                    ₹{menuItem1.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange1(index1, "decrease")
                                  }
                                >
                                  -
                                </button>
                                <span className="result-cart">
                                  {menuItem1.quantity}
                                </span>
                                <button
                                  className="boxx-cart"
                                  onClick={() =>
                                    handleQuantityChange1(index1, "increase")
                                  }
                                >
                                  +
                                </button>
                                <button
                                  className="add-to-cart"
                                  onClick={() => handleAddToCart1(menuItem1)}
                                >
                                  Add to Cart
                                </button>
                                <p className="total-cart">
                                  Total: ₹{menuItem1.totalPrice}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
