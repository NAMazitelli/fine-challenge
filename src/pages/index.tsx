import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { Container } from '@mui/material'
import DocumentsGrid from '@/components/DocumentsGrid'
import UploadModal from '@/components/UploadModal'
import { Provider } from '@/src/contexts'
import styles from '@/src/styles/Home.module.scss'

const roboto = Roboto({ subsets: ['latin'], weight: "300" })

export default function Home() {
  const rows = [
    { id: 1, originalFilename: 'Hello', createdAt: '200', fileType: 'png', fileExtension: 'World' },
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
        <Provider>

          <Container> 
            <div className={styles.header}>
              <h1>My Documents</h1>
              <UploadModal />
            </div>

            <DocumentsGrid  />
     
          </Container>
        </Provider>

      </main>
    </>
  )
}
