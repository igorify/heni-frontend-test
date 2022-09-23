import { useLocalStorage } from ".";
import { renderHook, act } from "@testing-library/react";


describe("Given a useLocalStorage hook", () => {
  describe("When it is using", () => {
    test("Then the initialValue is saved", () => {
      const { result: { current } } = renderHook(() => useLocalStorage('testKey', 'testValue'));
      const [ storedValue ] = current;
      expect(storedValue).toBe('testValue');
    });

    test("Then the initially initialValue is present, storedValue and setValue works", () => {
      const { result } = renderHook(() => useLocalStorage('testKey', 'initialTestValue'));
      const [ storedValue, setValue ] = result.current;

      const valueFromLocalStorage = window.localStorage.getItem('testKey');
      expect(valueFromLocalStorage).toBe(null);
      expect(storedValue).toBe('initialTestValue');

      act(()=> {
        setValue('settedTestValue');
      });
      expect(result.current[0]).toBe('settedTestValue');
      const valueFromLocalStorageAfterSetValue = window.localStorage.getItem('testKey');
      expect(valueFromLocalStorageAfterSetValue && JSON.parse(valueFromLocalStorageAfterSetValue)).toBe('settedTestValue');      

      window.localStorage.removeItem('testKey');
    });

    test("Then the couple value set to localStorage using hook", () => {
      const { result: resultFirst } = renderHook(() => useLocalStorage('testKey', 'initialTestValue'));
      expect(resultFirst.current[0]).toBe('initialTestValue');     
      act(()=> {
        resultFirst.current[1]('settedTestValue');
      });

      const { result: resultSecond } = renderHook(() => useLocalStorage('testKeySecond', 'initialTestValueSecond'));
      expect(resultSecond.current[0]).toBe('initialTestValueSecond');
      act(()=> {
        resultSecond.current[1]('initialTestValueSecond');
      });
      
      expect(resultFirst.current[0]).toBe('settedTestValue');
      const valueFromLocalStorageAfterSetValue = window.localStorage.getItem('testKey');
      expect(valueFromLocalStorageAfterSetValue && JSON.parse(valueFromLocalStorageAfterSetValue)).toBe('settedTestValue'); 

      expect(resultSecond.current[0]).toBe('initialTestValueSecond');
      const valueFromLocalStorageAfterSetValueSecond = window.localStorage.getItem('testKeySecond');
      expect(valueFromLocalStorageAfterSetValueSecond && JSON.parse(valueFromLocalStorageAfterSetValueSecond)).toBe('initialTestValueSecond');

      window.localStorage.removeItem('testKey');
      window.localStorage.removeItem('testKey2');
    });
  });
});
