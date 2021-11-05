import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline'

import Chips from '@jstncno/lib/components/chips/Chips';

export interface SearchBarProps {
  allTags: Set<string>;
  initialTags?: Set<string>;
  onSelectedTagsChange?: (tags: Set<string>) => void;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const { allTags, initialTags, onSelectedTagsChange } = props;
  const all = Array.from(allTags ?? []);
  const initial = Array.from(initialTags ?? []);
  const [availableTags, setAvailableTags] = useState<string[]>(all);
  const [selectedTags, setSelectedTags] = useState<string[]>(initial);


  const selectTag = (tag: string) => {
    const selected = selectedTags.concat(tag);
    setSelectedTags(selected);
    const available = availableTags.filter(t => t !== tag);
    setAvailableTags(available);
    onSelectedTagsChange && onSelectedTagsChange(new Set(selected));
  }

  const deselectTag = (tag: string) => {
    const selected = selectedTags.filter(t => t !== tag);
    setSelectedTags(selected);
    const available = availableTags.concat(tag);
    setAvailableTags(available);
    onSelectedTagsChange && onSelectedTagsChange(new Set(selected));
  }

  return (
    <div className="border-2 border-gray-300 px-3 py-2 rounded-lg relative mx-auto mt-7 text-gray-600 w-full md:w-auto">
      <label htmlFor="flex search-input width-full">
        <input className="bg-transparent text-primary dark:text-primary-dark h-10 pl-7 text-sm rounded-lg focus:outline-none"
          id="search-input" type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute left-0 top-0 mt-5 mx-4">
          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </label>

      {selectedTags.length ?
        <Chips tags={selectedTags} href="#" onClick={deselectTag} iconRight={XIcon} /> :
        <input className="block bg-transparent text-xs italic w-full py-4"
          placeholder="Selected tags will appear here..." disabled />
      }
      <hr />
      <Chips tags={availableTags} href="#" onClick={selectTag} />
    </div>

  );
}
export default SearchBar;

