import { Link} from "react-router-dom";
const Blogs = () => {
  return (
    <>
        <div className="contenat3">
      <div className="first">
        <h3>🎗</h3>
        <h2>Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit. <br />
          Nemo illum adipisci labore <br />
          odio magni tempora, earum
        </p>
        <button className="box-button"><Link to="#" >Click</Link></button>
      </div>

      <div className="second">
        <h3>🩸</h3>
        <h2>Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit. <br />
          Nemo illum adipisci labore <br />
          odio magni tempora, earum
        </p>
        <button className="box-button"><Link to="#" >Click</Link></button>
      </div>

      <div className="third">
        <h3>🔌</h3>
        <h2>Web Design</h2>
        <p>
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit. <br />
          Nemo illum adipisci labore <br />
          odio magni tempora, earum
        </p>
        <button className="box-button"><Link to="#">Click</Link></button>
      </div>
    </div>
    </>
  );
}

export default Blogs;