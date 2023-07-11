import React, { useState } from "react";

//forms
import BasicForm from "./components/basic-form/BasicForm";
import Midlevel from "./components/advanced-form/Midlevel";
import Advanced from "./components/checkboxes/Advanced";

function App() {
    const [view, setView] = useState("BASIC");
    return (
        <div className="app">
            <div className="options">
                <h3
                    className={view === "BASIC" ? "active" : ""}
                    onClick={() => setView("BASIC")}
                >
                    First
                </h3>
                <h3
                    className={view === "MID_LEVEL" ? "active" : ""}
                    onClick={() => setView("MID_LEVEL")}
                >
                    Mid Level
                </h3>
                <h3
                    className={view === "ADVANCED" ? "active" : ""}
                    onClick={() => setView("ADVANCED")}
                >
                    Advanced
                </h3>
            </div>

            <div className="form-container">
                {view === "BASIC" ? (
                    <BasicForm />
                ) : view === "MID_LEVEL" ? (
                    <Midlevel />
                ) : (
                    <Advanced />
                )}
            </div>
        </div>
    );
}

export default App;
