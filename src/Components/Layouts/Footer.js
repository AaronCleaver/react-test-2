import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    console.log(index);
    onSelect(index === 0 ? "" : muscles[index - 1]);
    return;
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map(group => (
          <Tab label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
