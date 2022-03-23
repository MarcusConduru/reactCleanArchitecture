/* eslint-disable prettier/prettier */
import React from 'react';
import SignUp from './signup';
import { render, RenderResult } from '@testing-library/react';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<SignUp />);

  return {
    sut,
  };
};

const testChildCount = (sut: RenderResult, fieldName: string ,count: number) => {
  const el = sut.getByTestId(fieldName);
  expect(el.childElementCount).toBe(count);
};

const testButtonIsDisable = (
  sut: RenderResult,
  fieldName: string,
  isDisable: boolean,
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement;
  expect(button.disabled).toBe(isDisable);
};

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string,
) => {
  const FieldStatus = sut.getByTestId(`${fieldName}-status`);
  expect(FieldStatus.title).toBe(validationError || 'Tudo certo!');
  expect(FieldStatus.textContent).toBe(validationError ? '🔴' : '🟢');
};

describe('SignUp Component', () => {
  test('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut();
    testChildCount(sut, 'error-wrap', 0);
    testButtonIsDisable(sut, 'submit', true);
    testStatusForField(sut, 'name', validationError);
    testStatusForField(sut, 'email', validationError);
    testStatusForField(sut, 'password', validationError);
    testStatusForField(sut, 'passwordConfirmation', validationError);
  });
});
