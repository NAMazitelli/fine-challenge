import { createContext, FC, useState, PropsWithChildren, useEffect } from 'react';
const DocsContext = createContext({} as DocContextType)



const DocsProvider: FC<PropsWithChildren> = (props) => {
    const [ documents, setDocuments ] = useState<DocType[]>([]);
    const [ filteredDocs, setFilteredDocs ] = useState<DocType[]>([]);

    const [ status, setStatus ] = useState<'loading' | 'ready' | 'update'>('loading')
    const [ query, setQuery ] = useState<string>("")

    const state: DocContextType['state'] = {
        documents,
        status,
        query,
        filteredDocs
    }
    
    const removeDocument = (id: string) => {
        const filteredDocuments = documents.filter((doc: DocType) => { doc.id !== id})
        setDocuments(filteredDocuments);
        setStatus('update')
    }

    const editDocument = (id: string, doc: DocType) => {
        const docToEditIndex: number = documents.findIndex((doc: DocType) => {doc.id === id})
        const newDocuments = [...documents]
        newDocuments[docToEditIndex] = doc;
        setDocuments(newDocuments)
        setStatus('update')
    }

    const addDocument = (doc: DocType) => {
        setDocuments([...documents, doc])
        setStatus('update')
    }

    const searchDocs = (query: string) => {
        if (query !== "") {
            setQuery(query)
            const filteredDocs = documents.filter( doc => new RegExp(`${query}`, 'gi').test(doc.originalFilename))
            setFilteredDocs(filteredDocs)
        } else {
            setQuery("")
            setFilteredDocs([])
        }

    }

    const actions = {
        addDocument,
        removeDocument,
        editDocument,
        searchDocs
    }

    
    // get the documents from the local storage if theres any.
    useEffect(() => {
        if (status === 'loading') {

            const docs = JSON.parse(localStorage.getItem('docs') || '{}')
            if (Object.keys(docs).length > 0) {
                setDocuments(docs)
            }
            setStatus('update')
        }

        if (status === 'update') {
            saveDocsLocalStorage()
            setStatus('ready')
        }
    }, [status, documents])

    // save documents to local storage
    const saveDocsLocalStorage = () => {
        localStorage.setItem('docs', JSON.stringify(documents))
    }


    return (
        <DocsContext.Provider value={{ state, actions }}>
          {props.children}
        </DocsContext.Provider>
    )
}

export { DocsContext as default, DocsProvider as Provider}
