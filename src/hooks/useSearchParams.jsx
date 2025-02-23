import { useState, useCallback, useEffect } from "react";

function useSearchParams() {
    const [params, setParams] = useState(() => new URLSearchParams(window.location.search));

    const updateParam = useCallback((name, value) => {
        const currentParams = new URLSearchParams(window.location.search);

        if(value === null || value === undefined) currentParams.delete(name);

        else currentParams.set(name, value);

        const updatedSearchValue = currentParams.toString();
        const updatedUrl = `${window.location.pathname}?${updatedSearchValue}`;

        window.history.replaceState({}, '', updatedUrl);

        setParams(new URLSearchParams(window.location.search))
        window.dispatchEvent(new CustomEvent('searchParamsUpdated'))
    }, [])

    useEffect(() => {
        const handleOnParamsChange = () => {
            setParams(new URLSearchParams(window.location.search))
        }

        window.addEventListener('searchParamsUpdated', handleOnParamsChange);
        window.addEventListener('popstate', handleOnParamsChange);

        return () => {
            window.removeEventListener('popstate', handleOnParamsChange);
            window.removeEventListener('searchParamsUpdated', handleOnParamsChange)
        }
    }, []);


    // This is the return value of the hook
    return [params, updateParam];
}

export default useSearchParams;