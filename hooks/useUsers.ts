import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

//SWR is used for data fetching.
//Will use fetcher that's been created
const useUsers = () => {
    //useSWR points to current located in api folder
    //also pass in fetcher created in libs folder
    const { 
        data,
        error, 
        isLoading, 
        mutate
    } = useSWR('/api/users', fetcher)

    //return things passed in by SWR library
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUsers;