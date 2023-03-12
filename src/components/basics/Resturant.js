import "./style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";

const Resturant = () => {
  console.log(Menu);
  return (
    <>
      <Menucard />
      <Menucard />
    </>
  );
};

export default Resturant;
