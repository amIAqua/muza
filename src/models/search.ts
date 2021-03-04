import { createStore, createEvent, combine, createEffect } from 'effector'
import { searchAllByQuery } from '../api/requests/searchAllByQuery'
import { serializeData } from './serializers/serializeSearchData'
import { ISeachResults } from './types/search-results.types'

// Creating events
export const changeInputQuery = createEvent<string>()

// Creating effects
const getDataBySearchQuery = createEffect(async (query: string) => {
  const searchResults = await searchAllByQuery(query)

  console.log(searchResults)

  // Serialize data to appropriate format
  const outputData = serializeData(searchResults)

  console.log(outputData)

  return outputData
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

const $searchResults = createStore<any>({}).on(
  getDataBySearchQuery.doneData,
  (state, results) => results
)

// Return one combined store
export const searchStore = combine({
  inputQuery: $inputQuery,
  searchResults: $searchResults,
})
