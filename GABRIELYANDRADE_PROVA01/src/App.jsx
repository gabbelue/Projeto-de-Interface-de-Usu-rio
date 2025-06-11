import React, { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);

  
    const handleClick1 = () => {
        // Contador que vai incrementar a contagem
        setCounter(counter + 1);
    };

    const handleClick2 = () => {
        // Contador para decrementar, ele vai fazer a contagem -1, que será o regressivo
        setCounter(counter - 1);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Contador de clicks
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                   Incrementar
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                   Decrementar
                </button>
            </div>
        </div>
    );
};

export default App;