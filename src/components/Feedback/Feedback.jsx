import { Component } from 'react';
import { useState } from 'react';
import { Button, buttonProps, StyledDiv } from '../Button/Button';
import { Statistic } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from '../Section/Section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [posFeedback, setPosFeedback] = useState(0);

  const feedbackButton = e => {
    let { name } = e.target;
    name = name.toLowerCase();

    if (name === 'good') {
      setGood(prevCounter => {
        return prevCounter + 1;
      });
    } else if (name === 'neutral') {
      setNeutral(prevCounter => {
        return prevCounter + 1;
      });
    } else if (name === 'bad') {
      setBad(prevCounter => {
        return prevCounter + 1;
      });
    }

    countTotalFeedbacks();

    countPositiveFeedbacks();
  };

  const countTotalFeedbacks = () => {
    setTotal(prevCounter => {
      return good + bad + neutral;
    });
  };

  const countPositiveFeedbacks = () => {
    setPosFeedback(prevCounter => {
      if (good && total) {
        return Math.round((good / total) * 100);
      }
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <StyledDiv>
          {buttonProps.map(({ name }) => {
            return (
              <Button key={name} name={name} onClick={feedbackButton}>
                {name}
              </Button>
            );
          })}
        </StyledDiv>

        {neutral === 0 && good === 0 && bad === 0 ? (
          <Notification message=" There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            posFeedback={posFeedback}
          ></Statistic>
        )}
      </Section>
    </>
  );
};
