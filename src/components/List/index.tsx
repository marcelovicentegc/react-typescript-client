import React from "react";
import { UnorderedList, ListItem } from "./style";
import { generateKey } from "../../utils/generateKey";

export interface Item
  extends Omit<React.HTMLProps<HTMLLIElement>, "ref" | "as"> {
  label: string;
}

interface Props {
  items: Item[];
}

export const List: React.FC<Props> = ({ items }) => {
  return (
    <UnorderedList>
      {items.map(item => {
        return (
          <ListItem {...item} key={generateKey(20)}>
            {item.label}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};
