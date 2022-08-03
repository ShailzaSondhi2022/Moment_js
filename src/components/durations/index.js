import React from "react";
import moment from "moment";

const DurationsMethods = () => {
  console.log(
    "****duration obj****",
    moment.duration({
      seconds: 2,
      minutes: 2,
      hours: 2,
      days: 2,
      weeks: 2,
      months: "2",
      years: "2",
    })
  );

  const duration = moment.duration({
    seconds: 2,
    minutes: 23,
    hours: 10,
    days: 4,
    weeks: 3,
    months: "8",
    years: "5",
  });

  const x = moment();
  const y = moment("2021-12-03");
  const diff = moment.duration(x.diff(y));
  console.log("*****duration diff******", diff);
  return (
    <div className="App">
      <h2>
        <u>Durations methods</u>
      </h2>
      <p>
        <b>
          Create Duration :-{" "}
          {`moment.duration({
    seconds: 2,
    minutes: 23,
    hours: 10,
    days: 4,
    weeks: 3,
    months: '8',
    years: '5'
});`}{" "}
        </b>{" "}
        // check console for results
      </p>

      <p>
        <b>GET minutes :- moment.duration(var duration).minutes(); </b> //{" "}
        {moment.duration(duration).minutes().toString()}
      </p>
      <p>
        <b>GET hours :- moment.duration(var duration).hours(); </b> //{" "}
        {moment.duration(duration).hours().toString()}
      </p>
      <p>
        <b>GET days :- moment.duration(var duration).days(); </b> //{" "}
        {moment.duration(duration).days().toString()}
      </p>
      <p>
        <b>GET weeks :- moment.duration(var duration).weeks(); </b> //{" "}
        {moment.duration(duration).weeks().toString()}
      </p>
      <p>
        <b>GET months :- moment.duration(var duration).months(); </b> //{" "}
        {moment.duration(duration).months().toString()}
      </p>
      <p>
        <b>GET years :- moment.duration(var duration).years(); </b> //{" "}
        {moment.duration(duration).years().toString()}
      </p>

      <p>
        <b>
          Using Duration with Diff :- <br /> const x = new moment()
          <br />
          const y = new moment('2021-12-03')
          <br />
          const duration = moment.duration(x.diff(y))
          <br />
          // returns duration object with the duration between x and y<br />{" "}
        </b>{" "}
        // check console for result
      </p>
    </div>
  );
};

export default DurationsMethods;
