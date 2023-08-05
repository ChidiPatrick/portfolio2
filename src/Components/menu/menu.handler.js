const toggleMenu = (dispatch, changeState) => {
  console.log("Clicked");
  dispatch(changeState());
};

export { toggleMenu };
