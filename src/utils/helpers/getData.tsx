import axios from 'axios';

type GetDataProps = {
    url: string;
};

export default async function getData({ url }: GetDataProps) {
    return await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_BASE_URI}${url}`,
    }).then(response => {
        return response.data;
    }).catch(e => {
        const { isSuccess, message } = e.response.data;
        return { isSuccess, message };
    });
}