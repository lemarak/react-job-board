const Job = (props) => {
  console.log("Props : ", props);
  return (
    <>
      <div className={`job ${props.className}`}>
        <div className="title-job ">{props.title}</div>
        <div className="footer-job">
          <span>
            {props.contractType} - {props.country} - {props.city}
          </span>
        </div>
      </div>
    </>
  );
};

export default Job;
