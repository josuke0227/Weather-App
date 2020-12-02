const getLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    (response) => {
      let lat = response.coords.latitude;
      let long = response.coords.longitude;
      const geoLocation = `${lat},${long}`;
      this.setState({ geoLocation });
      return geoLocation;
    },
    (error) => {
      let errorMEssage = error.message;
      this.setState({ errorMEssage });
      return errorMEssage;
    }
  );
};
