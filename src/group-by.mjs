import ensureIterable from './internal/ensure-iterable'

function * groupBy (key, iterable) {
  key = key || function (key) { return key }
  iterable = ensureIterable(iterable)[Symbol.iterator]()

  let currentItem
  let currentKey, previousKey

  function * group () {
    while (true) {
      yield currentItem.value
      currentItem = iterable.next()
      if (currentItem.done) return
      currentKey = key(currentItem.value)
      if (previousKey !== currentKey) {
        return
      }
    }
  };

  currentItem = iterable.next()

  while (true) {
    if (currentItem.done) return
    currentKey = key(currentItem.value)
    if (previousKey !== currentKey) {
      previousKey = currentKey
      yield [currentKey, group()]
    } else {
      currentItem = iterable.next()
    }
  }
}

export default function curriedGroupBy (key, iterable) {
  if (arguments.length === 1) {
    return iterable => groupBy(key, iterable)
  }
  return groupBy(key, iterable)
}
