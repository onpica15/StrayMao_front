import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import "../../styles/cart/order.scss";
import OrderCardC from "./OrderCardC"

import { getOrderId,getOrderAsync,getOrderList } 
from "../../actions/cart/index";
function OrderCardBoxC(props) {
    const [test, setTest] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);
    // const [totalCards, setTotalCards] = useState('');

    const [content, setContent] = useState([]);
    // let totalCards = props.info.data;
    
    useEffect(() => {
        // setTotalCards(JSON.parse(localStorage.getItem('orderListData')).data)
        // console.log("OrderCardBoxC info2: ",(localStorage.getItem('orderListData')))
        // console.log("totalcards:",totalCards)
        let totalCards = JSON.parse(localStorage.getItem('orderListData')).data;
        if (totalCards.length > 0) {
          // let tt = JSON.parse(totalCards[0]);
          // //console.log("totalCards: ", totalCards[0]);

          for (let i = 0;i < totalCards.length;i++) {
            //console.log(":",totalCards[i]);
            if (totalCards.length > 0) {
                // //console.log("for loop:",i)
                content.push(<><OrderCardC info={totalCards[i]} key={i} />
                    </>);
                // content.push(<OrderDetialC info={totalCards[i]} key={i} />);
            }
          }
        // //console.log("content :　",content)
        setDisplay( <>
                        <div className="orderC_boxBottom_An">
                            {/* <OrderCardC /> */}
                            {content}
                        </div>
                    </> )

            setTimeout(() => {
                setDataLoading(false)
                // //console.log("content:",content)
            }, 1000)
        }
        // props.getOrderAsync(props.info.orderId)
        //console.log("88558: ",props.info)
    }, []);
    useEffect(() => {
        // totalCards = props.info.data;
    },[props.info])
    const loading = <div></div>

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
  // return loading
}

const mapStateToProps = (store) => {
    return { info: store.cartReducer.getId };
    // return {  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {
    getOrderId,
    getOrderAsync,
    getOrderList
})(OrderCardBoxC);
// export default OrderCardC