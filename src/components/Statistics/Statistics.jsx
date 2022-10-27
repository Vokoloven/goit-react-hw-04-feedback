import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitleH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Statistic = ({ good, neutral, bad, total, posFeedback }) => {
  return (
    <>
      <StyledTitleH2>Statistic</StyledTitleH2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedbacks: {posFeedback}%</p>
    </>
  );
};

Statistic.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  }),
};
