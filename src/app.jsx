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
      unit: "celsius",
      isOpened: false,
      query: "",
      newLocation: "",
      searchResult: "",
      newFiveDaysWeather: "",
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

  onUnitButtonClick = (e) => {
    const unit = e.target.id;
    this.setState({ unit });
  };

  onOpenButonClick = () => {
    const isOpened = !this.state.isOpened;
    this.setState({ isOpened });
  };

  onInputChange = (e) => {
    const query = e.target.value;
    this.setState({ query });
  };

  onSearchButtonClick = (e) => {
    e.preventDefault();
    this.getLocationChoices(this.state.query);
    this.setState({ query: "" });
  };

  onCloseButtonClick = () => {
    this.setState({ isOpened: false, searchResult: "" });
  };

  onGpsButtonClick = () => {
    this.setState({ newLocation: "", newFiveDaysWeather: "" });
  };

  onCityNameClick = (city) => {
    console.log(city);
    const woeid = city.woeid;
    this.setNewForecast(woeid);
    this.setState({ newLocation: city, isOpened: false, searchResult: "" });
  };

  getLocationChoices = (query) => {
    metaWeather
      .get("api/location/search/", {
        params: { query: query },
      })
      .then((response) => {
        if (!response.data.length) console.log("no place matched");
        const searchResult = response.data;
        console.log(response.data);
        this.setState({ searchResult });
      })
      .catch((error) => console.log(error));
  };

  setNewForecast = (woeid) => {
    metaWeather
      .get(`api/location/${woeid}/`)
      .then((response) => {
        const newFiveDaysWeather = response.data.consolidated_weather;
        this.setState({ newFiveDaysWeather });
      })
      .catch((error) => console.log(error));
  };

  render() {
    let weather = !this.state.newFiveDaysWeather
      ? this.state.fiveDaysWeather
      : this.state.newFiveDaysWeather;

    let location = !this.state.newLocation
      ? this.state.currentLocation
      : this.state.newLocation;

    return (
      <Container>
        {this.state.currentLocation && this.state.fiveDaysWeather ? (
          <React.Fragment>
            <MainWindow
              query={this.state.query}
              currentUnit={this.state.unit}
              currentLocation={location}
              searchResult={this.state.searchResult}
              weather={weather[0]}
              isOpened={this.state.isOpened}
              onOpenButonClick={this.onOpenButonClick}
              onCloseButtonClick={this.onCloseButtonClick}
              onInputChange={this.onInputChange}
              onSearchButtonClick={this.onSearchButtonClick}
              onGpsButtonClick={this.onGpsButtonClick}
              onCityNameClick={this.onCityNameClick}
            />
            <SubWindow
              weather={weather}
              weatherToday={weather[0]}
              onUnitButtonClick={this.onUnitButtonClick}
              currentUnit={this.state.unit}
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
