'use client'
import {useState, useContext, useMemo, useCallback} from 'react'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { useTheme } from 'next-themes' 

import { Button, Input} from '../components'
import images from '../assets'

const CreateNft = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const {theme} = useTheme()
  const [formIput, setFormIput] = useState({
    price: '',
    name: '',
    description: ''
  })

  const onDrop = useCallback(() => {

  }, [])

  const {getInputProps, getRootProps, isDragAccept, isDragActive, isDragReject} = useDropzone({
    onDrop: onDrop,
    accept: 'image/*',
    maxSize: 5000000
  })

  const fileStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
    ${isDragActive && 'border-file-active'}
    ${isDragAccept && 'border-file-accept'}
    ${isDragReject && 'border-file-reject'}
    `
  ),[isDragAccept, isDragActive, isDragReject]
  )

  return (
    <div className='flex justify-center sm:p-4 p-12'>
      <div className="w-3/5 md:w-full">
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new Item</h1>
      <div className="mt-16">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload File</p>
        <div className="mt-4">
          <div {...getRootProps()} className={fileStyle}>
            <input {...getInputProps}/>
            <div className='flexCenter flex-col text-center'>
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">JPG, PNG, GIF, SVG, WEBM, MAX 100mb.</p>
              <div className="my-12 w-full flex justify-center">
                <Image src={images.upload} alt='' width={100} height={100} objectFit='contain' className={theme === 'light' && 'filter invert'}/>
              </div>
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">Drap and Drop File.</p>
              <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-w">or browse media on your device.</p>
            </div>
          </div>
          {fileUrl && (
            <aside>
              <div>
                <image src={fileUrl} alt='asset_file'/>
              </div>
              
            </aside>
          )}
        </div>
      </div>
      <Input inputType='input' title='Name' placeholder='NFT Name' handleClick={(e) => setFormIput({...formIput, name: e.target.value})}/>
      <Input inputType='textarea' title='Description' placeholder='NFT Description' handleClick={(e) => setFormIput({...formIput, description: e.target.value})}/>
      <Input inputType='number' title='Price' placeholder='NFT Price' handleClick={(e) => setFormIput({...formIput, price: e.target.value})}/>
      <div className="mt-7 w-full flex justify-end">
        <Button btnName='Create NFT' className='rounded-xl' handleClick={(e) => setFormIput({...formIput, price: e.target.value})}/>
      </div>
      </div>
    </div>
  )
}

export default CreateNft