/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { getAdopPetAsync } from '../../actions/adoption/index';
function AdopFormPage3(props) {
  const [display, setDisplay] = useState(<></>);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const loading = <div></div>;
  const ele = (value) => {
    return document.querySelector(value);
  };
  // 以資料載入的指示狀態來切換要出現的畫面
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col pt-3">
            <div className="adopFormTitle header4 mt-2">申請表格 </div>
            <div className="d-flex mt-5 flex-column align-items-center">
              <div className="d-flex flex-row mx-auto mb-5">
                <svg
                  className="my-auto mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>

                <div className="header7">飼養相關</div>
                <svg
                  className="my-auto ml-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="228.5"
                  height="2"
                  viewBox="0 0 228.5 2"
                >
                  <line
                    id="Line_47"
                    data-name="Line 47"
                    x2="228.5"
                    transform="translate(0 1)"
                    fill="none"
                    stroke="#ddbea9"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="adopFormBox px-5 py-4 d-flex flex-column">
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">飼養經驗：</label>
                  <div className="d-flex justify no-gutters">
                    <div className="opt col d-flex">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio"
                        id="r1"
                        value="option1"
                      />
                      <label htmlFor="r1" className="paragraph1 mr-1">
                        有
                      </label>
                      <input
                        id="q1"
                        className="input-brown adopInputInRadio w-25"
                        type="text"
                        placeholder=""
                        onFocus={() => {
                          console.log(
                            document
                              .querySelector('#r1')
                              .getAttribute('checked')
                          );
                        }}
                      ></input>
                      <label htmlFor="r1" className="paragraph1 ml-1 ">
                        年
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio"
                        id="r2"
                        value="option2"
                      />
                      <label htmlFor="r2" className="paragraph1">
                        無
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">
                    目前是否飼養其他寵物：
                  </label>
                  <div className="d-flex justify no-gutters">
                    <div className="opt col d-flex">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio1"
                        id="r3"
                        value="option1"
                      />

                      <label htmlFor="r3" className="paragraph1 mr-1">
                        有
                      </label>
                      <input
                        id="q2"
                        className="input-brown adopInputInRadio w-25"
                        type="text"
                        placeholder=""
                        htmlFor="r3"
                      ></input>
                      <label htmlFor="r3" className="paragraph1 ml-1">
                        隻
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio1"
                        id="r4"
                        value="option2"
                      />
                      <label htmlFor="r4" className="paragraph1">
                        無
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">是否會考慮絕育：</label>

                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio2"
                        id="r5"
                        value="option1"
                      />
                      <label htmlFor="r5" className="paragraph1">
                        會
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio2"
                        id="r6"
                        value="option2"
                      />
                      <label htmlFor="r6" className="paragraph1">
                        不會
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column my-1">
                  <label className="my-2 paragraph1">
                    是否明白養育動物有機會生病或死亡, 生病時或
                    會涉及高至數千甚至數萬元的醫療費用? ：
                  </label>

                  <div className="d-flex justify no-gutters">
                    <div className="opt col">
                      <input
                        className="magic-radio justify-content-center align-items-center"
                        type="radio"
                        name="radio3"
                        id="r7"
                        value="option1"
                      />
                      <label htmlFor="r7" className="paragraph1">
                        是
                      </label>
                    </div>
                    <div className="opt col">
                      <input
                        className="magic-radio"
                        type="radio"
                        name="radio3"
                        id="r8"
                        value="option2"
                      />
                      <label htmlFor="r8" className="paragraph1">
                        否
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5 d-flex">
                <button
                  className="mx-2 btn-green d-flex justify-content-center  align-items-center my-auto"
                  type="button"
                  value="123"
                  onClick={() => {
                    ele('#q1').value = '3';
                    ele('#r1').setAttribute('checked', true);
                    ele('#r4').setAttribute('checked', true);
                    ele('#r5').setAttribute('checked', true);
                    ele('#r7').setAttribute('checked', true);
                  }}
                >
                  一鍵填寫
                </button>
                <button
                  className="mx-2 btn-green d-flex justify-content-center  align-items-center my-auto"
                  type="button"
                  value="123"
                  onClick={() => {
                    props.getAdopPetAsync(props.id);
                    props.history.push('/adoptionform4');
                  }}
                >
                  完成
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return loading;
}

const mapStateToProps = (store) => {
  return { id: store.adoptReducer.adopId };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, { getAdopPetAsync })(AdopFormPage3)
);
