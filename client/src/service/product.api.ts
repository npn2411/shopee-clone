import { paths } from 'src/constants/paths'
import { ProductsAndPagination } from 'src/types/product.type'
import { QueryProductConfig } from 'src/types/queryProductConfig.type'
import { SuccessResponse } from 'src/types/respone.type'
import { http } from 'src/utils'

export const getProducts = (params: QueryProductConfig) =>
  http.get<SuccessResponse<ProductsAndPagination>>(paths.products, { params })
