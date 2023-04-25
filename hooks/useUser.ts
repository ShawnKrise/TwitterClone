import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

//SWR is used for data fetching.
//Will use fetcher that's been created
//add userID
const useUser = (userId: string) => {
    //useSWR points to current located in api folder
    //also pass in fetcher created in libs folder
    const { 
        data, 
        error, 
        isLoading, 
        mutate 
    } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

    //return things passed in by SWR library
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUser;