import React, { useState, ChangeEvent } from 'react';

interface SearchbarProps {
  onSearch: (term: string) => void;
}
const Searchbar: React.FC<SearchbarProps> = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    
    // สามารถเพิ่มฟังก์ชันเพิ่มเติมเพื่อค้นหา หรือส่งค่ากลับไปยัง parent component ได้ที่นี่
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  }
  
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 m-10 ml-20 w-1/2 ">
        <input 
          type="text" 
          className="grow  justify-center"  
          placeholder="Search" 
          value={searchTerm} 
          onChange={handleChange} 
          onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" 
          />
        </svg>
        </button>
      </label>
     
    </div>
  );
};

export default Searchbar;
