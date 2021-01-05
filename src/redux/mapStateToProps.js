function mapStateToProps(component) {
  switch (component) {
    case "CurrentUser":
      return function (state) {
        return {
          currentUser: state.currentUser,
        };
      };
    default:
      return null;
  }
}

export default mapStateToProps;
