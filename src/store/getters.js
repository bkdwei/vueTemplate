
export const   me = state => {
    console.log("go");
    return  state.title+",go,go,go";
}


export const   abc = state => {
    console.log("go");
    return  state.abc+",go,go,go";
}

export const   getTitle = state => {
    return  state.title;
}
export const   getSwiperList = state => {
    return  state.swiperList;
}
