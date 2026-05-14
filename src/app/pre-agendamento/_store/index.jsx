import { create } from 'zustand'
import { api } from '~/services/api'

export const useScheduleStore = create((set, get) => ({

  current_step: 'first',
  return_type: 'return_consult',
  speciality_list: [],
  second_step_data: {},
  third_step_data: {},
  fourth_step_data: {},
  create_schedule_status: 'idle',
  protocolo: '',
  error: false,
  message: '',
  success_registred: false,

  changeScheduleStep: step => set({ current_step: step }),

  changeReturnType: type => set({ return_type: type }),

  saveSecondStepData: data => set({ second_step_data: data }),

  saveThirdStepData: data => set({ third_step_data: data }),

  saveFourthStepData: data => set({ fourth_step_data: data }),

  fetchDataMedicalSpecialities: async () => {
    try {
      const response = await api.get('/sub-specialties?limit=100')
      set({ speciality_list: response.data || [] })
    } catch (err) {
      console.error('Erro ao buscar especialidades:', err)
      set({ speciality_list: [] })
    }
  },

  fetchCreateSchedule: async params => {
    set({ create_schedule_status: 'loading', error: false })

    try {
      const response = await api.post('/pre-schedule', params.content, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      const result = response.data

      if (result.protocolo || result.success) {
        set({
          current_step: 'final',
          protocolo: result.protocolo,
          success_registred: true,
          error: false,
          create_schedule_status: 'succeeded'
        })
      } else {
        set({
          error: true,
          message: result.message || 'Erro ao processar agendamento',
          success_registred: false,
          create_schedule_status: 'succeeded'
        })
      }
    } catch (err) {
      set({
        create_schedule_status: 'failed',
        error: true,
        message: 'Tente novamente mais tarde!'
      })
    }
  }
}))
