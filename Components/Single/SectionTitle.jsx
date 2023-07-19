import React from 'react'

const SectionTitle = ({ pre, main, sub, subFull, className }) => {
  return (
    <div className={`section-title${className ? " " + className : ''}`}>
      {/* dev: PRE TITLE */}
      {pre && <div className="pre-title">{pre}</div>}
      {/*dev:  MAIN TITLE */}
      {main && <div className="main-title font-gilroy">{main}</div>}
      {/*dev:  SUB TITLE */}
      {sub && <div className={`sub-title${subFull ? ' w-100' : ''}`}>{sub}</div>}
    </div>
  )
}

export default SectionTitle