const Job = ({ country, city, className, contractType, title }) => {
  return (
    <>
      <div className={`job ${className}`}>
        {title ? (
          <div className="title-job ">{title}</div>
        ) : (
          <div className="title-job ">no title</div>
        )}
        {/* <div className="title-job ">{title}</div> */}
        <div className="footer-job">
          <span>
            {contractType} - {country} - {city}
          </span>
        </div>
      </div>
    </>
  );
};

export default Job;
