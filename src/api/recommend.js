import Fly from 'flyio/dist/npm/wx'
export function getRecommendData () {
  const fly = new Fly()
  const url = 'http://localhost:3000/'
  return fly.get(url).then(res => Promise.resolve(res.data))
}
