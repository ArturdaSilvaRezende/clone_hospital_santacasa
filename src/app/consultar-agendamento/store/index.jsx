import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '~/services/api'

export const fetchDataAppointmentOrder = createAsyncThunk(
  'schedule/fetchDataAppointmentOrder',
  async params => {
    const response = await api.get(
      `/appointment-scheduling/${params?.protocolo}`
    )
    const payload = response?.data?.info || response?.data || {}
    return [payload]
  }
)

const appointmmentOrder = createSlice({
  name: 'appointmmentOrder',
  initialState: {
    content: {},
    request_status: null,
    response_message: null,
    response_error: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDataAppointmentOrder.fulfilled, (state, action) => {
      const [payload] = action.payload

      state.content = payload
      state.request_status = 'succeeded'

      if (payload?.error == true) {
        state.response_message = payload?.message
        state.response_error = true
      } else {
        state.response_message = null
        state.response_error = false
      }
    })

    builder.addCase(fetchDataAppointmentOrder.pending, (state, action) => {
      state.request_status = 'loading'

      state.response_message = null
      state.response_error = false
    })

    builder.addCase(fetchDataAppointmentOrder.rejected, (state, action) => {
      state.request_status = 'failed'
      state.response_message = 'Tente novamente mais tarde'
      state.response_error = true
    })
  }
})

export const store = configureStore({
  reducer: {
    appointmmentOrder: appointmmentOrder.reducer
  }
})

export const {} = appointmmentOrder.actions
