import positionData from './position.json';
import candidateData from './candidate.json';

export const positionAPI = {
  getAllPositions() {
    return new Promise((resolve) => {
      if (localStorage.getItem('positions')) {
        resolve(JSON.parse(localStorage.getItem('positions')));
      }

      setTimeout(() => {
        resolve(positionData);
      }, 500);
    });
  }
};

export const candidateAPI = {
  getAllCandidates() {
    return new Promise((resolve) => {
      if (localStorage.getItem('candidates')) {
        resolve(JSON.parse(localStorage.getItem('candidates')));
      }

      setTimeout(() => {
        resolve(candidateData);
      }, 600);
    });
  }
};
