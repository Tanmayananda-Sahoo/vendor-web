import Navbar from "../Parts/Navbar.jsx";
import React from 'react'
import Button from "../Parts/Button.jsx";
import NoSellVendor from "../Parts/NoSellVendor.jsx";
import { IndianRupee, ShoppingCart, ThumbsUp } from "lucide-react";
import VendorSuggestionKit from "../Parts/VendorSuggestionKit.jsx";

const HomePage = () => {
  return (
    <div>
        <div className="hero-page">
          <div  className="hero-page1">
            <video src='https://videos.pexels.com/video-files/5780422/5780422-uhd_2560_1440_24fps.mp4' loop autoPlay muted></video>
          </div>
          <div  className="hero-page2">
            <h1>Welcome !!</h1>
            <h4>"Get the best product ever."</h4>
            <Button title='Try A Kit'/>
          </div>
        </div>
        <div className="features">
          <h1>Why Us ?</h1>
          <div>
            <div>
              <h2>"Cheapest"</h2>
              <IndianRupee />
            </div>
            <div>
              <h2>"Fastest Delivery"</h2>
              <ShoppingCart />
            </div>
            <div>
              <h2>"Best Quality"</h2>
              <ThumbsUp />
            </div>
          </div>
        </div>
      <NoSellVendor />
      <VendorSuggestionKit />
      <div className="footer"></div>
    <div>
      </div>
    </div>
  )
}

export default HomePage