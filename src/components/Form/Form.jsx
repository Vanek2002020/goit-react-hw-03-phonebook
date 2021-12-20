import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import s from 'components/Form/Form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Section className="Phonebook" text="Phonebook">
        <form onSubmit={this.handleSubmit} className={s.Form}>
          <label htmlFor="input-name" className={s.Form__item}>
            Name
          </label>
          <input
            className={s.Form__input}
            id="input-name"
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label htmlFor="input-tel" className={s.Form__item}>
            Phone number
          </label>
          <input
            onChange={this.handleChange}
            className={s.Form__input}
            id="input-tel"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button type="submit" className={s.Form__button}>
            Add contact
          </button>
        </form>
      </Section>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { Form };
