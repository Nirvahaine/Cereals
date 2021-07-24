import CerealsData from "../data/data.json";
import Vuex from 'vuex';
import Vue from 'vue';

for(let i=0; i < CerealsData.length; i++) {
    let percentage = CerealsData[i].rating;
    if (percentage >= 80) {
      CerealsData[i].score = 'A';
    } else if (percentage >= 70 && percentage < 80) {
      CerealsData[i].score = 'B';
    } else if (percentage >= 55 && percentage < 70) {
      CerealsData[i].score = 'C';
    } else if (percentage >= 35 && percentage < 55) {
      CerealsData[i].score = 'D';
    } else {
      CerealsData[i].score = 'E';
    }
  }

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cereals: CerealsData,
        filteredCereals: CerealsData,
        filters: []
    },
    mutations: {
        // Supprime une carte avec son ID
        deleteCard(state, id) {
            for (let i=0; i < state.cereals.length; i++) {
              if (state.cereals[i].id === id) { 
                state.cereals.splice(i, 1);
                break;
              }
            }
          },
        // Met à jour la liste de cartes filtrées
        refresh(state) {
            state.filteredCereals = state.cereals.filter(cereal => state.filters.indexOf(cereal.score) !== -1);
        },
        // Met à jour les filtres actifs
        updateFilters(state, filters) {
            state.filters = filters;
        }
    },
    actions: {
        // Met à jour filter et refresh
        filter(context, filters) {
            context.commit('updateFilters', filters);
            context.commit('refresh');
        },
        // Supprime la carte et refresh
        deleteCardByID(context, id) {
            context.commit('deleteCard', id);
            context.commit('refresh');
        }
    }
})