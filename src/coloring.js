export let fnBlackInc = (size, last) =>
  x => x <= last
    ? {label: x + 1, color: 'black'}
    : {label: x - last, color: 'red'}

export let fnRedDec = (size, last) =>
  x => x <= last
    ? {label: size - last - x, color: 'red'}
    : {label: x - last, color: 'black'}

export let fnBlackIncRedDec = (size, last) =>
  x => {
    let half = parseInt(size / 2)
    let odd = x % 2 === 1

    if (odd) {
      return {label: (x + 1) / 2, color: 'black'}
    } else {
      return {label: (size - half) - (x) / 2, color: 'red'}
    }
  }
