declare type DocContextType = {
    state: {
        documents: DocType[]
    }
    actions: {
        addDocument: (doc: DocType) => void,
        removeDocument: (id: string) => void,
        editDocument: (id: string, doc: DocType) => void
    }
}

declare type DocType = {
    id: string,
    originalFilename: string,
    fileExtension: string,
    fileType?: "EVIDENCE" | "DOCUMENT",
    createdAt: Date
}