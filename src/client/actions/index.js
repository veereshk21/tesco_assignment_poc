export const FETCH_NEWS = "fetch_news";

export const fetchNews = () => async (dispatch, getState, api) => {
  try {
    const res = await api.get("/search");
    dispatch({
      type: FETCH_NEWS,
      data: res.data
    });
  } catch (exp) {}
};

