import React, { ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  posts: Array<{ id: number; title: string; body: string }>;
  setSearchResults: React.Dispatch<React.SetStateAction<Array<{ id: number; title: string; body: string }>>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ posts, setSearchResults }) => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value));

    setSearchResults(resultsArray);
  };

  return (
    <header className="flex items-center justify-center mb-4">
      <form className="search border border-black rounded-full px-4 py-2 flex items-center" onSubmit={handleSubmit}>
        <input
          className="outline-none border-none"
          type="text"
          id="search"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <button className="ml-2">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
