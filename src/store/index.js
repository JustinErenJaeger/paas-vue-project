import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeView: null,
    users: [],
    currentUser: {},
    currentOrg: {},
    recentOrgs: [],
    isChildOrg: null,
    currentChildOrg: {},
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_ORG_DATA(state, organization) {
      state.currentOrg = organization;
    },
    SET_SELECTED_CHILD_ORG_DATA(state, childOrganization) {
      state.currentChildOrg = childOrganization;
    },
    SET_IS_CHILD_ORG_RECENTS(state, value) {
      state.isChildOrg = value;
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    SET_ACTIVE_VIEW(state, currentView) {
      state.activeView = currentView;
    },
    SET_RECENT_ORGS(state, organization) {
      if (state.recentOrgs.indexOf(organization) >= 0) {
        state.recentOrgs.splice(state.recentOrgs.indexOf(organization), 1);
        state.recentOrgs.unshift(organization);
      } else {
        state.recentOrgs.unshift(organization);
      }
    },
    SET_REOREDERED_RECENTS(state, organization) {
      const position = state.recentOrgs.indexOf(organization);
      state.recentOrgs.splice(position, 1);
      state.recentOrgs.unshift(organization);
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
      window.localStorage.currentUser = JSON.stringify({});
    },
    USER_SIGNUP(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    loadUsers({ commit }) {
      const users = [
        {
          id: 0,
          username: 'Justin',
          email: 'ichigo@example.com',
          mobile: '0844705809',
          password: 'password',
          avatar: 'https://images2.fanpop.com/images/photos/6700000/ichigo-hollow-hollow-ichigo-6793357-576-521.jpg',
          organizations: [{
            id: 0,
            name: "Justin's Organization",
            type: 'Funder',
            address: 'Adress 1',
            parent: 'Parent',
            children: [{
              id: 0,
              name: 'Child1',
              type: 'type',
              address: 'address',
            },
            {
              id: 1,
              name: 'Child2',
              type: 'type',
              address: 'address',
            },
            {
              id: 2,
              name: 'Child3',
              type: 'type',
              address: 'address',
            }],
          },
          {
            id: 1,
            name: "Aaron's Organization",
            type: 'Funder',
            address: 'Adress 2',
            parent: 'Parent',
          },
          {
            id: 2,
            name: "Keegan's Organization",
            type: 'Funder',
            address: 'Adress 3',
            parent: 'Parent',
            children: [{
              id: 0,
              name: 'Child1',
              type: 'type',
              address: 'address',
            },
            {
              id: 1,
              name: 'Child2',
              type: 'type',
              address: 'address',
            },
            {
              id: 2,
              name: 'Child3',
              type: 'type',
              address: 'address',
            }],
          },
          {
            id: 3,
            name: "Simon's Organization",
            type: 'Funder',
            address: 'Adress 3',
            parent: 'Parent',
          },
          {
            id: 4,
            name: "Grant's Organization",
            type: 'Funder',
            address: 'Adress 3',
            parent: 'Parent',
          },
          {
            id: 5,
            name: "Janco's Organization",
            type: 'Funder',
            address: 'Adress 3',
            parent: 'Parent',
          }],
        },
        {
          id: 1,
          username: 'Keegan',
          email: 'keegan@example.com',
          mobile: '0844705809',
          password: 'password',
          avatar: 'https://marketresearchtelecast.com/wp-content/uploads/2021/06/GSFEIY2W2ZE77JW2E3UILXAEII-320x240.jpg',
          organizations: [{
            id: 0,
            name: "Ichigo's Organization",
            type: 'Funder',
            address: '21 Gonju Street',
            parent: 'Parent',
            children: [{
              id: 0,
              name: 'Child Org 1',
              type: 'type',
              address: 'address',
            },
            {
              id: 1,
              name: 'Child Org 2',
              type: 'type',
              address: 'address',
            },
            {
              id: 2,
              name: 'Child Org 3',
              type: 'type',
              address: 'address',
            }],
          }],
        },
        {
          id: 2,
          username: 'Aaron',
          email: 'aaron@example.com',
          mobile: '0844705809',
          password: 'password',
          avatar: null,
          organizations: [],
        },
      ];
      commit('SET_USERS', users);

      const user = JSON.parse(window.localStorage.currentUser);
      commit('SET_CURRENT_USER', user);
    },
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    },
    signin({ commit }, user) {
      commit('SET_CURRENT_USER', user);
    },
    signup({ commit }, user) {
      commit('USER_SIGNUP', user);
    },
    selectedOrgData({ commit }, organization) {
      commit('SET_SELECTED_ORG_DATA', organization);
    },
    selectedChildOrgData({ commit }, childOrganization) {
      commit('SET_SELECTED_CHILD_ORG_DATA', childOrganization);
    },
    setActiveView({ commit }, currentView) {
      commit('SET_ACTIVE_VIEW', currentView);
    },
    setRecentOrgs({ commit }, organization) {
      commit('SET_RECENT_ORGS', organization);
    },
    updateOrg({ commit }, currentView) {
      commit('SET_ACTIVE_VIEW', currentView);
    },
    reorderRecents({ commit }, organization) {
      commit('SET_REOREDERED_RECENTS', organization);
    },
    setIsChildOrg({ commit }, value) {
      commit('SET_IS_CHILD_ORG_RECENTS', value);
    },
  },
});
