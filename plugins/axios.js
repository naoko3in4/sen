import axios from 'axios'
axios.defaults.headers.common['X-API-KEY'] = process.env.MICROCMS_GET_APIKEY
axios.defaults.headers.common['X-WRITE-API-KEY'] =
  process.env.MICROCMS_POST_APIKEY
axios.defaults.headers.common['Content-Type'] = 'application/json'
export default axios
