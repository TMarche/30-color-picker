import React from "react";
import Color from "color";

class App extends React.Component {
    state = {
        color: "#dd4444",
    };

    setColor = (color) => {
        this.setState({
            color,
        });
    };

    getHeaderColor = () => {
        const color = Color(this.state.color);
        if (color.isDark()) {
            return "white";
        }
        return "black";
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
                        <h1
                            style={{
                                textAlign: "center",
                                fontSize: "72px",
                                color: this.getHeaderColor(),
                            }}
                        >
                            Color Picker
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
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
            </div>
        );
    }
}

export default App;
