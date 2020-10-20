import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import cx from 'classnames';

import { taskActions } from "../actions";
import { listActions } from "../../taskList/actions";
import { globalizedActions } from "../../globalized/actions";

import { initialValues } from "./formElements/initialValues";
import { validationSchema } from './formElements/validationSchema';

export const useTaskFetch = () => {
  const dispatch = useDispatch();
  
  const {
    isShownSelectedCard,
    filteredData,
  } = useSelector((state) => state.globalized);
  
  const date = filteredData && new Date(Date.parse(filteredData.deadline));

  const [startDate, setStartDate] = useState(
    filteredData
      ? date
      : new Date(new Date().setHours(23, 59, 59, 999))
  );
  const [completedTask, setCompleted] = useState(filteredData ? filteredData.completed : false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: filteredData ? filteredData : initialValues,
    
    onSubmit: values => {
      if (isShownSelectedCard) {
        const formattedValues = {
          "completed": values.completed,
          "title": values.title,
          "description": values.description,
          "deadline": values.deadline,
          "tag": values.tag,
          "checklist": [
            {
              "title": values.checklist[0].title,
              "completed": values.checklist[0].completed,
              "hash": values.checklist[0].hash,
            }
          ]
        }
        dispatch(taskActions.editTaskFetch(formattedValues, values.hash));
      } else {
        dispatch(taskActions.addTaskFetch(values));
      };
      setTimeout(() => {
        dispatch(listActions.getListFetch());
      }, 300);
      dispatch(globalizedActions.hideTask());
    },

    validationSchema: validationSchema,
  });

  const handleCompleted = () => {
    completedTask === true ? setCompleted(false) : setCompleted(true);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    dispatch(taskActions.removeTaskFetch(formik.values.hash));
    dispatch(listActions.getListFetch());
    dispatch(globalizedActions.hideTask());
  };

  useEffect(() => filteredData ? setStartDate(new Date(Date.parse(filteredData.deadline))) : undefined, [filteredData]);
  useEffect(() => filteredData ? setCompleted(filteredData.completed) : undefined, [filteredData]);

  formik.values.deadline = startDate.toISOString();
  formik.values.completed = completedTask;

  const buttonCompleted = cx({
    "button-complete-task": true,
    "completed": completedTask,
  });

  const {setFieldValue} = formik;

  return {
      formik,
      startDate,
      handleCompleted,
      filteredData,
      isShownSelectedCard,
      handleStartDate,
      buttonCompleted,
      setFieldValue,
      handleDeleteTask,
  };
};