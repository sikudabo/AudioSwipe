import { useQuery } from "react-query";
import axios from "axios";


export default function useFetchTestData() {
    return useQuery(['testData'], async () => {
        const testData = await axios({
            method: 'GET',
            url: 'http://localhost:2000/api/test',
        }).then(res => {
            return res.data;
        }).catch(e => {
        });

        return testData;
    }, {
        refetchInterval: 2000,
        refetchOnMount: true,
    });
}