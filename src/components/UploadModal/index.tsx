import { useState, useEffect } from 'react'
import { Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import { useDocuments, useAddDocument } from '@/src/contexts/hooks';
const UploadModal = () => {
    const [open, setOpen] = useState(false);
    const documents = useDocuments()
    const addDocument = useAddDocument()
    useEffect(()=>{
        console.log(documents)
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleUploadFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {

            const { lastModifiedDate, type, name } = e.target.files[0]

            const newDocument: DocType = {
                id: `${documents.length + 1}`,
                originalFilename: name,
                fileExtension: type,
                createdAt: lastModifiedDate,
            }

            addDocument(newDocument)
        }
    }

    return (
        <> 
            <Button  variant="contained"  onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden type="file" onChange={(e) => handleUploadFile(e) } />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
 export default UploadModal