import React from "react";
import { Image, Span, GreetingsBox, CardWrapper } from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";
import {
  useLandingPageContext,
  ModalState
} from "../../contexts/LandingPageContext";
import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Form } from "../../components/Form";
import { ButtonGroup } from "./ButtonGroup";

export const LandingPage: React.FC = () => {
  const [tipLabel, setTipLabel] = React.useState("");
  const [tipKey, setTipKey] = React.useState("");
  const [currentTipLabel, setCurrentTipLabel] = React.useState("");
  const {
    state,
    hideTipsModal,
    addTip,
    displayTipAdditionModal,
    displayTipEditionModal,
    displayTipsModal,
    removeTip,
    editTip
  } = useLandingPageContext();

  return (
    <>
      {!!state.modal && (
        <CardWrapper
          onClick={e => {
            if (e.target === e.currentTarget) {
              hideTipsModal();
            }
          }}
        >
          {state.modal === ModalState.tips && (
            <Card
              title={"🚀 Tips for a better web app (add a tip)"}
              titleWithFunction={displayTipAdditionModal}
            >
              <List
                items={state.tips}
                displayItemEditionModal={displayTipEditionModal}
                removeItem={removeTip}
                setTipKey={setTipKey}
                getCurrentTipLabel={setCurrentTipLabel}
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
                    placeholder: currentTipLabel,
                    value: tipLabel
                  }
                ]}
              />
              <ButtonGroup
                displayTipsModal={displayTipsModal}
                setTipLabel={setTipLabel}
                tipLabel={tipLabel}
                tipFunction={addTip}
              />
            </Card>
          )}
          {state.modal === ModalState.tipEdition && (
            <Card title={"♻️ Edit a tip"}>
              <Form
                inputs={[
                  {
                    type: "text",
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      setTipLabel(e.target.value);
                    },
                    placeholder: currentTipLabel,
                    value: tipLabel
                  }
                ]}
              />
              <ButtonGroup
                displayTipsModal={displayTipsModal}
                setTipLabel={setTipLabel}
                tipLabel={tipLabel}
                tipFunction={editTip}
                tipKey={tipKey}
              />
            </Card>
          )}
        </CardWrapper>
      )}
      <GreetingsBox>
        <Span>The install worked successfully! Congratulations! </Span>
        <br />
        <Span>Now go build something great 😃!</Span>
      </GreetingsBox>
      <Image src={rocketLaunch} alt={"Rocket being launched"} />
    </>
  );
};
