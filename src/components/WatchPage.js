import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const[searchParams]=useSearchParams();
 
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[]);
  
  return (
    <div className='flex flex-col'>
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
    )
}
export default WatchPage

