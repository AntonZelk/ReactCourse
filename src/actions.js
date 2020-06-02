export const inc = (num) => ({ type: "INC", payload: num});
export const dec = (num) => ({ type: "DEC", payload: num});
export const rnd = (rndNum) => ({ type: "RND", payload: rndNum});