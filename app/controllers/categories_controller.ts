import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import vine from '@vinejs/vine'

const categorySchema = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2),
    description: vine.string().trim().optional(),
  })
)

export default class CategoriesController {
  async index({ response }: HttpContext) {
    const categories = await Category.query().preload('products')
    return response.ok(categories)
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(categorySchema)
    const category = await Category.create(data)

    return response.created(category)
  }

  async show({ params, response }: HttpContext) {
    const category = await Category.query().where('id', params.id).preload('products').firstOrFail()

    return response.ok(category)
  }

  async update({ params, request, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    const data = await request.validateUsing(categorySchema)

    category.merge(data)
    
    await category.save()
    
    return response.ok(category)
  }

  async destroy({ params, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    await category.delete()
    
    return response.noContent()
  }
}
