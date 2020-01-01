import React from "react";
import { UnorderedList, ListItem, Container } from "./style";
import { generateKey } from "../../utils/generateKey";

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
}

export const List: React.FC<Props> = ({
  items,
  displayItemEditionModal,
  removeItem,
  setTipKey
}) => {
  return (
    <UnorderedList>
      {items.map(item => {
        return (
          <ListItem
            {...item}
            key={generateKey(20)}
            withExtraFunctionalities={!!displayItemEditionModal || !!removeItem}
          >
            {item.label}
            <Container>
              {displayItemEditionModal && setTipKey && (
                <span
                  onClick={() => {
                    setTipKey(item.key);
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
};
