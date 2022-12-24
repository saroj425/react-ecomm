import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Skeleton from "react-loading-skeleton"


const Product = () => {
  const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    

    useEffect(()=>{        
        const getProduct=async()=>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log("Response============",response);
            setProduct(await response.json());
            console.log("dkfdsjflsjsf===",product);
            setLoading(false);
        }
        getProduct()

    },[])

    const Loading = ()=>{
      return (
        <>
          <div className='col-md-6'>
            <Skeleton height={400}/>
          </div>
          <div className='col-md-6'>
            <Skeleton height={50} width={300}/>
          </div>
        </>
      )
    }
    const ShowProduct = ()=>{
      return(
        <>
          <div className='col-md-6' key={product.id}>
            <img src={product.image} alt={product.title} height="400px" width="400px"/>

          </div>
          <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>
              {product.category}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}<i className='fa fa-star'></i></p>
            <h3 className='display-6 fw-bolder my-4'>{product.price}</h3>
            <p className='lead'> {product.description}</p>
            <button className='btn btn-outline-dark px-4 py-2'>Add to Cart <i className='fa fa-shopping-cart'></i></button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-4 py-2">Go to Cart</NavLink>
          </div>
        </>
      )
    }
  return (
    <div>
      {/* <Navbar/> */}
        <div className='container py-5'>
          <div className='row py-4'>
            {loading ?<Loading/>:<ShowProduct/>}
          </div>
        </div>
    </div>
  )
}

export default Product