import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Chip from './Chip';

interface SearchBarProps {
  posts: Array<{ id: number; title: string; body: string }>;
  setSearchResults: React.Dispatch<React.SetStateAction<Array<{ id: number; title: string; body: string }>>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ posts, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [chips, setChips] = useState<Array<{ id: number; label: string }>>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      const resultsArray = posts.filter(
        (post) => post.title.includes(searchTerm) || post.body.includes(searchTerm)
      );
      setSearchResults(resultsArray);
      setChips([...chips, { id: Date.now(), label: searchTerm }]);
      setSearchTerm('');
    } else {
      setSearchResults(posts); // Reset search results if search term is empty
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  
    const resultsArray = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(resultsArray);
  };
  
  
  

  const handleChipDelete = (chipId: number) => {
    const updatedChips = chips.filter((chip) => chip.id !== chipId);
    setChips(updatedChips);
  };

  return (
    <header className="flex items-center justify-center mb-4">
      <form className="search border border-black rounded-full px-4 py-2 flex items-center" onSubmit={handleSubmit}>
        <input
          className="outline-none border-none"
          type="text"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="ml-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="flex mt-2">
        {chips.map((chip) => (
          <div key={chip.id} className="mr-2">
   
            <Chip label={chip.label} onDelete={() => handleChipDelete(chip.id)} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default SearchBar;
