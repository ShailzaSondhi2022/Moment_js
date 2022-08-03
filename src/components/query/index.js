import React from 'react';
import moment from 'moment'

const QueryMethods = () => {
    const date = new Date();
     return (
        <div className="App">
      <h2><u>Query methods</u></h2>
      <p><b>isBefore :- moment('2008-10-20').isBefore('2009-10-19'); </b> // {moment('2008-10-20').isBefore('2009-10-19').toString()}</p>
     
      <p><b>isSame- moment('2010-10-20').isSame('2010-10-20'); </b> // {moment('2010-10-20').isSame('2010-10-20').toString()}</p>

      <p><b>isAfter :- moment('2010-10-18').isAfter('2010-10-19'); </b> // {moment('2010-10-18').isAfter('2010-10-19').toString()}</p>
     
      <p><b>isSameOrBefore :- moment('2010-10-20').isSameOrBefore('2010-10-21');
</b> // {moment('2010-10-20').isSameOrBefore('2010-10-21').toString()}</p>

      <p><b>isSameOrAfter :- moment('2010-10-20').isSameOrAfter('2010-10-21');</b> // {moment('2010-10-20').isSameOrAfter('2010-10-21').toString()}</p>
     
      <p><b>isBetween :- moment('2010-10-20').isBetween('2010-10-19', '2010-10-25');</b> // {moment('2010-10-20').isBetween('2010-10-19', '2010-10-25').toString()}</p>

      <p><b>isLeapYear :- moment([2000]).isLeapYear();</b> // {moment([2000]).isLeapYear().toString()}</p>
     
      <p><b>isMoment :- moment.isMoment(moment())</b> // {moment.isMoment(moment()).toString()}</p>



    </div>

    )
}

export default QueryMethods