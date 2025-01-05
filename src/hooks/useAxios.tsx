import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState, useRef } from 'react';
import axiosInstance from '../api/instance.ts';

export default function useAxios<T>(axiosParams: AxiosRequestConfig<T>) {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const controllerRef = useRef(new AbortController());

  useEffect(() => {
    const controller = controllerRef.current;
    const signal = controller.signal;

    setLoading(true); // 로딩 상태 초기화

    axiosInstance({ ...axiosParams, signal })
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => {
        if (err.name === 'CanceledError') {
          console.log('요청이 취소되었습니다:: ', err.message);
        } else {
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort(); // 컴포넌트 언마운트 시 요청 취소
      controllerRef.current = new AbortController(); // 새로운 AbortController 인스턴스 생성
    };
  }, [axiosParams]);

  return { response, loading, error };
}