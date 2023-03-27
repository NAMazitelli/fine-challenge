import { ChangeEvent } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDocuments, useSearchDocument, useFilteredDocs } from '@/src/contexts/hooks';
import { Search } from '@mui/icons-material'
import { InputAdornment, Input  } from '@mui/material'

const DocumentsGrid = () => {
    const documents = useDocuments();
    const filteredDocs = useFilteredDocs();

    const searchDocument = useSearchDocument();

    const columns = [
        { field: 'originalFilename', headerName: 'Original File Name', flex: 1 },
        { field: 'createdAt', headerName: 'Uploaded At', flex: 1 },
        { field: 'fileType', headerName: 'Type', flex: 1 },
        { field: 'fileExtension', headerName: 'File Extension', flex: 1 }
    ];
    const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => searchDocument(e.target.value)

    return (
        <>
            <Input
                autoFocus
                margin="dense"
                id="name"
                type="text"
                placeholder="Search..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnSearch(e)} 
                startAdornment={
                <InputAdornment position="start">
                    <Search />
                </InputAdornment>
                }
            />
            { documents.length > 0 ? 
                (
                    <DataGrid 
                        rows={filteredDocs.length > 0 ? filteredDocs : documents} 
                        columns={columns} 
                        autoHeight    
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5, page: 0 },
                            },
                        }} 
                    />
                ) :
                (<h2>There are no documents.</h2>)
            }
        </>
    )
}


export default DocumentsGrid