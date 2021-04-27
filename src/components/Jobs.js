import Job from "./Job";
import data from "../jobs.json";

const Jobs = (props) => {
  return (
    <div className="jobs">
      {data.map((elem) => {
        return (
          <Job
            // title={elem.title}
            // className={elem.className}
            // contractType={elem.contractType}
            // country={elem.country}
            // city={elem.city}
            {...elem}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
