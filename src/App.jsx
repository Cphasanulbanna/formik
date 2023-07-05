import React, { useState } from "react";
import BasicForm from "./components/basic-form/BasicForm";
import AdvancedForm from "./components/advanced-form/AdvancedForm";

function App() {
    const [view, setView] = useState("BASIC");
    return (
        <div className="App">
            <h3 onClick={() => setView("BASIC")}>Basic</h3>
            <h3 onClick={() => setView("ADVANCED")}>Advanced</h3>

            <div className="form-container">
                {view === "BASIC" ? <BasicForm /> : <AdvancedForm />}
            </div>
        </div>
    );
}

export default App;
