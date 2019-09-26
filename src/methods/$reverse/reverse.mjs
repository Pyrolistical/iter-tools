/**
 * @generated-from ./$reverse.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { toArray } from '../$to-array/to-array';
export function* reverse(iterable) {
  let array = iterable;

  if (false || !Array.isArray(array)) {
    array = toArray(array);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}
export default iterableCurry(reverse);
