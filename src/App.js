import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";
import style from "./App.module.css";

// ===========hooks====================

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = (option) => {
    const increase = (prevStat) => prevStat + 1;
    switch (option) {
      case "good":
        setGood(increase);
        break;
      case "neutral":
        setNeutral(increase);
        break;
      case "bad":
        setBad(increase);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = total ? (good * 100) / total : 0;

    return Math.round(result);
  };

  const total = countTotalFeedback();
  const result = countPositiveFeedbackPercentage();

  return (
    <div className={style.conteiner}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onFeedback={handleChange}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            result={result}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
// ===========hooks the end============
