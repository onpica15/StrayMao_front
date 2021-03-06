import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdopMainCardPic from './AdopMainCardPic';
import AdopMainButton from './AdopMainButton';
import AdopMainInfo from './AdopMainInfo';
import AdopMainReadMore from './AdopMainReadMore';

import { getRecommand, getRecommandAsync } from '../../actions/adoption/index';
function AdopMainPage(props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    props.getRecommandAsync();
  }, []);
  return (
    <>
      <div className="adopTitleMain my-4">
        <h5 className="adopTitle ">ADOPT</h5>
        <div className="adopTitleLine" />
      </div>
      <div className="adopRecommand mb-3">
        <div className="col p-1">
          <AdopMainCardPic info={props.info} index={index}>
            <AdopMainButton
              setIndex={setIndex}
              index={index}
              info={props.info}
            />
          </AdopMainCardPic>
        </div>
        <div className="col">
          <AdopMainInfo info={props.info} index={index}>
            <AdopMainReadMore info={props.info} index={index} />
          </AdopMainInfo>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { info: store.adoptReducer.getRecom };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, { getRecommand, getRecommandAsync })(
  AdopMainPage
);
