import React, { useState } from "react";
import Luz from "./Luz";

const Semaforo = () => {
    const [active, setActive] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            {/* Poste superior */}
            <div style={{
                width: "20px",
                height: "160px",
                backgroundColor: "black"
            }}></div>

            {/* Caja del semáforo */}
            <div
                style={{
                    width: "120px",
                    backgroundColor: "black",
                    padding: "20px",
                    borderRadius: "20px"
                }}
            >
                <Luz color="red" active={active === "red"} onClick={() => setActive("red")} />
                <Luz color="yellow" active={active === "yellow"} onClick={() => setActive("yellow")} />
                <Luz color="green" active={active === "green"} onClick={() => setActive("green")} />
            </div>
        </div>
    );
};

export default Semaforo;
