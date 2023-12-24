export type Product = {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export type Pagination = {
  limit: number
  page: number
  page_size: number
}

export type ProductsAndPagination = {
  products: Product[]
  pagination: Pagination
}
