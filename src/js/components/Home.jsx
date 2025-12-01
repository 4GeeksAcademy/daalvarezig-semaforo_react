import React from "react";
import Semaforo from "./Semaforo.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import perfilImage from "../../img/foto_perfil.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

				<img src={perfilImage} className="rounded-circle my-5"/>   

			<div className="d-flex justify-content-center mt-4">
				<Semaforo />
			</div>

			<Footer/>
		</div>
	);
};

export default Home;