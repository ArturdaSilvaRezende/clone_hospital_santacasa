import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '~/services/api'

export const fetchDataMedicalSpecialities = createAsyncThunk(
  'schedule/fetchDataMedicalSpecialities',
  async params => {
    const response = await api.get(`/sus-specialty?limit=100`)

    const payload = response.data?.list || []

    return [payload]
  }
)

export const fetchCreateSchedule = createAsyncThunk(
  'schedule/fetchCreateSchedule',
  async params => {
    const response = await api.post(`/pre-schedule`, params.content, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    const payload = response.data

    return [payload]
  }
)

const schedule = createSlice({
  name: 'schedule',
  initialState: {
    current_step: 'first',
    return_type: 'return_consult',
    speciality_list: [],
    second_step_data: {},
    third_step_data: {},
    fourth_step_data: {},
    create_schedule_status: false,
    protocolo: '',
    error: false,
    message: '',
    success_registred: false
  },
  reducers: {
    changeScheduleStep: (state, action) => {
      state.current_step = action.payload
    },
    changeReturnType: (state, action) => {
      state.return_type = action.payload
    },
    saveSecondStepData: (state, action) => {
      state.second_step_data = action.payload
    },
    saveThirdStepData: (state, action) => {
      state.third_step_data = action.payload
    },
    saveFouthStepData: (state, action) => {
      state.fourth_step_data = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchDataMedicalSpecialities.fulfilled, (state, action) => {
      const [payload] = action.payload

      state.speciality_list = payload
    })

    builder.addCase(fetchCreateSchedule.fulfilled, (state, action) => {
      const [result] = action.payload

      if (result.success) {
        state.current_step = 'final'
        state.protocolo = result?.protocolo
        state.success_registred = true
      } else {
        state.error = true
        state.message = result?.message
        state.success_registred = false
      }

      state.create_schedule_status = 'succeeded'
    })

    builder.addCase(fetchCreateSchedule.rejected, (state, action) => {
      state.create_schedule_status = 'failed'
      state.error = true
      state.message = 'Tente novamente mais tarde!'
    })

    builder.addCase(fetchCreateSchedule.pending, (state, action) => {
      state.create_schedule_status = 'loading'
    })
  }
})

export const store = configureStore({
  reducer: {
    schedule: schedule.reducer
  }
})

export const {
  changeScheduleStep,
  changeReturnType,
  saveFouthStepData,
  saveSecondStepData,
  saveThirdStepData
} = schedule.actions
