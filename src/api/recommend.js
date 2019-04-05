// import makeUrl from 'common/js/makeUrl'
import {commonParams, ERR_OK} from 'api/config'

export default function getRecommendData (callback) {
  const url = 'https://shc.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    format: 'json'
  })
  wx.request({
    url,
    data,
    success (res) {
      if (res.data.code === ERR_OK) {
        callback(res.data.data.slider)
      }
    }
  })
}
