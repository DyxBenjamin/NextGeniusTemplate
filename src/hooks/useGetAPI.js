import useSWR from "swr";

const fetcher = (key) => fetch(key).then((res) => res.json());

export default function useGetAPI(route) {
    const { data, error, isLoading, mutate, isValidating } = useSWR(route, fetcher);
    return {
        data,
        isLoading,
        isError: error,
        mutate,
        isValidating
    }
}
