import { DataGrid } from '@mui/x-data-grid';
import { useDocuments } from '@/src/contexts/hooks';

const DocumentsGrid = () => {
    const documents = useDocuments();

    const columns = [
        { field: 'originalFilename', headerName: 'Original File Name', width: 150 },
        { field: 'createdAt', headerName: 'Uploaded At', width: 150 },
        { field: 'fileType', headerName: 'Type', width: 150 },
        { field: 'fileExtension', headerName: 'File Extension', width: 150 }
    ];
    
    return (
        <>
            { documents.length > 0 ? 
                (
                    <DataGrid rows={documents} columns={columns} autoHeight />
                ) :
                (<h2>Upload documents to start!</h2>)
            }
        </>
    )
}


export default DocumentsGrid