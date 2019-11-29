//import { number } from "prop-types";

export const incrementCounter = (delta: number): IncrementAction => ({ type: "INCREMENT_COUNTER", delta });

export const decrementCounter = (delta: number): DecrementAction => ({ type: "DECREMENT_COUNTER", delta });

export const resetCounter = (delta: number): ResetAction => ({ type: "RESET_COUNTER", delta });

type ActionType = IncrementAction | DecrementAction | ResetAction;

export default ActionType;
export interface Action {
  readonly type: string;
}

export interface IncrementAction extends Action {
  delta: number;
}

export interface DecrementAction extends Action {
  delta: number;
}

export interface ResetAction extends Action {
  delta: number;
}
