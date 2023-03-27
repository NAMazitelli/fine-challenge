import DocsContext from './index'
import { useContext } from 'react'

export function useDocuments(): DocContextType['state']['documents'] {
  const {
    state: { documents }
  } = useContext(DocsContext)

  return documents
}
export function useFilteredDocs(): DocContextType['state']['filteredDocs'] {
    const {
      state: { filteredDocs }
    } = useContext(DocsContext)
  
    return filteredDocs
  }
export function useAddDocument(): DocContextType['actions']['addDocument'] {
    const {
      actions: { addDocument }
    } = useContext(DocsContext)
  
    return addDocument
}
  

export function useSearchDocument(): DocContextType['actions']['searchDocs'] {
    const {
      actions: { searchDocs }
    } = useContext(DocsContext)
  
    return searchDocs
}
  