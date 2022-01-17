import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";

const SelectDate = (props) => {
  const [date, setDate] = useState(new Date(props.defaultDate));

  const onChange = (date) => {
    setDate(date)
    props.handleChangeDate(date, props.min)
  }
  
  return (
    <DatePicker dateFormat="yyyy/MM/dd" selected={date} onChange={onChange}/>
  );
};

SelectDate.propTypes = {
  defaultDate: PropTypes.number,
  handleChangeDate: PropTypes.func,
  min: PropTypes.bool
}

export default SelectDate;