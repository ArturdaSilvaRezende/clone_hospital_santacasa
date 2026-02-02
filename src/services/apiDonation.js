import axios from 'axios'

const apiDonation = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DONATE
})

export default apiDonation
