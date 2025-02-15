export enum PickOptions {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
}

export const PRECEDENCE = {
  [PickOptions.rock]: PickOptions.paper,
  [PickOptions.paper]: PickOptions.scissors,
  [PickOptions.scissors]: PickOptions.rock,
};
