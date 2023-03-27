import DocsContext from './index'
import { useContext } from 'react'

export function useDocuments(): DocContextType['state']['documents'] {
  const {
    state: { documents }
  } = useContext(DocsContext)

  return documents
}

export function useAddDocument(): DocContextType['actions']['addDocument'] {
    const {
      actions: { addDocument }
    } = useContext(DocsContext)
  
    return addDocument
}
  