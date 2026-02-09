import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '~/services/api'

export const fetchDataForgotProtocol = createAsyncThunk(
  'schedule/fetchDataForgotProtocol',
  async params => {
    const response = await api.post(`/forgot-protocol`, params)

    const payload = response.data

    return [payload]
  }
)

const scheduleForgotProtocol = createSlice({
  name: 'scheduleForgotProtocol',
  initialState: {
    list: [],
    request_status: null,
    response_message: null,
    response_error: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDataForgotProtocol.fulfilled, (state, action) => {
      const [payload] = action.payload

      state.list = payload.list
      state.request_status = 'succeeded'

      if (payload?.error == true) {
        state.response_message = payload?.message
        state.response_error = true
      } else {
        state.response_message = null
        state.response_error = false
      }
    })

    builder.addCase(fetchDataForgotProtocol.pending, (state, action) => {
      state.request_status = 'loading'

      state.response_message = null
      state.response_error = false
    })

    builder.addCase(fetchDataForgotProtocol.rejected, (state, action) => {
      state.request_status = 'failed'
      state.response_message = 'Tente novamente mais tarde'
      state.response_error = true
    })
  }
})

export const store = configureStore({
  reducer: {
    scheduleForgotProtocol: scheduleForgotProtocol.reducer
  }
})

export const {} = scheduleForgotProtocol.actions
