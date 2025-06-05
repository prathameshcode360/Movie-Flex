import headStyle from "./headingOne.module.css";

const HeadingOne = () => {
  return (
    <div className="heading">
      <button className={headStyle.headbtn}>One</button>
    </div>
  );
};

export default HeadingOne;
