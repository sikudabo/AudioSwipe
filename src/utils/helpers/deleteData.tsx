import axios from 'axios';

type DeleteDataType = {
    url: string;
};

export default async function deleteData({ url }: DeleteDataType) {
    return await axios({
        method: 'DELETE',
        url: `${process.env.REACT_APP_BASE_URI}${url}`,
    }).then(response => {
        return response.data;
    }).catch(e => {
        const { isSuccess, message } = e.response.data;
        return { isSuccess, message };
    });
}