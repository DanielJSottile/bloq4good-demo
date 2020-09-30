import React from 'react';
import { Fragment } from 'react';
import './Form.scss';

const Form = (props: any): JSX.Element => {
  return (
    <Fragment>
      <h3>Have Any Questions? We'd be happy to talk with you!</h3>
      <form className="form" id="form">
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <textarea
            name="textarea"
            placeholder="Type Your Message Here"
            form="form"
            id="textarea"
          />
        </div>
        <div>
          <input className="submit" type="submit" value="Send!" />
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
