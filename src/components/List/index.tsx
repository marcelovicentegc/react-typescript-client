import React from "react";
import { UnorderedList, ListItem } from "./style";
import { generateKey } from "../../utils/generateKey";

export interface Item
  extends Omit<React.HTMLProps<HTMLLIElement>, "ref" | "as"> {
  label: string;
  key: string;
}

interface Props {
  items: Item[];
  addItem?: (args: Item) => void;
  removeItem?: (args: Item) => void;
}

export const List: React.FC<Props> = ({ items, addItem, removeItem }) => {
  return (
    <UnorderedList>
      {items.map(item => {
        return (
          <ListItem {...item} key={generateKey(20)}>
            {item.label}
            {addItem && <span onClick={() => addItem(item)}>add</span>}
            {removeItem && <span onClick={() => removeItem(item)}>remove</span>}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
