import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/cart/cartlist.scss";

function CartListCardC(props) {
  return (
    <>
      <div className="cartlistC_boxUpper_An d-flex">
        <div className="cartlistC_icon-018-trashUpper_An">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.82 24.22">
            <path
              id="Path_1809"
              data-name="Path 1809"
              d="M19.87,2.78H13.72V1a.94.94,0,0,0-1-.95H8A.94.94,0,0,0,7.1,1V2.78H1a.94.94,0,0,0-.95,1v3.7a1,1,0,0,0,1,1H2.36V21.86a2.37,2.37,0,0,0,2.37,2.36H16.09a2.36,2.36,0,0,0,2.36-2.36V8.38h1.42a1,1,0,0,0,.95-1V3.73A1,1,0,0,0,19.87,2.78ZM9,1.89h2.84v.89H9Zm7.57,20a.47.47,0,0,1-.47.47H4.73a.47.47,0,0,1-.47-.47V8.38h12.3ZM18.92,6.49h-17V4.67h17Z"
            />
            <path
              id="Path_1810"
              data-name="Path 1810"
              d="M8,9.78a.94.94,0,0,0-.94.94V20A.95.95,0,0,0,9,20V10.72A.94.94,0,0,0,8,9.78Z"
            />
            <path
              id="Path_1811"
              data-name="Path 1811"
              d="M12.77,9.78a.94.94,0,0,0-.94.94h0V20a.95.95,0,0,0,1.89,0V10.72A.94.94,0,0,0,12.77,9.78Z"
            />
          </svg>
        </div>
        <div className="cartlistC_demo_An">
          <input
            className="cartlistC_magic-checkbox_An"
            type="checkbox"
            name="layout"
            id="c1"
          />
          <label for="c1"></label>
        </div>
        <img
          className="cartlistC_goodsImg_An"
          src="./image/store/brothcan-1-510x510.jpg"
        ></img>
        <span className="cartlistC_goodsName_An">
          {props.info.name}Farmina 法米納獸醫寵愛天然配方-貓用腸胃道 5kg
        </span>
        <div className="cartlistC_inputbox_An d-flex">
          <div className="cartlistC_icon-067-minus_An">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
              <path
                id="Path_1767"
                data-name="Path 1767"
                d="M19.48,0H.72A.81.81,0,0,0,0,.88a.8.8,0,0,0,.72.71H19.48a.8.8,0,0,0,.71-.88A.81.81,0,0,0,19.48,0Z"
              />
            </svg>
          </div>
          <input
            className="cartlistC_input-black_An"
            type="text"
            placeholder="123"
            value="1"
          />
          <div className="cartlistC_icon-021-plus_An">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.44 19.44">
              <path
                id="Path_1806"
                data-name="Path 1806"
                d="M18.67,9h-8.2V.76A.76.76,0,1,0,9,.76V9H.76a.76.76,0,0,0,0,1.52H9v8.2a.76.76,0,1,0,1.52,0h0v-8.2h8.2a.76.76,0,0,0,0-1.52h0Z"
              />
            </svg>
          </div>
        </div>
        <span className="cartlistC_goodsPrice_An">2790 元</span>
        {props.children}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(CartListCardC);
// export default cardlistCardC
