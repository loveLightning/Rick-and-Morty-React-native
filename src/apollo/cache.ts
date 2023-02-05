import { InMemoryCache } from '@apollo/client'

import { CharactersTypes } from 'src/types'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],

          merge(existing: CharactersTypes, incoming: CharactersTypes) {
            if (!existing) {
              return incoming
            }

            if (existing.info.next === incoming.info.next) {
              return existing
            }

            return {
              info: { ...incoming.info },
              results: [...existing.results, ...incoming.results],
            }
          },
        },
        locations: {
          keyArgs: ['filter'],

          merge(existing, incoming) {
            if (!existing) {
              return incoming
            }

            if (existing.info.next === incoming.info.next) {
              return existing
            }

            return {
              info: { ...incoming.info },
              results: [...existing.results, ...incoming.results],
            }
          },
        },
        episodes: {
          keyArgs: ['filter'],

          merge(existing, incoming) {
            if (!existing) {
              return incoming
            }

            if (existing.info.next === incoming.info.next) {
              return existing
            }

            return {
              info: { ...incoming.info },
              results: [...existing.results, ...incoming.results],
            }
          },
        },
      },
    },
  },
})
