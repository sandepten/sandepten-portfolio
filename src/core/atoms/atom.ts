import { atom } from "recoil";

export const dropDownState = atom({
  key: "dropDownState",
  default: false,
});

export const successAlertState = atom({
  key: "successAlertState",
  default: false,
});

export const failAlertState = atom({
  key: "failAlertState",
  default: false,
});
