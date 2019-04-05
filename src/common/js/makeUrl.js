export default function makeUrl (url, data) {
  let params = ''
  for (let [key, value] in data.entries) {
    params += `&${key}=${encodeURIComponent(value)}`
  }
  url += (url.indexOf('?') < 0 ? '?' : '&') + params.substring(1)
  return url // 去除第一个&
}
