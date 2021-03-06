import React from 'react'
import Helmet from 'react-helmet'
// import Banner from '../components/Banner'
import UploadForm from './upload-form'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import './upload.css'

class FileUpload extends React.Component {
  render () {
    return (
      <div>
        <ReactNotification />
        <Helmet
          title='IPFS File Hosting for BCH | FullStack.cash'
          meta={[
            { name: 'description', content: 'Pay BCH to have your files host on IPFS' },
            { name: 'keywords', content: 'ipfs, bch, bitcoin, bitcoin cash, file, hosting, upload' }
          ]}
        />
        <UploadForm />
      </div>
    )
  }
}
export default FileUpload
