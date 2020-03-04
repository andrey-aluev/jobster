import { candidateAPI } from '../../api/api';
import { addMessage } from './appReducer';

const CANDIDATES_REQUESTED = 'CANDIDATES_REQUESTED';
const CANDIDATES_LOADED = 'CANDIDATES_LOADED';
const CANDIDATE_ADD = 'CANDIDATE_ADD';

const initialState = {
  list: [],
  loading: false
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {

    case CANDIDATES_REQUESTED: {
      return {
        ...state,
        loading: true
      }
    }

    case CANDIDATES_LOADED: {
      return {
        ...state,
        list: action.list,
        loading: false
      }
    }

    case CANDIDATE_ADD: {
      return {
        ...state,
        list: [action.candidate, ...state.list]
      }
    }

    default:
      return state
  }
};

const candidatesRequested = () => {
  return {
    type: CANDIDATES_REQUESTED,
  };
};

const candidatesLoaded = (list) => {
  return {
    type: CANDIDATES_LOADED,
    list,
  };
};

const candidateAdd = (candidate) => {
  return {
    type: CANDIDATE_ADD,
    candidate
  };
};

export const getAllCandidates = () => async dispatch => {
  dispatch(candidatesRequested());
  candidateAPI.getAllCandidates()
    .then(res => {
      dispatch(candidatesLoaded(res));
      localStorage.setItem('candidates', JSON.stringify(res));
    });
};

export const addCandidate = (candidate, history) => dispatch => {
  dispatch(candidateAdd(candidate));
  dispatch(addMessage('Candidate added'));
  history.push('/');
};

export default candidateReducer;
