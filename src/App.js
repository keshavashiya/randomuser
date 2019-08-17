import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch("https://api.randomuser.me/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          user: responseJson
        });
        console.log(this.state.user.results[0].gender);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div
        style={{
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.user ? (
          <div>
            <div>
              <h1>Random User</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "left",
                  padding: 12
                }}
              >
                <img
                  src={this.state.user.results[0].picture.large}
                  alt="golf"
                />
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "right",
                  padding: 12
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>
                    {this.state.user.results[0].name.title}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                  <h5>
                    {this.state.user.results[0].name.first}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                  <h5>
                    {this.state.user.results[0].name.last}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                </div>
                <h5>{this.state.user.results[0].email}</h5>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "left",
                  padding: 12
                }}
              >
                <h5>{this.state.user.results[0].gender}</h5>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "right",
                  padding: 12
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>
                    {this.state.user.results[0].dob.date}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                  <h5>
                    {this.state.user.results[0].dob.age}&nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
            <h6>Loading</h6>
          </div>
        )}
      </div>
    );
  }
}
