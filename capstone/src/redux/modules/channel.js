import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";


// action

const GET_CHANNEL = "GET_CHANNEL";

// action creators

const getChannel = createAction(GET_CHANNEL, (channelList) => ({
  channelList,
}));


// initialState
const initialState = {
  channelList: [],
};

const getChannelMD = (dogPostId) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: ` http://34.64.56.32:5000/channels`,
    })
      .then((res) => {
        const channelList = res.data.comment;
        dispatch(getChannel(channelList));
      })
      .catch((err) => {
        // console.log("댓글 get 에러", err);
      });
  };
};



// reducer
export default handleActions(
  {

    [GET_CHANNEL]: (state, action) =>
      produce(state, (draft) => {
        draft.channelList = action.payload.channelList;
      }),
  },
  initialState
);

const actionCreators = {

  getChannel,
  getChannelMD,

};

export { actionCreators };