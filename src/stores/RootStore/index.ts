import * as stores from "../";
import { createContext, useContext } from "react";

class RootStore {
  public uiStore = new stores.UIStore(this);
}

const rootStore = new RootStore();

const RootStoreContext = createContext(rootStore);
const useStores = (): stores.RootStore => {
  return useContext(RootStoreContext);
};

export { RootStore, rootStore, RootStoreContext, useStores };
