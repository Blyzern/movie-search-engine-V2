import React, { useEffect } from 'react';
import { getError, setOpen } from './store/ErrorPopupSlice';
import {
  ErrorPopupBox,
  ErrorPopupWrapper,
  ErrorTxt,
  CloseButton,
} from './styles';
import { isEmpty } from 'lodash';
import {
  getErrorSelector,
  getisOpenSelector,
} from './store/ErrorPopupSelectors';
import { useDispatch, useSelector } from 'react-redux';

export const ErrorPopup = () => {
  const dispatch = useDispatch();
  const error = useSelector(getErrorSelector);
  const errorTxt = String(error);
  const isOpen = useSelector(getisOpenSelector);

  useEffect(() => {
    error && dispatch(getError());
  }, [error]);

  const handleWindow = () => {
    dispatch(setOpen(false));
  };

  return (
    isOpen &&
    error && (
      <ErrorPopupWrapper>
        <CloseButton onClick={handleWindow}>X</CloseButton>
        <ErrorPopupBox>
          <ErrorTxt>{errorTxt}</ErrorTxt>
        </ErrorPopupBox>
      </ErrorPopupWrapper>
    )
  );
};
