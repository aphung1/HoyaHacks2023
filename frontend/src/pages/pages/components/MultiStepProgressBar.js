import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import './MultiStepProgressBar';

export const MultiStepProgressBar = (props) => {
    return (
        <ProgressBar
          percent={((props.step - 1) * 100) / 3}
          filledBackground="black"
        >
        </ProgressBar>
    )
  }