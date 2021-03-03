import { createStore, createEvent, combine, createEffect } from 'effector'
import { q } from '../api/spotifyResponse'

// Creating events
export const changeInputQuery = createEvent<string>()

// Creating effects
const getDataBySearchQuery = createEffect(async (query: string) => {
  const result = await q(query)
  //return result
})

// Creating multiple stores
const $inputQuery = createStore<string>('').on(
  changeInputQuery,
  (state, query) => {
    if (!query) {
      return
    }
    getDataBySearchQuery(query)
  }
)

// Return one combined store
export const searchStore = combine({
  inputQuery: $inputQuery,
})
