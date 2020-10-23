const validateUrl = url => /^(?:https?:\/\/)?(w{3})?\.?youtube\.com/.test(url)

const VIDEO_URL = 'http://localhost:8082/get-video-info?video_id='

function qsToJson (qs) {
  const res = {}
  const pars = qs.split('&')
  let kv, k, v
  for (const i in pars) {
    kv = pars[i].split('=')
    k = kv[0]
    v = kv[1]
    res[k] = decodeURIComponent(v)
  }
  return res
}

export default function(youtubeUrl) {
  if (!validateUrl(youtubeUrl)) {
    // eslint-disable-next-line no-throw-literal
    throw 'Please enter a valid Youtube URL'
  }
  const videoId = youtubeUrl.split('?')[1].match(/v=([^&]+)/)[1]
  return fetch(VIDEO_URL + videoId)
    .then(res => res.text())
    .then((res) => {
      const GetVideoInfo = qsToJson(res)

      // remapping urls into an array of objects
      // eslint-disable-next-line dot-notation
      let tmp = GetVideoInfo['url_encoded_fmt_stream_map']
      if (tmp) {
        tmp = tmp.split(',')
        for (const i in tmp) {
          tmp[i] = qsToJson(tmp[i])
          tmp[i].ext = tmp[i].type
            .match(/^video\/\w+(?=;)/g)[0]
            .replace(/^video\//, '')
        }
        // eslint-disable-next-line dot-notation
        GetVideoInfo['videos'] = tmp
      }
      GetVideoInfo.title = GetVideoInfo.title.replace(/\+/g, ' ')
      return GetVideoInfo
    })
}
