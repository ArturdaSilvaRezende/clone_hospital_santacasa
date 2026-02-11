import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '~/services/api'

export const fetchDataDonateProject = createAsyncThunk(
  'schedule/fetchDataDonateProject',
  async params => {
    const response = await api.get(`/donate-projects`)

    const payload = response.data?.list || []

    return [payload]
  }
)

function countTotalPrice(list) {
  if (list.length <= 0) return 0
  return list?.reduce((acc, curr) => {
    return acc + curr.preco * curr.quantity
  }, 0)
}

const donate = createSlice({
  name: 'donate',
  initialState: {
    content: {},
    items: [],
    method_paymennt: 'pix',
    project_list: [],
    cart_items: [],
    cart_total_price: 0,
    value_selected: {},
    payment_info: {}
  },
  reducers: {
    addPaymentInfo: (state, action) => {
      state.payment_info = action.payload

      localStorage.setItem(
        '@donate_payment_info',
        JSON.stringify(action.payload)
      )
    },
    loadPaymentInfo: (state, action) => {
      const info = localStorage.getItem('@donate_payment_info')
      const infoObj = info ? JSON.parse(info) : {}

      state.payment_info = infoObj
    },
    changeMethodPayment: (state, action) => {
      state.method_paymennt = action.payload
    },
    addValueSelected: (state, action) => {
      state.value_selected = action.payload

      localStorage.setItem(
        '@donate_value_selected',
        JSON.stringify(action.payload)
      )
    },
    removeValueSelected: (state, action) => {
      state.value_selected = {}
      localStorage.removeItem('@donate_value_selected')
    },
    loadCartItems: (state, action) => {
      const list = localStorage.getItem('@donate_cart')
      const donateCartList = list ? JSON.parse(list) : []

      state.cart_items = donateCartList
      state.cart_total_price = countTotalPrice(donateCartList)

      const valueSelected = localStorage.getItem('@donate_value_selected')
      const donateValueSelected = valueSelected ? JSON.parse(valueSelected) : {}
      state.value_selected = donateValueSelected
    },
    addCartItems: (state, action) => {
      const list = localStorage.getItem('@donate_cart')
      const donateCartList = list ? JSON.parse(list) : []

      const donationItemAlreadyExists = donateCartList.find(
        item => item.reference_id == action.payload.reference_id
      )

      if (donationItemAlreadyExists) {
        donateCartList.map(item => {
          if (item.reference_id == action.payload.reference_id) {
            item.quantity = item.quantity + 1
          } else {
            return item
          }
        })
      } else {
        donateCartList.push(action.payload)
      }

      localStorage.setItem('@donate_cart', JSON.stringify(donateCartList))

      state.cart_items = donateCartList
      state.cart_total_price = countTotalPrice(donateCartList)
    },
    removeCartItem: (state, action) => {
      const list = localStorage.getItem('@donate_cart')
      const donateCartList = list ? JSON.parse(list) : []
      let newDonateCartList = []

      const donateId = action.payload

      const donationItemAlreadyExists = donateCartList.find(
        item => item.reference_id == donateId
      )

      if (donationItemAlreadyExists) {
        if (donationItemAlreadyExists.quantity <= 1) {
          newDonateCartList = donateCartList.filter(
            item => item.reference_id !== donateId
          )
        } else {
          newDonateCartList = donateCartList.map(item => {
            if (item.reference_id == donateId) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            } else {
              return item
            }
          })
        }

        localStorage.setItem('@donate_cart', JSON.stringify(newDonateCartList))

        state.cart_items = newDonateCartList
        state.cart_total_price = countTotalPrice(newDonateCartList)
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchDataDonateProject.fulfilled, (state, action) => {
      const [payload] = action.payload

      state.project_list = payload
    })

    // builder.addCase(fetchCreateSchedule.fulfilled, (state, action) => {
    //     const [success] = action.payload

    //     if(success) state.current_step = 'final'

    //     state.create_schedule_status = "succeeded"
    // })

    // builder.addCase(fetchCreateSchedule.rejected, (state, action) => {
    //     state.create_schedule_status = "failed"
    //     // state.error = action.error.message
    // })

    // builder.addCase(fetchCreateSchedule.pending, (state, action) => {
    //     state.create_schedule_status = "loading"
    // })
  }
})

export const store = configureStore({
  reducer: {
    donate: donate.reducer
  }
})

export const {
  addCartItems,
  loadCartItems,
  addValueSelected,
  removeCartItem,
  removeValueSelected,
  changeMethodPayment,
  addPaymentInfo,
  loadPaymentInfo
} = donate.actions
