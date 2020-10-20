// Core
import React from "react";

// Styles
import "./styles/index.scss";

import { useGlobalizedSet } from "./bus/globalized/hooksGlobalized/useGlobalizedSet";

// Components
import { TaskCard } from "../source/bus/taskCard";
import { TaskList } from "../source/bus/taskList";

export const Source = () => {
  const {
    data,
    isFetching,
    error,
    receivedData,
    isShownBlankCard,
    handleNewTask,
    isShownSelectedCard,
    handleSelectItem,
  } = useGlobalizedSet();

  return (
    <>
      <main>
        <div className="controls">
          <button className="button-create-task" onClick={handleNewTask}>New Task</button>
        </div>
        <div className="wrap">
          <TaskList
            data={data}
            isFetching={isFetching}
            error={error}
            receivedData={receivedData}
            handleSelectItem={handleSelectItem}
          />
          {isShownSelectedCard && <TaskCard />}
          {isShownBlankCard && <TaskCard />}
        </div>
      </main>
      <footer>
        <span>© 2020 Lectrum LLC - All Rights Reserved.</span>
      </footer>
    </>
  );
};
