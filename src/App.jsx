import React, { useState } from "react";

//forms
import BasicForm from "./components/basic-form/BasicForm";
import AdvancedForm from "./components/advanced-form/AdvancedForm";

function App() {
    const [view, setView] = useState("BASIC");
    return (
        <div className="app">
            <div className="options">
                <h3
                    className={view === "BASIC" && "active"}
                    onClick={() => setView("BASIC")}
                >
                    Basic
                </h3>
                <h3
                    className={view === "ADVANCED" && "active"}
                    onClick={() => setView("ADVANCED")}
                >
                    Advanced
                </h3>
            </div>

            <div className="form-container">
                {view === "BASIC" ? <BasicForm /> : <AdvancedForm />}
            </div>
        </div>
    );
}

export default App;
