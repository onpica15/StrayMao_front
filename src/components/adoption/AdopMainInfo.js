import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function AdopMainInfo(props) {
  // console.log('info: ', props.info);
  return (
    <>
      <div className="adoptionMainInfo d-flex flex-column align-item-center pt-5 h-100">
        <div className="d-flex flex-row mx-auto">
          <svg
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="50.383"
            height="2.18"
            viewBox="0 0 50.383 2.18"
          >
            <path
              id="Path_1874"
              data-name="Path 1874"
              d="M0,0,13.381.048l16,.057L50.376.18"
              transform="translate(0.004 1)"
              fill="none"
              stroke="#ed8f8f"
              strokeWidth="2"
            />
          </svg>
          <div className="heade4 mx-3">毛孩簡介</div>
          <svg
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="50.383"
            height="2.18"
            viewBox="0 0 50.383 2.18"
          >
            <path
              id="Path_1874"
              data-name="Path 1874"
              d="M0,0,13.381.048l16,.057L50.376.18"
              transform="translate(0.004 1)"
              fill="none"
              stroke="#ed8f8f"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="d-flex flex-row mx-auto mt-5">
          <ul className="adoptListStyleNone paragraph1 h-100">
            <li className="my-3">
              名字：<span>{props.info[props.index].name}</span>
            </li>
            <li className="my-3">
              性別：<span>{props.info[props.index].gender}</span>
            </li>
            <li className="my-3">
              年齡：<span>{props.info[props.index].age}</span>
            </li>
            <li className="my-3">
              地點：<span>{props.info[props.index].area}</span>
            </li>
            <li className="my-3">
              介紹：<span>{props.info[props.index].des}</span>
            </li>
          </ul>
        </div>
        {props.children}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMainInfo);
