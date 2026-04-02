import axios from 'axios'

if (!process.env.NEXT_PUBLIC_API) {
  throw new Error('NEXT_PUBLIC_API não definida')
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API
})