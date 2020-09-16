import * as stores from "../";
import { createContext, useContext } from "react";

export class RootStore {
  public uiStore: stores.UIStore;

  public constructor() {
    this.uiStore = new stores.UIStore(this);

    return {
      uiStore: this.uiStore,
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
export let useStore = (): stores.RootStore => {
  return useContext(rootStoreContext);
};
