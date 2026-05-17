import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'profile.categories.index': { paramsTuple?: []; params?: {} }
    'profile.categories.store': { paramsTuple?: []; params?: {} }
    'profile.categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.categories.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.index': { paramsTuple?: []; params?: {} }
    'profile.products.store': { paramsTuple?: []; params?: {} }
    'profile.products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.categories.index': { paramsTuple?: []; params?: {} }
    'profile.categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.index': { paramsTuple?: []; params?: {} }
    'profile.products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.categories.index': { paramsTuple?: []; params?: {} }
    'profile.categories.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.index': { paramsTuple?: []; params?: {} }
    'profile.products.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'profile.categories.store': { paramsTuple?: []; params?: {} }
    'profile.products.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'profile.categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'profile.categories.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'profile.categories.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.products.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}