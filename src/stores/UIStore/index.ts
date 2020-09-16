import { action, observable } from "mobx";
import { RootStore } from "../";

export enum ModalState {
  tips = "tips",
  tipAddition = "tipAddition",
  tipEdition = "tipEdition",
}

export interface Tip {
  key: string;
  label: string;
}

export class UIStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public modal: ModalState | null = null;
  @observable public tips: Tip[] = [
    { label: "Plan your application", key: "1" },
    { label: "Don't repeat yourself", key: "2" },
    { label: "Keep it simple and sweet", key: "3" },
    { label: "Control changes", key: "4" },
    { label: "Document what you're doing", key: "5" },
    { label: "Test what you're writing", key: "6" },
  ];

  @action
  public addTip = (tip: Tip) => {
    this.tips.push(tip);
  };

  @action
  public editTip = (tipToChange: Tip) => {
    const tipIndex = this.tips.findIndex((tip) => tip.key === tipToChange.key);

    this.tips[tipIndex].label = tipToChange.label;
  };

  @action
  public removeTip = (tipToRemove: Tip) => {
    const tipIndex = this.tips.findIndex((tip) => tip.key === tipToRemove.key);

    this.tips.splice(tipIndex, 1);
  };

  @action
  public hideTipsModal = () => {
    this.modal = null;
  };

  @action public displayTipAdditionModal = () => {
    this.modal = ModalState.tipAddition;
  };

  @action public displayTipEditionModal = () => {
    this.modal = ModalState.tipEdition;
  };

  @action public displayTipsModal = () => {
    this.modal = ModalState.tips;
  };
}
