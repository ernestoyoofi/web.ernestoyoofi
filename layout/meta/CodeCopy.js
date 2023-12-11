"use client"

import { useRef } from "react"
import s from "./CodeCopy.module.css"
import { FaCopy, FaCheck } from "react-icons/fa6"
export default function CodeCopyed(props) {
  const refTabButton = useRef()
  const refButtonToCheck = useRef()
  const refReadyCopy = useRef()
  const codeRefs = useRef()

  const contentName = {
    js: "Javascript", ts: "Typescript", py: "Python"
  }
  console.log(props.children.props.className)
  const contentTypeCode = props.children.props.className.split("language-")[1]
  return <div className={s.codecopy_box} typecode={contentTypeCode}>
    <div className={s.headering_code}>
      <p>{contentName[contentTypeCode]}</p>
      <button
        ref={refTabButton}
        onClick={(e) => {
          navigator.clipboard.writeText(codeRefs.current.innerText)
          refTabButton.current.setAttribute("copy-is-active", "!")
          refButtonToCheck.current.setAttribute("icon-interactive", "!")
          refReadyCopy.current.removeAttribute("icon-interactive", "!")
          setTimeout(() => {
            refButtonToCheck.current.removeAttribute("icon-interactive", "!")
            refReadyCopy.current.setAttribute("icon-interactive", "!")
            refTabButton.current.removeAttribute("copy-is-active")
          }, 1200)
        }}
      ><span ref={refButtonToCheck}><FaCopy /></span><span  ref={refReadyCopy} icon-interactive="!"><FaCheck /></span></button>
    </div>
    <pre className={s.warp_code_pre} ref={codeRefs}>{props.children}</pre>
  </div>
}