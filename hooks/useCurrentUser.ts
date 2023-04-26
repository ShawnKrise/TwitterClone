import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

//SWR is used for data fetching.
//Will use fetcher that's been created
const useCurrentUser = () => {
    //useSWR points to current located in api folder
    //also pass in fetcher created in libs folder
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

    //return things passed in by SWR library
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;