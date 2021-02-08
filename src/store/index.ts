import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    user: {
      id: '100003656768174',
      accessToken:
        'EAAAAZAw4FxQIBAJAiHyXM9r75HLjlNNZCL30qBMktFvv3GKbhwWK9BP2aiNSKVOpZChsnb6CoKC5LSl3ZB68OBfOQ6uDSBQjMieR8fZCOkDUfqZCYZAke0fbEPEAdei4pAni3JSydKJkyNZC4hRvoH1GRH5fg2NqGQ2QHuZBXNmpYFiQ910YpgeeY',
      cookie:
        'EAAAAZAw4FxQIBAJAiHyXM9r75HLjlNNZCL30qBMktFvv3GKbhwWK9BP2aiNSKVOpZChsnb6CoKC5LSl3ZB68OBfOQ6uDSBQjMieR8fZCOkDUfqZCYZAke0fbEPEAdei4pAni3JSydKJkyNZC4hRvoH1GRH5fg2NqGQ2QHuZBXNmpYFiQ910YpgeeY',
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      paths: ['user', 'friends', 'mutualFriends'],
    }),
  ],
});
