import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";

import {
  TETHER_USD,
  BNB,
  PAX_COIN,
  STETH,
  TRON,
  PASER,
  PX,
  UNISWAP,
  DEFAULT_VALUE
} from '../utils/saleToken';

export default function Selector({ defaultValue, ignoreValue, setToken, id }) {
  const menu = [
    { key: TETHER_USD, name: TETHER_USD },
    { key: BNB, name: BNB },
    { key: PAX_COIN, name: PAX_COIN },
    { key: STETH, name: STETH },
    { key: TRON, name: TRON },
    { key: PASER, name: PASER },
    { key: PX, name: PX },
    { key: UNISWAP, name: UNISWAP },
  ];

  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const [menuItems, setMenuItems] = useState([]);

  function getFilteredItems(ignore) {
    return menu.filter(item => item.key !== ignore);
  }

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setMenuItems(getFilteredItems(ignoreValue));
  }, [ignoreValue]);

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          backgroundColor: selectedItem === DEFAULT_VALUE ? '#7765F3' : '#2c2f36',
        }}
      >
        {selectedItem}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Dynamic Actions"
        items={menuItems}
        onAction={(key) => {
          setSelectedItem(key);
          setToken(key);
        }}
      >
        {(item) => (
          <Dropdown.Item
            aria-label={id}
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
