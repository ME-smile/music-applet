function makeUrl (url,data) {
  let params = ''
  for (let [key, value] in data.entries) {
    params += `&${key}=${encodeURIComponent(value)}`
  }
  url += (url.indexOf('?') < 0 ? '?' : '&') + queryString(data)
  return url // 去除第一个&
}
