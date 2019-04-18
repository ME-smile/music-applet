import Fly from 'flyio/dist/npm/wx'
export function getSingerList () {
  const fly = new Fly()
  const url = 'http://localhost:3000/singer'
  return fly.get(url).then(res => Promise.resolve(res.data))
}
