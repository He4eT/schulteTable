export let now = () =>
  (new Date())

export let dateToSeconds = date =>
  Math.trunc(date / 1000)

let padZeros = x =>
  x.toString().padStart(2, '0')

export let toMMSS = seconds => {
  let mm = Math.floor((seconds / 60))
  let ss = seconds % 60

  ;[mm, ss] = [mm, ss].map(padZeros)

  let mmss = `${mm}:${ss}`
  return mmss
}

export let getList = lenght =>
  ([...Array(lenght).keys()])

export let shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
