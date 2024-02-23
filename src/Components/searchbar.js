import "../App.css"
import { IoMdSearch } from "react-icons/io"
export const Searchbar = ({onChange,  value})=>{
  
    return   <div className="search-box">
   
        <input placeholder="Search your trip" className="search" onKeyUp={onChange} type="text"/>
          <span className="search-icon">  <IoMdSearch /></span>


  
    </div>

}