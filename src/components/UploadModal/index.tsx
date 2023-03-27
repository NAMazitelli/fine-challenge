import { useState, ChangeEvent } from 'react'
import { Dialog, Button, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useDocuments, useAddDocument } from '@/src/contexts/hooks';
const UploadModal = () => {
    const [open, setOpen] = useState(false);
    const documents = useDocuments()
    const addDocument = useAddDocument()

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const { type, name } = e.target.files[0]

            const newDocument: DocType = {
                id: `${documents.length + 1}`,
                originalFilename: name,
                fileExtension: type,
                createdAt: new Date().toLocaleString("en-US"),
            }

            addDocument(newDocument)
            handleClose()
        }
    }
    
    return (
        <> 
            <Button  variant="contained"  onClick={handleClickOpen}>
                Upload
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new document</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="File Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden type="file" onChange={(e) => handleUploadFile(e) } />
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
 export default UploadModal