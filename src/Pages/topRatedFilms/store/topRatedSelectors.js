export const dataSelector = (state) => state.topRated.data;

export const isLoadingSelector = (state) => state.topRated.isLoading;

export const topRatedPathnameSelector = (state) =>
  state.router.location.pathname;
