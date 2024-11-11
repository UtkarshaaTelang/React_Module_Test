import mainImage from "../../assets/mainImage.png";
import './HomePage.css'
import { MdLock } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="mainSection">
      <div className="image">
        <img src={mainImage} alt="" />
        <h2 className="mainHeading">Pocket Notes</h2>
        <p className="mainDescription">
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="footer">
        <MdLock /> end-to-end encrypted
      </div>
    </div>
  );
};

export default HomePage;
