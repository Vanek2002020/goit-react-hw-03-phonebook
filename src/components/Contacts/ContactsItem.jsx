import React from 'react';
import s from 'components/Contacts/ContactsItem.module.css';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number, deleteFunc }) => (
  <li key={id} className={s.ContactsItem}>
    <span className={s.ContactsItem__text}>
      {name}: {number}
    </span>
    <button
      type="button"
      className={s.ContactsItem__button}
      onClick={() => deleteFunc(id)}
    >
      Delete
    </button>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  deleteFunc: PropTypes.func.isRequired,
};

export { ContactsItem };
