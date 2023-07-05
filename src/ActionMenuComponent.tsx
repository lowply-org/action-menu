import { ActionMenu, ActionList } from "@primer/react";

export const ActionMenuComponent = () => {
  const options: Array<string> = [];
  for (let i = 1; i <= 100; i++) {
    options.push("This is option " + i.toString())
  }
  return (
    <ActionMenu>
      <ActionMenu.Button>Menu with {options.length} options</ActionMenu.Button>
      <ActionMenu.Overlay>
        <ActionList>
          {options.map(o => (
            <ActionList.Item>{o}</ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  );
};
