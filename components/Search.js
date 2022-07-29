import { useLazyQuery } from '@apollo/client';
import {useState, useEffect, useRef} from 'react';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const wrapperRef = useRef(null);
  useOutsideSearch(wrapperRef);
  const [searchInput, setInput] = useState('');
  const [dropOpen, changeOpen] = useState(false);
  const [findItems, { loading, data, error }] = useLazyQuery(SEARCH_PRODUCTS_QUERY,
    {fetchPolicy: 'no-cache'});
  const items = data?.searchTerms || [];

  function useOutsideSearch(ref) {
    useEffect(() => {
       //Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          changeOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
      findItems({
       variables: {
         searchTerm: searchInput
       }
     })      
  }, [searchInput]);

   return (
    <SearchStyles ref={wrapperRef}>
      <div>
        <input 
          className={loading ? 'loading' : null}
          onChange={(e) => {
            setTimeout(() => {
            let str = e.target.value;
            setInput(str.trim());
          }, 2000)
            console.log(e.target.value)
         }
        }
          onFocus={() => {changeOpen(true)}}
          onBlur={(e) => {e.target.value = ''}
          }
        />
      </div>
      <DropDown>
        {dropOpen && items.map((item, index) => (
            <DropDownItem
              key={item.id}
              onClick={() => {
                router.push({
                  pathname: `/product/${item.id}`,
                });
                setInput('');
                changeOpen(false);
                }}

            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {dropOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {searchInput}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}



export function SearchDropDown() {
  const router = useRouter();
  const [searchInput, setInput] = useState('');
  const [dropOpen, changeOpen] = useState(false);
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache'
    }
  );
  const items = data?.searchTerms || [];
  //const findItemsButChill = debounce(findItems, 500);

  useEffect(() => {
      findItems({
       variables: {
         searchTerm: searchInput
       }
     })
  }, [searchInput]);
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getComboboxProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    //onInputValueChange(inputValue) { 
    //},
    onSelectedItemChange({ selectedItem }) {
      console.log(selectedItem);
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.name || '',
  });
  return (
    <SearchStyles>
      {/* <button onClick={() => {setInput(inputValue)}}>Test</button> */}
      <div {...getComboboxProps()}>
        <input onChange={(e) => {
                setTimeout(() => {
                let str = e.target.value;
                setInput(str.trim());
              }, 2000)
           }
          }
          onFocus={() => {changeOpen(true)}}
          onBlur={() => {changeOpen(false)}}
        />
        <input style={{display: 'none'}}{...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: loading ? 'loading' : '',
          })}/>
      </div>
      <DropDown {...getMenuProps()}>
        {dropOpen && items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {dropOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {searchInput}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
