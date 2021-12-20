import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactsItem } from './ContactsItem';
import s from 'components/Contacts/Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => (
  <Section className={s.Contacts} text="Contacts">
    <ul className={s.Contacts__list}>
      {contacts.length === 0 ? (
        <h3 className={s.Contacts__message}>Nothing is here</h3>
      ) : (
        contacts.map(({ name, id, number }) => (
          <ContactsItem
            deleteFunc={() => onDeleteContact(id)}
            name={name}
            key={id}
            number={number}
          />
        ))
      )}
    </ul>
  </Section>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};
export { Contacts };
