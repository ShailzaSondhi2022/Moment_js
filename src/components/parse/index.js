import React from 'react';
import moment from 'moment'

const ParseMethods = () => {
    const date = new Date();

    const cloneMoment = () => {
        var a = moment([2012]);
        var b = a.clone();
        a.year(2000);
        return b.year();
    }

     return (
        <div className="App">
      <h2 ><u>Parsing methods</u></h2>

      {/*To get the current date and time */}
      <p><b>Now :- moment();</b> //{moment().format()}</p>

      {/*Creating moment from String */}
      <p><b>String :- moment("1995-12-25"); </b> //{ moment("1995-12-25").format()}</p>

      {/* If you know the format of an input string, you can use that to parse a moment.} */}
      <p><b>String + Format :- moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss", true); </b> //{moment('24/12/2019 09:15:00', "DD/MM/YYYY hh:mm:ss", true).format()}</p>
      
      <p><b>String + Formats :- moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]); </b> //{moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]).format()}</p>
      <p><b>Object: - {`moment({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123}).format()`} </b> //{moment({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123}).format()}</p>
      <p><b>Unix Timestamp (milliseconds): -  moment(1318781876406)</b> //{moment(1318781876406).format()}</p>
      <p><b>Unix Timestamp (seconds): - moment.unix(1318781876); </b> //{ moment.unix(1318781876).format()}</p>
      <p><b>Date: - moment(Date);</b> //{ moment(date).format()}</p>
      <p><b>Array: - moment([2010, 1, 14, 15, 25, 50, 125]) </b> //{ moment([2010, 1, 14, 15, 25, 50, 125]).format()}</p>

      <p>Moment Clone: - Example:- <br />
        var a = moment([2012]);<br />
         var b = a.clone();<br />
         a.year(2000);<br />
         b.year(); // 2012<br />
          
           Result: - <b>{cloneMoment()}</b></p>

           <p><b>UTC :-</b> <br /> (Without UTC) :- moment().format() //{moment().format()}</p>
           <p>  (With UTC) :- moment().utc().format() //{moment().utc().format()}</p>

           <p><b>Validation :- moment("2011-10-40T10:20:32").format() </b> //{moment("2011-10-40T10:20:32").format()}</p>
           <p><b>Check before use :- moment("2011-10-40T10:20:32").isValid().toString() </b> //{moment("2011-10-40T10:20:32").isValid().toString()}</p>

    </div>

    )
}

export default ParseMethods
