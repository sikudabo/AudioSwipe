import axios from 'axios';

type PostBinaryDataProps = {
    data: any;
    url: string;
};

export const postBinaryData = async ({ data, url }: PostBinaryDataProps) => {
    return await axios({
        data,
        url,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
    }).then(response => {
        return response.data;
    }).catch(e => {
        console.log(e);
    });
}