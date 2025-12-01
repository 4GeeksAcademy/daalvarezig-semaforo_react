import React from "react";

const Luz = ({ color, active, onClick }) => {
    const brillo =
        active ? `0 0 25px ${color}, 0 0 40px ${color}` : "none";

    return (
        <div
            onClick={onClick}
            className="rounded-circle my-2"
            style={{
                width: "80px",
                height: "80px",
                backgroundColor: active ? color : "black",
                cursor: "pointer",
                boxShadow: brillo,
                transition: "0.2s"
            }}
        ></div>
    );
};

export default Luz;
