import { positionAPI } from '../../api/api';
import { addMessage } from './appReducer';

const POSITIONS_REQUESTED = 'POSITIONS_REQUESTED';
const POSITIONS_LOADED = 'POSITIONS_LOADED';

const POSITION_ADD = 'POSITION_ADD';

const POSITION_ADD_TO_DRAFT = 'POSITION_ADD_TO_DRAFT';
const POSITION_SAVE_DRAFTS = 'POSITION_SAVE_DRAFTS';
const POSITION_CANCEL_DRAFTS = 'POSITION_CANCEL_DRAFTS';
const POSITION_UPDATE_STATUS = 'POSITION_UPDATE_STATUS';

const initialState = {
  list: [],
  drafts: [{
    id: 1,
    title: 'aaa',

  }],
  loading: false,
};

const updateStatus = (state, positionId) => {
  let newArr = [];
  const { list } = state;

  const existPosition = list.find(p => p.id === Number(positionId));

  if (existPosition) {
    const idx = list.findIndex(p => p.id === existPosition.id);

    let updatedPos = list[idx];
    updatedPos.status = false;

    newArr = [
      ...list.slice(0, idx),
      updatedPos,
      ...list.slice(idx + 1)];
  }

  localStorage.setItem('positions', JSON.stringify(newArr));

  return {
    ...state,
    list: newArr,
  };
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {

    case POSITIONS_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case POSITIONS_LOADED: {
      return {
        ...state,
        loading: false,
        list: action.list
      };
    }

    case POSITION_ADD: {
      return {
        ...state,
        list: [action.position, ...state.list]
      };
    }

    case POSITION_ADD_TO_DRAFT: {
      return {
        ...state,
        drafts: [action.position, ...state.drafts]
      };
    }

    case POSITION_SAVE_DRAFTS: {
      return {
        ...state,
        drafts: [],
        list: [...action.positions, ...state.list]
      };
    }

    case POSITION_UPDATE_STATUS: {
      return updateStatus(state, action.positionId);
    }

    case POSITION_CANCEL_DRAFTS: {
      return {
        ...state,
        drafts: []
      }
    }

    default:
      return state;
  }
};

const positionsRequested = () => {
  return {
    type: POSITIONS_REQUESTED,
  };
};

const positionsLoaded = (list) => {
  return {
    type: POSITIONS_LOADED,
    list,
  };
};

const positionAdd = (position) => {
  return {
    type: POSITION_ADD,
    position
  };
};

const positionAddToDraft = (position) => {
  return {
    type: POSITION_ADD_TO_DRAFT,
    position
  };
};

const positionSaveDrafts = (positions) => {
  return {
    type: POSITION_SAVE_DRAFTS,
    positions
  };
};

const positionUpdateStatus = (positionId) => {
  return {
    type: POSITION_UPDATE_STATUS,
    positionId
  };
};

export const getAllPositions = () => async dispatch => {
  dispatch(positionsRequested());
  positionAPI.getAllPositions()
    .then(res => {
      dispatch(positionsLoaded(res));
      localStorage.setItem('positions', JSON.stringify(res));
    });
};

export const addPosition = (position, history) => dispatch => {
  dispatch(positionAdd(position));
  dispatch(addMessage('Position added'));
  history.push('/');
};

export const addPositionToDraft = (position, length) => dispatch => {
  dispatch(positionAddToDraft(position));
  dispatch(addMessage(`Position #${length} added to Drafts`));
};

export const saveDraftPositions = (positions, history) => dispatch => {
  dispatch(positionSaveDrafts(positions));
  dispatch(addMessage(`All (${positions.length}) positions added`));
  history.push('/');
};

export const cancelDraftsPositions = () => {
  return {
    type: POSITION_CANCEL_DRAFTS
  }
};

export const updatePositionStatus = (positionId) => dispatch => {
  dispatch(positionUpdateStatus(positionId));
};

export default positionReducer;
