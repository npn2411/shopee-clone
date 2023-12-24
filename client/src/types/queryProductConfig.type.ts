import { order_by, sort_by } from '../constants/queryProductConfig'

export type QueryProductConfig = {
  page?: number
  limit?: number
  order?: keyof typeof order_by
  sort_by?: keyof typeof sort_by
  category?: string
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
  name?: string
}
