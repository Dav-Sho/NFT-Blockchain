import React from 'react'

const Button = ({btnName, classStyles, handleClick}) => {
  return (
    <button type='button' className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:8 font-semi-bold text-white ${classStyles}`} onClick={handleClick}>
        {btnName}
    </button>
  )
}

export default Button