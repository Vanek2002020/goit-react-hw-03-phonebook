import React from 'react';
import s from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ text, className, children }) => (
  <section className={(s.Section, s[className])}>
    <h2 className={s.Section__heading}>{text}</h2>
    {children}
  </section>
);

Section.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

export { Section };
