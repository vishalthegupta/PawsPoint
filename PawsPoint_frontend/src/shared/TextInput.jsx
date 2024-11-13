import React from 'react'

const TextInput = ({title,theme,placeHolder,type}) => {
    return (

        // <div>
        //     <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">{title}</label>
        //     <div className="mt-2">
        //         <input placeholder={placeHolder} type="text" name="inputname" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" />
        //     </div>
        //     <label className="pt-1 block text-gray-500 text-sm">{description}</label>
        // </div>
/* From Uiverse.io by kamehame-ha */ 
<div className="input flex flex-col w-fit static">
<label 
  htmlFor="input" 
  className={`${theme === 'light' ? 'text-black' : 'text-primary'} text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-primary w-fit`}
>
  {title}:
</label>
  <input type={type} placeholder={placeHolder} name="input" className="border-gray-400 focus:border-black input px-[10px] py-[11px] text-xs bg-[#e8e8e8] border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25" />
</div>





    )
}

export default TextInput