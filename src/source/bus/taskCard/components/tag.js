import React from 'react';
import cx from 'classnames';

import { tagsArray } from '../../sharedElements/tagsArray';

export const Tag = (props) => {

    const tagsJsx = tagsArray.map((item, i) => {
      const classTag = cx({
        "selected": item.name === props.formik.values.tag,
      });

        return (
          <span
            name="tag"
            key={i}
            className={`tag ${item.className} ${classTag}`}
            id={item.name}
            onClick={(row) => {
              props.setFieldValue("tag", row.target.id);
            }}
          >
            {item.name}
          </span>
        );
    })
    
    return (
        <>
            {tagsJsx}
        </>
    )
};