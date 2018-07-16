import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVED_BANNERS } from '../constants'
import { API_LOCAL } from '../env'

export const fetchBanners = () => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_FETCH_BANNERS'))
    try {
      const response = await fetch(`${API_LOCAL}:3000/banners`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log('response: ', data)
      await dispatch(receivedBanners(data))
      await dispatch(setSuccess(true, 'SUCCESS_FETCH_BANNERS'))
      await dispatch(setLoading(false, 'LOADING_FETCH_BANNERS'))
    }catch(e) {
      console.log('error:', e)
      dispatch(setFailed(true, 'FAILED_FETCH_BANNERS', e))
      dispatch(setLoading(false, 'LOADING_FETCH_BANNERS'))
    }
  }
}

const receivedBanners = data => ({
  type: RECEIVED_BANNERS,
  payload: data
})