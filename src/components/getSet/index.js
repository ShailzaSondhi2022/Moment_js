import React from "react";
import moment from "moment";

const GetSetMethods = () => {
  const date = new Date();
  return (
    <div className="App">
      <h2>
        <u>Get-Set methods</u>
      </h2>
      {/* {Get Mili Second} */}
      <p>
        <b>Millisecond :- GET moment().millisecond();</b> //{" "}
        {moment().millisecond()}
      </p>
      {/* {set mili second} */}
      <p>
        <b>Millisecond :- SET moment().millisecond(114);</b> //{" "}
        {moment().millisecond(114).format()}
      </p>

      {/* {get and set second} */}
      <p>
        <b>Second :- GET moment().second();</b> // {moment().second()}
      </p>
      <p>
        <b>Second :- SET moment().second(29);</b> //{" "}
        {moment().second(29).format()}
      </p>

      {/* {get and set minute} */}
      <p>
        <b>Minute :- GET moment().minute();</b> // {moment().minute()}
      </p>
      <p>
        <b>Minute :- SET moment().minute(14);</b> //{" "}
        {moment().minute(14).format()}
      </p>

      {/* {get and set hour} */}
      <p>
        <b>Hour :- GET moment().hour();</b> // {moment().hour()}
      </p>
      <p>
        <b>Hour :- SET moment().hour(10);</b> // {moment().hour(10).format()}
      </p>

      {/* {get and set date of month} */}
      <p>
        <b>Date of Month :- GET moment().date();</b> // {moment().date()}
      </p>
      <p>
        <b>Date of Month :- SET moment().date(-10);</b> //{" "}
        {moment().date(-10).format()}
      </p>

      {/* {get and set day of year} */}
      <p>
        <b>Day of year :- GET moment().dayOfYear();</b> //{" "}
        {moment().dayOfYear()}
      </p>
      <p>
        <b>Day of year :- SET moment().dayOfYear(155);</b> //{" "}
        {moment().dayOfYear(155).format()}
      </p>

      {/* {get and set week of the year} */}
      <p>
        <b>Week of Year :- GET moment().week();</b> // {moment().week()}
      </p>
      <p>
        <b>Week of Year :- SET moment().week(10);</b> //{" "}
        {moment().week(10).format()}
      </p>

      {/* {get and set month of the year} */}
      <p>
        <b>Month :- GET moment().month();</b> // {moment().month()}
      </p>
      <p>
        <b>Month :- SET moment().month(5);</b> // {moment().month(5).format()}
      </p>

      {/* {get and set quater of the year} */}
      <p>
        <b>Quarter :- GET moment().quarter();</b> // {moment().quarter()}
      </p>
      <p>
        <b>Quarter :- SET moment().quarter(2);</b> //{" "}
        {moment().quarter(2).format()}
      </p>

      {/* {get and set year } */}
      <p>
        <b>Year :- GET moment().year();</b> // {moment().year()}
      </p>
      <p>
        <b>Year :- SET moment().year(2010);</b> //{" "}
        {moment().year(2010).format()}
      </p>

      {/* {get and set year } */}
      <p>
        <b>Get Methods :- GET moment().get('year');</b> //{" "}
        {moment().get("year")}
      </p>
      <p>
        <b>Set Methods :- moment().set('year', 2013);</b> //{" "}
        {moment().set("year", 2013).format()}
      </p>
    </div>
  );
};

export default GetSetMethods;
