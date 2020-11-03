export const wordHelper = ( num ) => {
    if(num === 1){
        return num + ' пересадка'
    }else if(num > 1 && num < 5){
        return num+' пересадки'
    }else{
        return num+' пересадок'
    }
}