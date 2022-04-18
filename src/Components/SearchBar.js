import React, {useState} from "react";

function SearchBar({placeholder}) {

    const [searchedTeam, setSearchedTeam] = useState([])

    const handleChange = (e) => {
        setSearchedTeam(e.target.value)
        console.log(searchedTeam)
        // 
    }


    return (
        <div className="search">
            <div className="searchInputs">
            <input onChange={(e) => searchedTeam(e.target.value)} type="text" placeholder={placeholder}/>
            <div className="searchIcon"> </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )

}

export default SearchBar;