import PropTypes from 'prop-types';
export const Section = ({ title }) => {
  return <section> {title && <h2 className="title">{title}</h2>}</section>;
};

Section.propTypes = { title: PropTypes.string };
