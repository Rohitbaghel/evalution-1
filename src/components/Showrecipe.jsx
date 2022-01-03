export const Showrecipe = ({data , func})=>{
    if(data){
   
       return data.map((e,i) =>  <h3 key={i}> {e.id}  {e.title} <button onClick={()=>{func(e)}} >Show</button> </h3> )
        
    }
    return <></>
   }