import React,{useState,useEffect} from 'react'
import Skeleton from "react-loading-skeleton"


const Products = () => {
    const[data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    

    useEffect(()=>{
        const getProducts = async()=>{
            setLoading(true);
            //const result= await axios.get("https://fakestoreapi.com/products")
            //const result = await axios.get
            const result = await fetch("https://fakestoreapi.com/products");
            if(componentMounted ){
              setData(await result.clone().json());
              setFilter(await result.json());
              setLoading(false);
              console.log(filter);
            }
            return ()=>{
              componentMounted(false);
            }           
        }
        getProducts();
    },[])
    const Loading=()=>{
      return(
        <>
          <div className='col-md-3'>
              <Skeleton height={350}/>
          </div>
          <div className='col-md-3'>
              <Skeleton height={350}/>
          </div>
          <div className='col-md-3'>
              <Skeleton height={350}/>
          </div>
          <div className='col-md-3'>
              <Skeleton height={350}/>
          </div>
        </>
      )      
    }

    const filterProduct = (cat)=>{
      const updateList = data.filter((X)=>X.category === cat);
      setFilter(updateList);
    }

    const Showproducts=()=>{
      return <>
        <div className='button d-flex justify-content-center pb-5'>
          <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Cloathng</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Cloathng</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelary</button>
          <button className='btn btn-outline-dark' onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {
          filter.map((products)=>{
            return(
              <>
                <div className='col-md-3'>
                    <div class="card h-100 text-center p-4" key={products.id}>
                      <img src={products.image} class="card-img-top" alt={products.title} />
                      <div class="card-body">
                        <h5 class="card-title mb-0">{products.title.substring(0,12)}...</h5>
                        <p class="card-text fw-bold">Rs.{products.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                </div>
              </>
            )
          })
        }
      </>
    }
  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-md-12 mb-5'>
              <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
              <hr/>
              <div className='row justify-content-center'>
                  {loading ? <Loading/> : <Showproducts/>}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products