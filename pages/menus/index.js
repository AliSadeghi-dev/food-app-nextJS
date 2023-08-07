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
    const data = await fetch(`${process.env.BASE_URL}/data`);
    const foods = await data.json();
    return{
        props:{
            data:foods,
            revalidate:60*60,
        }
    }
}