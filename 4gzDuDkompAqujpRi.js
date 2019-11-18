/**
 * Add up the Numbers from a Single Number.
 * https://edabit.com/challenge/4gzDuDkompAqujpRi #easy
 * @param number
 * @returns {number}
 */
function addUp(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}
