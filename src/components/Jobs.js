import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="jobs">
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        className="red"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        title="Agent de sécurité - Pantin"
        className="green"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        title="Responsable d'agence - Rennes"
        className="blue"
        contractType="CDI"
        country="France"
        city="Rennes"
      />
      <Job
        title="Développeur React"
        className="yellow"
        contractType="CDD"
        country="France"
        city="Brest"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        className="green"
        contractType="CDI"
        country="Espagne"
        city="Barcelone"
      />
      <Job
        title="Développeur FullStack"
        className="pink"
        contractType="CDI"
        country="Allemagne"
        city="Berlin"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        className="red"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        className="blue"
        contractType="CDD"
        country="Royaume Uni"
        city="Cambridge"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        className="green"
        contractType="CDI"
        country="Italie"
        city="Turin"
      />
    </div>
  );
};

export default Jobs;
