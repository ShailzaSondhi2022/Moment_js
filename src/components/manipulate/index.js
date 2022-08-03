import React from 'react';
import moment from 'moment'

const ManipulateMethods = () => {
      return (
        <div className="App">
      <h2><u>Manipulate methods</u></h2>


      {/* {moment().add(7, 'days').add(1, 'months'); // with chaining
         moment().add({days:7,months:1}); // with object literal} */}

      <p><b>Add :- moment().add(7, 'days'); </b> // {moment().add(7, 'days').format()}</p>

       {/* {Subtract no of years , days or months} */}
      <p><b>Subtract- moment().subtract(2, 'month') </b> // {moment().subtract(2, 'month').format()}</p>

     {/* {To set the timezone} */}
      <p><b>TimeZone :- moment().zone(); </b> // {moment().zone()}</p>

     {/* start time of the year */}
      <p><b>Start of Time :-moment().startOf('year')</b> // {moment().startOf('year').format()}</p>
      
      {/* End time of the year */}
      <p><b>End of Time :-moment().endOf('year')</b> // {moment().endOf('year').format()}</p>

     

    </div>

    )
}

export default ManipulateMethods
