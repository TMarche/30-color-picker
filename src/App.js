import React from "react";

class App extends React.Component {
    state = {
        color: "#FFFFFF",
    };

    setColor = (color) => {
        this.setState({
            color,
        });
    };

    render() {
        return (
            <div className="App">
                <div
                    style={{
                        height: "100vh",
                        backgroundColor: this.state.color,
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "40%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <h1 style={{ textAlign: "center" }}>Color Picker</h1>
                        <input
                            type="text"
                            value={this.state.color}
                            onChange={(e) => this.setColor(e.target.value)}
                        />
                        <input
                            style={{
                                border: "none",
                                height: "19px",
                                width: "19px",
                            }}
                            type="color"
                            id="color"
                            name="color"
                            value={this.state.color}
                            onChange={(e) => this.setColor(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
