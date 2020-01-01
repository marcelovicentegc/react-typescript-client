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
  displayItemAdditionModal?: () => void;
  removeItem?: (args: Item) => void;
}

export const List: React.FC<Props> = ({
  items,
  displayItemAdditionModal,
  removeItem
}) => {
  return (
    <UnorderedList>
      {items.map(item => {
        return (
          <ListItem
            {...item}
            key={generateKey(20)}
            withExtraFunctionalities={
              !!displayItemAdditionModal || !!removeItem
            }
          >
            {item.label}
            <Container>
              {displayItemAdditionModal && (
                <span onClick={displayItemAdditionModal}>➕</span>
              )}
              {removeItem && <span onClick={() => removeItem(item)}>➖</span>}
            </Container>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
