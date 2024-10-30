import image2 from "./normal.jpg";
import "./styles.css";

const NormalImg = ({ src }) => {
  return (
    <div className="normal-img-container">
      <img src={src} alt="img1" />
      <img
        src={image2}
        style={{ maxWidth: "100%", height: "auto" }}
        className="normal-img2"
        alt="img2"
      />
    </div>
  );
};

export default NormalImg;
