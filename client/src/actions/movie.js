import * as api from '../api/';

export const getMovieData = async () =>{
    console.log('getMovieData')
    try {       
        const {data} = await api.getMovie()
        return data;                
    } catch (error) {
        console.log(error);
    }
}