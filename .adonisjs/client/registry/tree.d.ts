/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
    categories: {
      index: typeof routes['profile.categories.index']
      store: typeof routes['profile.categories.store']
      show: typeof routes['profile.categories.show']
      update: typeof routes['profile.categories.update']
      destroy: typeof routes['profile.categories.destroy']
    }
    products: {
      index: typeof routes['profile.products.index']
      store: typeof routes['profile.products.store']
      show: typeof routes['profile.products.show']
      update: typeof routes['profile.products.update']
      destroy: typeof routes['profile.products.destroy']
    }
  }
}
