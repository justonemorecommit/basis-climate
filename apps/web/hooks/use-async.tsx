import React, { useState, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseAsyncReturn<TR extends any[], T> = [
  (...args: TR) => Promise<T>,
  {
    data?: T;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    isLoading: boolean;
    setData: Dispatch<SetStateAction<T | undefined>>;
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAsync<TR extends any[], T>(
  asyncFunc: (...args: TR) => Promise<T>
): UseAsyncReturn<TR, T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [promise, setPromise] = useState();

  const submit = React.useCallback(
    async (...args: TR) => {
      let promiseInFlight = promise as Promise<T> | undefined;
      if (promiseInFlight) {
        return promiseInFlight;
      }

      try {
        promiseInFlight = asyncFunc(...args);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setPromise(promiseInFlight as any);
        setError(undefined);
        setData(undefined);

        const result = await promiseInFlight;
        setData(result);
        return result;
      } catch (e: unknown) {
        setError(e as Error);
        throw e;
      } finally {
        setPromise(undefined);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [asyncFunc]
  );

  return [
    submit,
    {
      data,
      error,
      isLoading: Boolean(promise),
      setData,
    },
  ];
}
