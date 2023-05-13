export type ArtistType = {
    firstName: string;
    lastName: string;
    artistName: string;
    birthday: number;
    createdOn: number;
    downVotes?: [{ fanId: string; swipeDate: Date }];
    downVoteCount?: number;
    upVotes?: [{ fanId: string; swipeDate: Date }];
    upVoteCount?: number;
    email: string;
    fans: [{ fanAvatar: string; fanId: string; fanName: string; }];
    gender: string;
    genres: [string];
    username?: string;
    password: string;
    phoneNumber: string;
    soundcloudLink?: string;
    youtubeLink?: string;
    spotifyLink?: string;
    city: string;
    state: string;
    userType: string;
    bio?: string;
};