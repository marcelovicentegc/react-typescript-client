import React from "react";

interface LandingPageProviderProps {
  children: React.ReactNode;
}

enum ModalState {
  tips
}

interface LandingPageState {
  modal: ModalState | null;
}

enum LandingPageActionType {
  displayTipsModal,
  hideTipsModal
}

interface LandingPageAction {
  type: LandingPageActionType;
}

interface LandingPageContextInterface {
  state: LandingPageState;
  dispatch(action: LandingPageAction): void;
}

const LandingPageContext = React.createContext<LandingPageContextInterface | null>(
  null
);

const landingPageReducer = (
  state: LandingPageState,
  action: LandingPageAction
): LandingPageState => {
  switch (action.type) {
    case LandingPageActionType.displayTipsModal: {
      return { modal: ModalState.tips };
    }
    case LandingPageActionType.hideTipsModal: {
      return { modal: null };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const useLandingPageContext = () => {
  const context = React.useContext(LandingPageContext);
  if (!context) {
    throw new Error(
      `useLandingPageContext must be used within a LandingPageProvider`
    );
  }
  const { state, dispatch } = context;

  const displayTipsModal = () =>
    dispatch({ type: LandingPageActionType.displayTipsModal });
  const hideTipsModal = () =>
    dispatch({ type: LandingPageActionType.hideTipsModal });

  return {
    state,
    dispatch,
    displayTipsModal,
    hideTipsModal
  };
};

const LandingPageProvider: React.FC<LandingPageProviderProps> = props => {
  const [state, dispatch] = React.useReducer(landingPageReducer, {
    modal: null
  });
  const [memoizedState, memoizedDispatch] = React.useMemo(
    () => [state, dispatch],
    [state]
  );
  return (
    <LandingPageContext.Provider
      value={{
        state: memoizedState,
        dispatch: memoizedDispatch
      }}
      {...props}
    />
  );
};

export {
  LandingPageProvider,
  useLandingPageContext,
  ModalState,
  LandingPageActionType
};
