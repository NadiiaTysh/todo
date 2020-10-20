import React from "react";
import { Formik, Form } from "formik";
import DatePicker from "react-datepicker";
import "../../styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";

import { useTaskFetch } from "./hooks/useTaskFetch";

import { Tag } from './components/tag';

export const TaskCard = () => {
  const {
    formik,
    startDate,
    handleStartDate,
    handleCompleted,
    isShownSelectedCard,
    buttonCompleted,
    setFieldValue,
    handleDeleteTask,
  } = useTaskFetch();

  return (
    <Formik>
      <div className="task-card">
        <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className="head">
            <button
              className={buttonCompleted}
              type="button"
              onClick={handleCompleted}
            >
              Mark as complete
            </button>
            {isShownSelectedCard && (
              <button
                name="remove"
                className="button-remove-task"
                onClick={handleDeleteTask}
              />
            )}
          </div>
          <div className="content">
            <input
              type="text"
              placeholder="Task title"
              className="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <div className="deadline">
              <span className="label">Due to</span>
              <span
                className="date"
                name="deadline"
                value={formik.values.deadline}
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => handleStartDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                />
              </span>
            </div>
            <div className="description">
              <span className="label">Description</span>
              <textarea
                className="text"
                placeholder="Describe your event"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></textarea>
            </div>
            <div className="checklist">
              <span className="label">Checklist</span>
              <div className="sub-tasks">
                <div className="sub-task completed">
                  <input
                    type="text"
                    name="checklist"
                    onChange={formik.handleChange}
                    value={formik.values.checklist[0].title}
                  />
                </div>
              </div>
            </div>
            <div className="tags">
              <Tag setFieldValue={setFieldValue} formik={formik} />
            </div>
            {(formik.errors.title || formik.errors.tag) && formik.dirty && (
              <div className="errors">
                <p className="errorMessage">{formik.errors.title}</p>
                <p className="errorMessage">{formik.errors.tag}</p>
              </div>
            )}
            <div className="form-controls">
              <button className="button-reset-task" type="reset">
                Reset
              </button>
              <button className="button-save-task" type="submit">
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
