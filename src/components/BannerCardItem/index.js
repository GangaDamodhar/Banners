// Write your code here.

import './index.css'

const BannerCardItem = props = {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem

  return (
    <li className={className}>
      <div>
         <h1 className="card-heading">{headerText}</h1>
         <P className="card-description">{description}</P>
         <button type="button" className="card-btn">
         Show More
         </button>
      </div>
   </li>
    )
}




export default BannerCardItem