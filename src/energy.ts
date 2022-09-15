/**
 * The program calcualtes the amount of logs
 *   that can fit into a truck.
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-11-25
 */

import promptSync from 'prompt-sync'

try {
  const prompt = promptSync()
  const massString = prompt('Enter the mass (in kg): ')
  const massNumber = parseInt(massString)
  if (isNaN(+massNumber)) {
    throw new Error()
  }
  const energy = massNumber * (2.99 * 10 ** 8) ** 2
  console.log(
    `The amount of energy released with a mass of ${massNumber} is ${energy}`
  )
} catch (e) {
  console.log('\nThat is not a number.')
}

console.log('\nDone.')
