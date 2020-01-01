import React from "react";
import {
  LayoutWrapper,
  StyledLayout,
  Image,
  Span,
  GreetingsBox,
  CardWrapper,
  ButtonContainer
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
import { Form } from "../Form";
import { Button, ButtonType } from "../Button";

export const Layout: React.FC = () => {
  const [tipLabel, setTipLabel] = React.useState("");
  const {
    state,
    hideTipsModal,
    addTip,
    displayTipAdditionModal,
    displayTipsModal,
    removeTip
  } = useLandingPageContext();

  return (
    <LayoutWrapper>
      <StyledLayout>
        <GreetingsBox>
          {!!state.modal && (
            <CardWrapper
              onClick={e => {
                if (e.target === e.currentTarget) {
                  hideTipsModal();
                }
              }}
            >
              {state.modal === ModalState.tips && (
                <Card title={"🚀 Tips for a better web app"}>
                  <List
                    items={state.tips}
                    displayItemAdditionModal={displayTipAdditionModal}
                    removeItem={removeTip}
                  />
                </Card>
              )}
              {state.modal === ModalState.tipAddition && (
                <Card title={"➕ Add a tip"}>
                  <Form
                    inputs={[
                      {
                        type: "text",
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                          setTipLabel(e.target.value);
                        },
                        value: tipLabel
                      }
                    ]}
                  />
                  <ButtonContainer>
                    <Button
                      type={ButtonType.tertiary}
                      label={"Go back"}
                      onClick={() => displayTipsModal()}
                    />
                    <Button
                      label={"Save changes"}
                      onClick={() =>
                        addTip({ label: tipLabel, key: generateKey(10) })
                      }
                    />
                  </ButtonContainer>
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
