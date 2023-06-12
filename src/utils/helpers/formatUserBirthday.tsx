export const  formatUserBirthday = (val: any) => {
    const { $d } = val;
    const formattedUserBirthday = new Date($d).getTime();
    return formattedUserBirthday;
}