import React, { useEffect, useRef, useState } from 'react';
import { useAddProductMutation } from '../../api/addProductSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AddProduct = () => { 
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState(1)
  const titleRef = useRef();

  const user = useSelector(state => state.auth)
  const userId = user.user.id
  console.log('user: ', user.user.id);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);  
  const handleSelect = (e) => setCategoryId(e.target.value);

  const [addProduct, isSuccess, error] = useAddProductMutation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user.user.role === 'seller' ) {
      console.log(title, price, categoryId, image);
      if (title && price && categoryId && image ) {
        addProduct({ title, price, categoryId, image, userId });
      } else {
        toast.error('Provide all information, please');
      }
    } else {
      toast.error('Please login as a Seller')
    }
    
  };

  // useEffect(() => {
  //   console.log();
  // }, [title, price, categoryId, image])

  const content = (
    <section className="signup__container">
      <div className="flex flex-col items-center justify-center">        
        <div className="bg-white border shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-12">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 login__text"
          >
            Create your product
          </p>
          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Title
            </label>
            <input
              aria-label="enter product title"
              type="text"
              id="title"
              ref={titleRef}
              value={title}
              onChange={handleTitleInput}
              className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
              required
            />
          </div> 
          
          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Price
            </label>
            <input
              aria-label="enter product title"
              type="number"
              id="price"              
              value={price}
              onChange={handlePriceInput}
              className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
              required
            />
          </div> 

          <div className="mt-4">
          <label className="text-sm font-medium leading-none login__text">
              Select Product Category
            </label>
          <select onChange={handleSelect} className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2">
            <option value={1}>Electronics</option>
            <option value={2}>Computers</option>
            <option value={3}>Personal Care</option>
            <option value={4}>Fashions</option>
            <option value={5}>Software</option>
            <option value={6}>Toys & Games</option>
            <option value={7}>Home & Kitchen</option>
            <option value={8}>Beauty and Care</option>
            <option value={9}>Miscellaneous</option>
          </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium leading-none login__text">
              Product Image
            </label>
            <input
              aria-label="enter product title"
              type="text"
              id="image"
              value={image}
              onChange={handleImageInput}
              className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
              required
            />
          </div> 

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              type="button"
              aria-label="create my account"
              className="signup__button"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return content 

  
}

export default AddProduct