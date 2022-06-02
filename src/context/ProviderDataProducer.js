import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataProducer from '.';

const INITIAL_STATE_PRODUCTS = {
	"id": "",
	"name": "",
	"email": "",
	"doc": "",
	"createdAt": "",
	"limit": "",
	"risk": "",
	"liquidity": ""
};

function ProviderDataProducer({ children }) {
  const [producerInfo, setProducerInfo] = useState(INITIAL_STATE_PRODUCTS);
  const [listDRE, setListDRE] = useState([])

  const valueProps = {
    producerInfo,
    setProducerInfo,
    listDRE,
    setListDRE,
  };

  return (
    <dataProducer.Provider
      value={ valueProps }
    >
      { children }
    </dataProducer.Provider>
  );
}

ProviderDataProducer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDataProducer;
