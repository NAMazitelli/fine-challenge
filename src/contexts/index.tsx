import { createContext, FC, useState, PropsWithChildren, ReactNode } from 'react';

const DocsContext = createContext({} as DocContextType)

const DocsProvider: FC<PropsWithChildren> = (props) => {
    const [ documents, setDocuments ] = useState<DocType[]>([]);
    
    const state: DocContextType['state'] = {
        documents
    }
    
    const removeDocument = (id: string) => {
        const filteredDocuments = documents.filter((doc: DocType) => { doc.id !== id})
        setDocuments(filteredDocuments);
    }

    const editDocument = (id: string, doc: DocType) => {
        const docToEditIndex: number = documents.findIndex((doc: DocType) => {doc.id === id})
        const newDocuments = [...documents]
        newDocuments[docToEditIndex] = doc;
        setDocuments(newDocuments)
    }

    const addDocument = (doc: DocType) => {
        setDocuments([...documents, doc])
    }

    const actions = {
        addDocument,
        removeDocument,
        editDocument
    }

    return (
        <DocsContext.Provider value={{ state, actions }}>
          {props.children}
        </DocsContext.Provider>
    )
}

export { DocsContext as default, DocsProvider as Provider}
