import axios from 'axios';

type PutBinaryDataProps = {
    data: any;
    url: string;
};

export const putBinaryData = async ({ data, url }: PutBinaryDataProps) => {
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