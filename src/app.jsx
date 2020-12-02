import React, { Component } from "react";
import styled from "styled-components";
import metaWeather from "./api/metaWeather";
import MainWindow from "./components/mainWindow";
import SubWindow from "./components/subWindow";

const Container = styled.main`
  display: flex;
  overflow: hidden;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: "",
      fiveDaysWeather: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (response) => {
        let lat = response.coords.latitude;
        let long = response.coords.longitude;
        metaWeather
          .get("api/location/search/", {
            params: { lattlong: `${lat},${long}` },
          })
          .then((response) => {
            const currentLocation = response.data[0];
            this.setState({ currentLocation });

            const woeid = currentLocation.woeid;
            metaWeather
              .get(`api/location/${woeid}/`)
              .then((response) => {
                const fiveDaysWeather = response.data.consolidated_weather;
                this.setState({ fiveDaysWeather });
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      },
      (error) => {
        let errorMEssage = error.message;
        this.setState({ errorMEssage });
      }
    );
  }

  render() {
    return (
      <Container>
        {this.state.currentLocation && this.state.fiveDaysWeather ? (
          <React.Fragment>
            <MainWindow
              currentLocation={this.state.currentLocation}
              weather={this.state.fiveDaysWeather[0]}
            />
            <SubWindow
              weather={this.state.fiveDaysWeather}
              weatherToday={this.state.fiveDaysWeather[0]}
            />
          </React.Fragment>
        ) : (
          <h1>loading...</h1>
        )}
      </Container>
    );
  }
}

export default App;
