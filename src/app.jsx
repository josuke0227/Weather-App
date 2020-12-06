import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import areas from "./components/constants/areas";
import styled from "styled-components";
import MyLoader from "./components/myLoader";
import metaWeather from "./api/metaWeather";
import MainWindow from "./components/mainWindow";
import SubWindow from "./components/subWindow";
import LoaderIndicator from "./components/common/LoaderIndicator";

const Container = styled.main`
  display: flex;
  overflow: hidden;

  @media (max-width: 860px) {
    overflow: unset;
    flex-direction: column;
  }
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
      choices: "",
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
            const woeid = currentLocation.woeid;
            this.setState({ currentLocation });
            metaWeather
              .get(`api/location/${woeid}/`)
              .then((response) => {
                const fiveDaysWeather = response.data.consolidated_weather;
                this.setState({ fiveDaysWeather });
              })
              .catch((error) => alert(`${error}@calling API`));
          })
          .catch((error) => alert(error));
      },
      (error) => {
        alert(`${error.message}@getCurrentPosition`);
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
    trackPromise(
      metaWeather
        .get("api/location/search/", {
          params: { query: query },
        })
        .then((response) => {
          const choices = response.data;
          this.setState({ choices });
        })
        .catch((error) => alert(error)),
      areas.search
    );
    this.setState({ query });
  };

  onSearchButtonClick = (e) => {
    e.preventDefault();
    this.getLocationChoices(this.state.query);
    this.setState({ query: "" });
  };

  onCloseButtonClick = () => {
    this.setState({ isOpened: false, choices: "", query: "" });
  };

  onGpsButtonClick = () => {
    this.setState({ newLocation: "", newFiveDaysWeather: "" });
  };

  onCityNameClick = (city) => {
    console.log(city);
    const woeid = city.woeid;
    this.setNewForecast(woeid);
    this.setState({ newLocation: city, isOpened: false, query: "" });
  };

  onChoiceClick = (cityName) => {
    const query = cityName;
    this.setState({ query, choices: "" });
  };

  getLocationChoices = (query) => {
    trackPromise(
      metaWeather
        .get("api/location/search/", {
          params: { query: query },
        })
        .then((response) => {
          const searchResult = response.data;
          this.setState({ searchResult });
        })
        .catch((error) => alert(`${error}@getLocationChoices`))
    );
  };

  setNewForecast = (woeid) => {
    trackPromise(
      metaWeather
        .get(`api/location/${woeid}/`)
        .then((response) => {
          const newFiveDaysWeather = response.data.consolidated_weather;
          this.setState({ newFiveDaysWeather });
        })
        .catch((error) => alert(`${error}@ set new forecast`)),
      areas.all
    );
  };

  render() {
    let weather = !this.state.newFiveDaysWeather
      ? this.state.fiveDaysWeather
      : this.state.newFiveDaysWeather;

    let location = !this.state.newLocation
      ? this.state.currentLocation
      : this.state.newLocation;

    if (this.state.currentLocation && this.state.fiveDaysWeather) {
      return (
        <React.Fragment>
          <LoaderIndicator
            name="Puff"
            bgColor="rgba(0, 0, 0, 0.2)"
            position="absolute"
            area={areas.all}
            width="150"
            height="150"
          />
          <Container>
            <MainWindow
              choices={this.state.choices}
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
              onChoiceClick={this.onChoiceClick}
            />
            <SubWindow
              weather={weather}
              weatherToday={weather[0]}
              onUnitButtonClick={this.onUnitButtonClick}
              currentUnit={this.state.unit}
            />
          </Container>
        </React.Fragment>
      );
    } else {
      return (
        <MyLoader
          name="Puff"
          position="absolute"
          bgColor="var(--bg-secondary)"
          text="Getting Weather Info..."
          width="150"
          height="150"
        />
      );
    }
  }
}

export default App;
