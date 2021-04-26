import Title from "./Title";

const Header = (props) => {
  return (
    <div className="header">
      <Title title={`${props.title}`} />
    </div>
  );
};

export default Header;
