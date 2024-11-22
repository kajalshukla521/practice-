// import React from 'react'
// import styled from 'styled-components';


// const Container =styled.div`


// `;


// const Card = ({userName, btnText}) => {
//   return (

//   <>
  
//  <Container>
//     < img  src='https://cdn.pixabay.com/photo/2024/03/28/15/56/chilli-8661184_1280.jpg' alt='img'/>
//     <h3 >{userName}</h3>
//     <button type='submit'> {btnText}</button> 
//     </Container> 
  
  
  

//     <Container>
//     < img  src='https://th.bing.com/th/id/OIP.eBlEzG2oiow-EGvC020q8wHaHa?rs=1&pid=ImgDetMain' alt='img'/>
//     <h3 >{userName}</h3>
//     <button type='submit'> {btnText}</button> 
//     </Container> 
  



//     <Container>
//     < img  src='https://th.bing.com/th/id/OIP.xgOHLUSS9BvPr2L0mJcUzgHaHy?rs=1&pid=ImgDetMain' alt='img'/>
//     <h3 >{userName}</h3>
//     <button type='submit'> {btnText}</button> 
//     </Container> 
//   </>







//   )
// }

// export default Card







<div className='text-center justify-content-center'>


<h1> user list</h1>
{ data ? (
        data.map((user) => (
            
            <div key={user.id}>

                <p>name{user.name}</p>
                <p>username{user.username}</p>
                <p>email {user.email}</p>
            </div>
        ))
    ) :(
        <p>No data is available</p>
    )}
</div>
