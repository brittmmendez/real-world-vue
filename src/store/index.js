import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Adam Jahr" },
    events: [],
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },

    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(res => {
          commit("SET_EVENTS", res.data);
        })
        .catch(error => {
          console.log(error.res);
        });
    },

    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit("ADD_EVENT", event.data);
        })
        .catch(() => {
          console.log("There was a problem creating your event.");
        });
    }
  },
  modules: {},
  getters: {}
});
