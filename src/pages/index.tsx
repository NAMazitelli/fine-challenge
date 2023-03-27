import Head from 'next/head'
import {  Roboto } from 'next/font/google'
import { DataGrid } from '@mui/x-data-grid';

const roboto = Roboto({ subsets: ['latin'], weight: "300" })

type RowsType = {
  id: string,
  originalFilename: string,
  fileExtension: string,
  fileType?: "EVIDENCE" | "DOCUMENT",
  createdAt: Date
}

export default function Home() {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <>
      <Head>
        <title>Fine Legal - Challenge</title>
        <meta name="description" content="Nicolas Mazitelli challenge for Fine Legal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className} >
        <div> 
          <h1>My Documents</h1>

          <DataGrid autoHeight  rows={rows} columns={columns} />

        </div>
      </main>
    </>
  )
}
