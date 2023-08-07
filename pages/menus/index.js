import React from 'react'
import MenuPage from "../../components/templates/MenuPage"

function menus({data}) {
  return (
    <>
      <MenuPage data={data} />
    </>
  );
}

export default menus;


export async function getStaticProps(){
    const data = await fetch("http://localhost:4000/data")
    const foods = await data.json();
    return{
        props:{
            data:foods,
            revalidate:60*60,
        }
    }
}