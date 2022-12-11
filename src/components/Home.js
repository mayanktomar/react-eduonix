import React, {useState,useEffect} from 'react';
import dish1 from '../images/dish1.jpg';
import dish2 from '../images/dish2.jpg';
import dish3 from '../images/dish3.jpg';
import intro from '../images/intro.jpg';
import DishDetails from './DishDetails';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions';

export default function Home() {
  const images = [dish1,dish2,dish3];
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const [sideImage,setSideImage] = useState(intro);
  const [sideImageCount,setSideImageCount] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   setSideImage(images[sideImageCount]);
    //   setSideImageCount((sideImageCount+1)%3);
    // }, 3000);
  })
  
  return (
    <>
     <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <p>{counter}</p>
          <button onClick={()=>dispatch(increment())}>increment</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vulputate tellus non consectetur. In aliquet massa ac sodales lacinia. Cras vehicula venenatis tellus, in dapibus orci consectetur ut. In sit amet leo nibh. Duis eu nulla sapien. Phasellus bibendum, lectus sit amet efficitur rhoncus, turpis ex congue erat, a feugiat nunc velit ut diam. Vivamus rutrum nulla at orci pretium, ac laoreet tortor fringilla. Morbi neque ex, laoreet gravida pharetra eget, auctor a justo. Sed elementum commodo mauris, vel commodo nisl iaculis at. Vestibulum nec justo vel quam luctus aliquam in et lorem.

Vestibulum nec enim ante. Duis convallis consequat urna ut placerat. Fusce quam justo, maximus a sollicitudin in, maximus sed purus. Suspendisse ornare magna quis blandit posuere. Nunc nec volutpat orci. Curabitur volutpat sem et justo suscipit aliquet eu id dolor. Curabitur vel tincidunt enim, eu aliquam felis. Praesent urna nisi, lobortis et condimentum sit amet, imperdiet vitae risus. Morbi semper purus sem, non pharetra tellus egestas eu. Donec id tempus massa. Nulla vitae dolor orci. Proin ornare mattis aliquet. Pellentesque blandit justo eget arcu cursus pharetra.</p>
        </div>

        <div className='col-md-3'>
          <img src={sideImage}></img>
        </div>

      </div>
      <DishDetails/>
     </div>
    </>
  )
}
