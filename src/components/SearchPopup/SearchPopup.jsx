import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupDataSelector } from './store/popupSelectors';
import { getData } from './store/popupSlice';
import { push } from 'redux-first-history';
import { setIsSerie, setMovieId } from '../../Pages/details/store/detailsSlice';
import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { linearSearch, binarySearch } from '../../utils/SearchType';

import {
  CloseButton,
  PopupWrapper,
  PopupBox,
  Radio,
  SearchWrapper,
  InputWrapper,
  Label,
  SearchBar,
  SearchButton,
  Results,
  Error,
  FormError,
} from './styles';

const quickSort = (arr) => {
  const arrCopy = [...arr];
  const partition = (array = [], start, end) => {
    let i = start;
    const pivotValue = array[end].title;
    let pivotIndex = start;

    while (i < end) {
      if (array[i].title < pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
      i++;
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
  };
  let stack = [];
  stack.push(0);
  stack.push(arrCopy.length - 1);
  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop();
    let start = stack.pop();
    let pivotIndex = partition(arrCopy, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return arrCopy;
};

export const SearchPopup = ({ handle, setShowPopup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchBar: '',
    },
  });

  const dispatch = useDispatch();
  const data = useSelector(popupDataSelector);
  const { title } = data;

  const [sortedData, setSortedData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchOutput = [], setSearchOutput] = useState([]);
  const [searchType, setSearchType] = useState(false);

  useEffect(() => {
    dispatch(getData());
  }, []);
  useEffect(() => {
    if (data !== undefined) {
      setSortedData(quickSort(data, title));
    }
  }, [data]);

  const handleSearch = () => {
    searchType
      ? setSearchOutput(binarySearch(sortedData, searchInput))
      : setSearchOutput(linearSearch(data, searchInput));
  };

  const goTo = (id) => {
    dispatch(setMovieId(id));
    dispatch(setIsSerie(false));
    dispatch(push(`/movie/${id}`));
    setShowPopup(false);
  };

  return (
    <PopupWrapper>
      <PopupBox>
        <CloseButton onClick={handle}>X</CloseButton>
        <SearchWrapper onSubmit={handleSubmit((data) => {})}>
          <InputWrapper>
            <Radio
              type="radio"
              name="radio"
              value="Linear Search"
              onChange={() => setSearchType(false)}
            />
            <Label>Linear Search</Label>
          </InputWrapper>
          <InputWrapper>
            <Radio
              type="radio"
              name="radio"
              value="Binary Search"
              onChange={() => setSearchType(true)}
            />
            <Label>Binary Search</Label>
          </InputWrapper>
          <InputWrapper>
            <FormError>{errors.searchBar?.message}</FormError>
            <SearchBar
              {...register('searchBar', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Search must be at least 1 character',
                },
                maxLength: {
                  value: 500,
                  message: "You can't type more than 500 characters",
                },
              })}
              maxLength="501"
              type="text"
              placeholder="Search Film"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputWrapper>
          <SearchButton type="submit" value="Submit" onClick={handleSearch} />
          {!isEmpty(searchOutput) ? (
            searchOutput.map(({ title, id }) => (
              <Results key={id} onClick={() => goTo(id)}>
                {title}
              </Results>
            ))
          ) : (
            <Error>No results!</Error>
          )}
        </SearchWrapper>
      </PopupBox>
    </PopupWrapper>
  );
};
