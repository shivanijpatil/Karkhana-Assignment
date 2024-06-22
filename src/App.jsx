import React, { useState } from "react";
import "./App.css";
import artisan from "./assets/artisan.png";
import beverage from "./assets/beverage.png";
import coffee from "./assets/coffee.png";
import mojito from "./assets/mojito.png";
import hottea from "./assets/hotTea.png";
import filter from "./assets/filter.png";
import pen from "./assets/pen.png";
import Image2 from "./assets/Image_2.jpg";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Voucher from "./components/Voucher";
import Summary from "./components/Summary";
import Profile from "./components/Profile";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [voucher, setVoucher] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0);

  const data = [
    { title: "ORI GIMBER 700ml", price: 24.95, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-700ml.png%3Fv%3D1716289074%252C0.6653%252C0.504?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6653&fp-y=0.504&h=248&q=80&w=184&s=6f15fbd0960126422f326528ac72f691" },
    { title: "GIMBER N°2  700ml", price: 25.85, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-700ml.png%3Fv%3D1716289074%252C0.6653%252C0.504?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6653&fp-y=0.504&h=248&q=80&w=184&s=6f15fbd0960126422f326528ac72f691" },
    { title: "SML GIMBER 500ml", price: 20.45, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-500ml.png%3Fv%3D1716289073%252C0.6347%252C0.4933?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6347&fp-y=0.4933&h=248&q=80&w=184&s=a39ed462a5f59a02f2092482a1814b95" },
    { title: "GIMBER N°2  500 ml", price: 26.00, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "DUO-PACK GIMBE...", price: 52.80, image: Image2 },
    { title: "S-SML GIMBER 50...", price: 20.25, image: Image2 },
    { title: "S-SML GIMBER BR...", price: 20.25, image: Image2 },
    { title: "Shop COOK & GO...", price: 32.50, image: Image2 },
    { title: "ORI GIMBER 700ml", price: 24.95, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "GIMBER N°2 700ml", price: 25.85, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "SML GIMBER 500ml", price: 20.45, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "GIMBER N°2  500 ml", price: 26.00, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FGIMBER-BUNDEL4.png%3Fv%3D1685974102?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.5&fp-y=0.5&h=248&q=80&w=184&s=4fde3530ef74e1caa54fe927ecd4978f" },
    { title: "DUO-PACK GIMBE...", price: 52.80, image: "https://gimber.imgix.net/https%3A%2F%2Fgimber.com%2Fvolumes%2Fgeneral%2FPRODUCT-FR-nobackground%2FGIMBER-Brut-700ml.png%3Fv%3D1716289074%252C0.6653%252C0.504?auto=compress%2Cformat&crop=focalpoint&dpr=2&fit=crop&fp-x=0.6653&fp-y=0.504&h=248&q=80&w=184&s=6f15fbd0960126422f326528ac72f691" }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item));
    setTotal(total - item.price);
  };

  const applyVoucher = () => {
    if (voucher === "DISCOUNT10") {
      setVoucherDiscount(total * 0.10);
    } else {
      setVoucherDiscount(total * 0.50);
    }
  };

  const discount = total * 0.10;
  const gratuity = 4.00;
  const finalTotal = total - discount - voucherDiscount + gratuity;

  return (
    <div id="parent">
      <div id="leftDiv">
        <SearchBar filter={filter} />
        <Filters
          filters={[
            { img: coffee, text: "Ice Coffee" },
            { img: hottea, text: "Hot Coffee" },
            { img: artisan, text: "Artisan Tea" },
            { img: mojito, text: "Ice Mojito" },
            { img: beverage, text: "Beverage" },
          ]}
        />
        <ProductList data={data} addToCart={addToCart} />
      </div>
      <div id="rightDiv">
        <Profile pen={pen} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <Voucher
          voucher={voucher}
          setVoucher={setVoucher}
          applyVoucher={applyVoucher}
        />
        <Summary
          total={total}
          discount={discount}
          voucherDiscount={voucherDiscount}
          gratuity={gratuity}
          finalTotal={finalTotal}
        />
        <button onClick={() => console.log("Print Receipt")} className="print-button">Print Receipt</button>
      </div>
    </div>
  );
};

export default App;
