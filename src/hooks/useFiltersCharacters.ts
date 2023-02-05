// import { makeVar } from '@apollo/client'

// import { FiltersCharactersTypes } from 'src/types'

// interface CharactersQVarsTypes {
//   page: number
//   filter: FiltersCharactersTypes
// }

// const defaultFiltersCharacter: CharactersQVarsTypes = {
//   page: 1,
//   filter: {
//     name: '',
//     status: '',
//     species: '',
//     gender: '',
//   },
// }

// const isApplyValue = false

// export const filtersCharacterQVars = makeVar<CharactersQVarsTypes>(
//   defaultFiltersCharacter,
// )

// export const isApplyQVars = makeVar<boolean>(isApplyValue)

// export const useFiltersCharactersQVars = () => {
//   const setFilters = (obj: Record<string, string>) => {
//     const charactersqvars = filtersCharacterQVars()

//     const updatedCharactersVars: CharactersQVarsTypes = {
//       ...charactersqvars,
//       filter: {
//         ...charactersqvars.filter,
//         obj,
//       },
//     }

//     filtersCharacterQVars(updatedCharactersVars)
//   }

//   const setApply = (isApply: boolean) => {
//     const updatedIsApplyVars = isApply
//     isApplyQVars(updatedIsApplyVars)
//   }

//   return {
//     setFilters,
//     setApply,
//     filtersCharacterQVars,
//     isApplyQVars,
//   }
// }
export {}
