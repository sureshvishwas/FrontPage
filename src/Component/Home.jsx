import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <section className="contenat2">
                <div className="fir">
                    <h1>Hi guys Welcome to</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Nemo illum adipisci labore odio magni tempora, earum perspiciatis impedit?<br />
                        Cumque, qui. Vero praesentium cumque hic eos culpa eum consectetur totam expedita.
                    </p>
                    <button className="btnt"><Link to="#">Explore</Link></button>
                </div>
            </section>
        </>
    );
}

export default Home;