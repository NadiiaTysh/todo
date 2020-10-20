import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import { tagsArray } from '../sharedElements/tagsArray';

export const TaskList = (props) => {
    const { data, isFetching, error, receivedData, handleSelectItem } = props;

  if (error && error.status === 404) {
      return <p>Not Found</p>;
  };
  if (error && error.status !== 404) {
      return <p>Something went wrong</p>;
  };
  const spinnerJsx = isFetching && (
      <div className="forecast">
          <p className='message'>Loading data from api</p>
      </div>
  );
  const listJsx = receivedData() && data.map((item) => {
    
    const {title, deadline, tag, hash, completed} = item;
    const [tagTypeArray] = tagsArray.filter(element => element.name === tag);;

    const dayFormatted = moment(deadline).format('MMMM D, yyyy');
    
    const taskCompleted = cx({
      "task": true,
      "completed": completed,
  });

    return (
      <div className={taskCompleted} key={hash} onClick={() => handleSelectItem(hash)}>
        <span className="title">{title}</span>
        <div className="meta">
          <span className="deadline">{dayFormatted}</span>
          <span className={`tag ${tagTypeArray.className}`}>{tag}</span>
        </div>
      </div>
    )
  });

  if (!receivedData()) {
    return (
      <div className="list empty"></div>
    )
  } else {
    return (
      <div className="list">
        <div className="tasks">
          {spinnerJsx}
          {listJsx}
        </div>
      </div>
    )
  }
}