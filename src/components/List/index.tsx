import React from "react";
import { UnorderedList, ListItem, Container } from "./style";
import { generateKey } from "../../utils/generateKey";
import { observer } from "mobx-react";

export interface Item
  extends Omit<React.HTMLProps<HTMLLIElement>, "ref" | "as"> {
  label: string;
  key: string;
}

interface Props {
  items: Item[];
  setTipKey?: (key: string) => void;
  displayItemEditionModal?: () => void;
  removeItem?: (args: Item) => void;
  getCurrentTipLabel?: (tipLabel: string) => void;
}

export const List: React.FC<Props> = observer(
  ({
    items,
    displayItemEditionModal,
    removeItem,
    setTipKey,
    getCurrentTipLabel,
  }) => {
    return (
      <UnorderedList data-testid="unorderedList">
        {items.map((item) => {
          return (
            <ListItem
              {...item}
              key={generateKey(20)}
              withExtraFunctionalities={
                !!displayItemEditionModal || !!removeItem
              }
              data-testid="listItem"
            >
              {item.label}
              <Container>
                {displayItemEditionModal && setTipKey && getCurrentTipLabel && (
                  <span
                    onClick={() => {
                      setTipKey(item.key);
                      getCurrentTipLabel(item.label);
                      displayItemEditionModal();
                    }}
                  >
                    ♻️
                  </span>
                )}
                {removeItem && <span onClick={() => removeItem(item)}>➖</span>}
              </Container>
            </ListItem>
          );
        })}
      </UnorderedList>
    );
  }
);
