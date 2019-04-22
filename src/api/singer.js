import Fly from 'flyio/dist/npm/wx'
export function getSingerList () {
  const url = 'http://localhost:3000/singer'
  return new Fly().get(url).then(res => Promise.resolve(res.data))
}
export function getSingerDetail (id) {
  let url = `http://localhost:3000/singer/detail/${id}`
  return new Fly().get(url).then(res => Promise.resolve(res.data))
}
