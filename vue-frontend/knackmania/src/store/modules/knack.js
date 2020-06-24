import axios from "axios";

const state = {
  knacks: [],
  selectedKnack: {},
};

const getters = {
  allKnacks: (state) => state.knacks,
  selectedKnack: (state) => state.selectedKnack
};

const actions = {
  getKnacks({ commit }) {
    axios
      .get("http://localhost:8080/api/knacks")
      .then((response) => {
        commit("SET_KNACKS", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },

  getKnack({ commit }, id) {
    axios
      .get(`http://localhost:8080/api/knacks/${id}`)
      .then((response) => {
        commit("SET_KNACK", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      });
  },
};

const mutations = {
  SET_KNACKS: (state, knacks) => (state.knacks = knacks),
  SET_KNACK: (state, selectedKnack) => (state.selectedKnack = selectedKnack)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
