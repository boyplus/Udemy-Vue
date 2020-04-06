const state = {
    count: 0,
};

const getters = {
    doubleCounter: (state) => {
        return state.count * 2;
    },
    stringCounter: (state) => {
        return state.count + ' clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.count += payload;
    },
    decrement: (state, payload) => {
        state.count -= payload;
    },
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    },
};
export default { state, mutations, getters, actions };
