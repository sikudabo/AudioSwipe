export type SongTableRowType = {
    row: {
        albumCover: string;
        disLikes: [string] | undefined;
        likes: [string] | undefined;
        name: string;
        songMediaId: string;
        _id: string;
    };
};

export type SongDataType = {
    album: string;
    albumCover: string;
    disLikes: string[] | undefined;
    likes: string[] | undefined;
    name: string;
    songMediaId: string;
    _id: string;
};