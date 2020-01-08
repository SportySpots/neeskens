import { observable } from 'mobx';

export class SpotFiltersStore {
  @observable maxDistance = 20;
  @observable allSports = true;

  // just ref, so don't mutate if you want updates (you should replace whole array).
  @observable.ref selectedSportIds = [] as string[];
}

const spotFiltersStore = new SpotFiltersStore();

export default spotFiltersStore;

// if (window) {
//   (window as any).spotFiltersStore = spotFiltersStore;
// }
