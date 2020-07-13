export const convertDate = ( dateStr: string ): Date => {
    const dateArr: string[] = dateStr.split('/');
    return new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);
}
