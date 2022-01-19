import * as production from "./action-type";

export const clearSelected = path => {
  return {
    type: production.CLEARSELECTED,
    path,
  }
}