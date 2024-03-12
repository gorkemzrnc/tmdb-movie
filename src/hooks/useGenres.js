import  { useEffect } from 'react';
import { fetchGenres } from '../redux/configSlice';
import {useDispatch, useSelector} from 'react-redux';

const useGenres = () => {
  const dispatch = useDispatch();
  const {genres, status} = useSelector((state)=> state.config.genre);
  const {selectedMenu} = useSelector((state)=> state.config);

  useEffect(()=>{
    dispatch(fetchGenres());
  },[]);

  return {genres, status, selectedMenu};
}

export default useGenres