import React from "react";
import { Image, Span, GreetingsBox } from "./style";
import rocketLaunch from "../../icons/rocketLaunch.png";
import { useStores } from "../../stores/RootStore";
import { observer } from "mobx-react";
const Modal = React.lazy(() => import("./Modal"));

export const LandingPage: React.FC = observer(() => {
  const { uiStore } = useStores();

  return (
    <>
      <React.Suspense fallback={"loading..."}>
        {uiStore.modal && (
          <Modal
            modal={uiStore.modal}
            tips={uiStore.tips}
            hideTipsModal={uiStore.hideTipsModal}
            addTip={uiStore.addTip}
            displayTipAdditionModal={uiStore.displayTipAdditionModal}
            displayTipEditionModal={uiStore.displayTipEditionModal}
            displayTipsModal={uiStore.displayTipsModal}
            removeTip={uiStore.removeTip}
            editTip={uiStore.editTip}
          />
        )}
      </React.Suspense>
      <GreetingsBox data-testid="greetingsBox">
        <Span data-testid="span">
          The install worked successfully! Congratulations!
        </Span>
        <br />
        <Span data-testid="span">Now go build something great 😃!</Span>
      </GreetingsBox>
      <Image src={rocketLaunch} alt={"Rocket being launched"} />
    </>
  );
});
