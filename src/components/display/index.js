import React from 'react';
import moment from 'moment'

const DisplayMethods = () => {
    const renderDiff = () =>{
        const a = moment([2007, 0, 29]);
        const b = moment([2007, 0, 28]);
        return a.diff(b)
    }
      return (
        <div className="App">
      <h2><u>Display methods</u></h2>
      <p><b>Format :-moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); </b> // {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      <p><b>Time from now -moment([2007, 0, 29]).fromNow(); </b> // {moment([2007, 0, 29]).fromNow()}</p>

      <p><b>Difference :- const a = moment([2007, 0, 29]); <br />
      const b = moment([2007, 0, 28]);<br />
      a.diff(b)<br /> </b> // {renderDiff()}</p>
 
      <p><b>Unix Timestamp :- moment().unix();</b> // {moment().unix()}</p>
      <p><b>Days in Month :-moment("2012-02", "YYYY-MM").daysInMonth()</b> // {moment("2012-02", "YYYY-MM").daysInMonth()}</p>



    </div>

    )
}

export default DisplayMethods
