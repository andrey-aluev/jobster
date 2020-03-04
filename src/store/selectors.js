export const getCandidatesLoaderSelector = (state) => {
  return state.candidates.loading;
};

export const getPositionsLoaderSelector = (state) => {
  return state.positions.loading;
};

export const getAllCandidatesSelector = (state) => {
  return state.candidates.list;
};

export const getAllPositionsSelector = (state) => {
  return state.positions.list.sort();
};

export const getPositionsDraftsSelector = (state) => {
  return state.positions.drafts;
};

export const getOpenPositionsSelector = (state) => {
  let list = state.positions.list;
  if (!list) {
    return null;
  }

  return list.filter(item => item.status ===  true)
};
