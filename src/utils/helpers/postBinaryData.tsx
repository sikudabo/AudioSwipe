import axios from 'axios';

type PostBinaryDataProps = {
    data: any;
    url: string;
};

export const postBinaryData = async ({ data, url }: PostBinaryDataProps) => {
    return await axios({
        data,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Content-Encoding': 'mutipart/form-data',
        },
        method: 'PUT',
        url: `${process.env.REACT_APP_BASE_URI}${url}`,
    }).then(response => {
        return response.data;
    }).catch(e => {
        const { isSuccess, message } = e.response.data;
        return { isSuccess, message };
    });
}