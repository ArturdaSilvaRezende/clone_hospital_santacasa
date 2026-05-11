import { create } from 'zustand'
import { api } from '~/services/api'

export const useAppointmentStore = create(set => ({
 
  content: {},
  request_status: 'idle',
  response_message: null,
  response_error: false,

  fetchDataAppointmentOrder: async protocolo => {
    set({
      request_status: 'loading',
      response_message: null,
      response_error: false
    })

    try {
      const response = await api.get(`/pre-schedule/${protocolo}`)
      const payload = response?.data?.info || response?.data || {}

      if (payload.error === true) {
        set({
          content: {},
          request_status: 'failed',
          response_message: payload.message || 'Erro ao buscar dados.',
          response_error: true
        })
      } else {
        set({
          content: payload,
          request_status: 'succeeded',
          response_message: null,
          response_error: false
        })
      }
    } catch (error) {
      set({
        content: {},
        request_status: 'failed',
        response_message:
          error.response?.data?.message || 'Tente novamente mais tarde',
        response_error: true
      })
    }
  },

  recoverProtocols: async formData => {
    set({ request_status: 'loading' })
    try {
      const response = await api.post('/pre-schedule/recover', formData)
      set({
        request_status: 'succeeded',
        response_message: response.data.message
      })
      return { success: true, message: response.data.message }
    } catch (error) {
      const msg = error.response?.data?.message || 'Erro na recuperação'
      set({
        request_status: 'failed',
        response_message: msg,
        response_error: true
      })
      return { success: false, message: msg }
    }
  },

  resetStore: () =>
    set({
      content: {},
      request_status: 'idle',
      response_message: null,
      response_error: false
    })
}))
