import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import vine from '@vinejs/vine'

const productSchema = vine.compile(
  vine.object({
    name       : vine.string().trim().minLength(2),
    description: vine.string().trim().optional(),
    price      : vine.number().positive(),
    stock      : vine.number().min(0).optional(),
    categoryId : vine.number().positive(),
  })
)

export default class ProductsController {
  /** Retorna lista paginada de productos, con filtro opcional por categoría */
  async index({ request, response }: HttpContext) {
    const { page = 1, limit = 10, categoryId } = request.qs()

    const query = Product.query().preload('category')

    if (categoryId) {
      query.where('category_id', categoryId)
    }

    const products = await query.paginate(page, limit)
    return response.ok(products)
  }

  /** Crea un nuevo producto */
  async store({ request, response }: HttpContext) {
    const { price, ...rest } = await request.validateUsing(productSchema)
    const product = await Product.create({ ...rest, price: String(price) })

    await product.load('category')

    return response.created(product)
  }

  /** Retorna un producto por id con su categoría */
  async show({ params, response }: HttpContext) {
    const product = await Product.query().where('id', params.id).preload('category').firstOrFail()

    return response.ok(product)
  }

  /** Actualiza un producto por id */
  async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const { price, ...rest } = await request.validateUsing(productSchema)

    product.merge({ ...rest, price: String(price) })
    
    await product.save()
    await product.load('category')
    
    return response.ok(product)
  }

  /** Elimina un producto por id */
  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    
    return response.noContent()
  }
}
