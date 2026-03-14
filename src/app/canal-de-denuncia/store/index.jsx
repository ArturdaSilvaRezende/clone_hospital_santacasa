import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '~/services/api'


export const fetchCreateReport = createAsyncThunk('schedule/fetchCreateReport', async params => {
    const response = await api.post(`/report-channel`, params.content, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    
    const payload = response.data
  
    return [payload]
})

const initialState = {
    current_step: 'first',
    report_type: 'anonymous',
    second_step_data: {},
    third_step_data: {},
    create_report_status: 'idle', 
    error: false,
    message: '',
    success_registred: false
}

const report = createSlice({
    name: 'report',
    initialState, 
    reducers: {
        changeReportStep: (state, action) => {
            state.current_step = action.payload
        },
        changeReportType: (state, action) => {
            state.report_type = action.payload
        },
        saveSecondStepData: (state, action) => {
            state.second_step_data = action.payload
        },
        saveThirdStepData: (state, action) => {
            state.third_step_data = action.payload
        }, 
        // NOVA ACTION PARA RESETAR TUDO
        resetReportStore: (state) => {
            return initialState
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCreateReport.fulfilled, (state, action) => {
            const [result] = action.payload

            if(result.success) {
                state.current_step = 'final'
                state.success_registred = true
            } else {
                state.error = true
                state.message = result?.message
                state.success_registred = false
            }
            
            state.create_report_status = "succeeded"
        })

        builder.addCase(fetchCreateReport.rejected, (state, action) => {
            state.create_report_status = "failed"
            state.error = true
            state.message = 'Tente novamente mais tarde!'
        })

        builder.addCase(fetchCreateReport.pending, (state, action) => {
            state.create_report_status = "loading"
        })
    }
})

export const store = configureStore({
    reducer: {
        report: report.reducer
    }
})

export const { 
    changeReportStep, 
    changeReportType, 
    saveSecondStepData, 
    saveThirdStepData,
    resetReportStore 
} = report.actions