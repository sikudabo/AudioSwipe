import axios from 'axios';

type PostDataProps = {
    url: string,
    data: any,
    contentType: string;
};

export default function postData({ url, data, contentType }: PostDataProps) {
    return axios({
        data: JSON.stringify(data),
        method: 'POST',
        url,
        headers: {
            'Content-Type': contentType,
        },
    });
}