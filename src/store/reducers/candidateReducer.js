import { candidateAPI } from '../../api/api';
import { addMessage } from './appReducer';

const CANDIDATES_REQUESTED = 'CANDIDATES_REQUESTED';
const CANDIDATES_LOADED = 'CANDIDATES_LOADED';
const CANDIDATE_ADD = 'CANDIDATE_ADD';

const CANDIDATE_ADD_TO_DRAFT = 'CANDIDATE_ADD_TO_DRAFT';
const CANDIDATE_SAVE_DRAFTS = 'CANDIDATE_SAVE_DRAFTS';
const CANDIDATE_CANCEL_DRAFTS = 'CANDIDATE_CANCEL_DRAFTS';

const initialState = {
  list: [],
  drafts: [{id: 1, name: 'AAA'} ,{id: 2, name: 'BBB'}],
  loading: false
};

const candidateReducer = (state = initialState, action) => {
  switch (action.type) {

    case CANDIDATES_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case CANDIDATES_LOADED: {
      return {
        ...state,
        list: action.list,
        loading: false
      };
    }

    case CANDIDATE_ADD: {
      return {
        ...state,
        list: [action.candidate, ...state.list]
      };
    }

    case CANDIDATE_ADD_TO_DRAFT: {
      return {
        ...state,
        drafts: [action.candidate, ...state.drafts]
      };
    }

    case CANDIDATE_SAVE_DRAFTS: {
      return {
        ...state,
        drafts: [],
        list: [...action.candidates, ...state.list]
      };
    }

    case CANDIDATE_CANCEL_DRAFTS: {
      return {
        ...state,
        drafts: []
      }
    }

    default:
      return state;
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

const candidateAddToDraft = (candidate) => {
  return {
    type: CANDIDATE_ADD_TO_DRAFT,
    candidate
  };
};

const candidateSaveDrafts = (candidates) => {
  return {
    type: CANDIDATE_SAVE_DRAFTS,
    candidates
  };
};

export const cancelDraftsCandidates = () => {
  return {
    type: CANDIDATE_CANCEL_DRAFTS
  }
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

export const addCandidateToDraft = (candidate, length) => dispatch => {
  dispatch(candidateAddToDraft(candidate));
  dispatch(addMessage(`Candidate #${length} added to Drafts`));
};

export const saveDraftCandidates = (candidates, history) => dispatch => {
  dispatch(candidateSaveDrafts(candidates));
  dispatch(addMessage(`All (${candidates.length}) candidates added`));
  history.push('/');
};

export default candidateReducer;
