import React from "react";

// counter functionality
class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };

    // increase by one each click
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="DragonCard">
                <div className="img-container">
                    <h3 className="card-title"> Click Counter!</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.handleIncrement}>
                        Increment
          </button>{" "}

                </div>
            </div>
        );
    }
}

export default Counter;
