import React from "react";
import {
  LayoutWrapper,
  StyledLayout,
  Image,
  Span,
  GreetingsBox,
  CardWrapper
} from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";
import {
  useLandingPageContext,
  ModalState,
  Tip
} from "../../contexts/LandingPageContext";
import { Card } from "../Card";
import { List } from "../List";
import { generateKey } from "../../utils/generateKey";

export const Layout: React.FC = () => {
  const [tip, setTip] = React.useState<Tip>({ label: "", key: "" });
  const {
    state,
    hideTipsModal,
    addTip,
    displayTipsModal,
    removeTip
  } = useLandingPageContext();

  return (
    <LayoutWrapper>
      <StyledLayout>
        <GreetingsBox>
          {!!state.modal && (
            <CardWrapper onClick={() => hideTipsModal()}>
              {state.modal === ModalState.tips && (
                <Card title={"🚀 Tips for a better web app"}>
                  <List
                    items={state.tips}
                    displayItemAdditionModal={displayTipsModal}
                    removeItem={removeTip}
                  />
                </Card>
              )}
              {state.modal === ModalState.tipAddition && (
                <Card title={"➕ Add a tip"}>
                  <form
                    onSubmit={() => {
                      addTip({ label: tip.label, key: generateKey(10) });
                    }}
                  >
                    <input
                      type="text"
                      onChange={e => setTip({ label: e.target.value, key: "" })}
                    ></input>
                  </form>
                </Card>
              )}
            </CardWrapper>
          )}
          <Span>The install worked successfully! Congratulations! </Span>
          <br />
          <Span>Now go build something great 😃!</Span>
        </GreetingsBox>
        <Image src={rocketLaunch} alt={"Rocket being launched"} />
      </StyledLayout>
    </LayoutWrapper>
  );
};
