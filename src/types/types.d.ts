
declare type DocContextType = {
    state: {
        documents: DocType[],
        filteredDocs: DocType[],
        status: 'loading' | 'ready'  | 'update',
        query: string
    },
    actions: {
        addDocument: (doc: DocType) => void,
        removeDocument: (id: string) => void,
        editDocument: (id: string, doc: DocType) => void,
        searchDocs: (query: string) => void
    }
}

declare type DocType = {
    id: string,
    originalFilename: string,
    fileExtension: string,
    fileType?: "EVIDENCE" | "DOCUMENT",
    createdAt: Date
}
