import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SelectDate = () => {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker dateFormat="yyyy/MM/dd" selected={date} onChange={(date) => setDate(date)} />
  );
};

export default SelectDate;