import rectangle from "./rectangle.png";
import "./style.css";
import union from "./union.svg";
import vector1 from "./vector-1.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector5 from "./vector-5.svg";

export const Frame = () => {
  return (
    <div className="frame">
      <img className="rectangle" alt="Rectangle" src={rectangle} />
      <div className="div" />
      <div className="yes">
        <div className="rectangle-2" />
        <div className="text-wrapper">what i do:</div>
      </div>
      <div className="wont">
        <div className="rectangle-3" />
        <div className="text-wrapper-2">what i won’t do:</div>
      </div>
      <div className="information">
        <div className="rectangle-4" />
        <div className="text-wrapper-3">More</div>
        <div className="about">
          <div className="text">About</div>
          <img className="union" alt="Union" src={union} />
          <img className="vector" alt="Vector" src={vector5} />
        </div>
        <div className="contact">
          <img className="img" alt="Vector" src={vector3} />
          <div className="text-2">Contact</div>
        </div>
        <div className="my">
          <img className="vector-2" alt="Vector" src={vector1} />
          <div className="text-3">My Work</div>
        </div>
        <div className="faq">
          <img className="vector-3" alt="Vector" src={vector2} />
          <div className="text-4">FaQ</div>
        </div>
        <p className="descripti">
          Grapich Designer, Illustrator, Video &amp; Photo Editor, Developer
        </p>
        <div className="name">Hi! i’m Kasyh</div>
      </div>
      <div className="pesan">
        <div className="ellipse" />
        <div className="text-5">ORDER HERE</div>
      </div>
    </div>
  );
};
