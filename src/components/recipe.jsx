import React , {useEffect, useState}  from "react"

export const Recipe = ({func})=>{
    const [recipe, setrecipe] = useState({})
    const addData = (e) => {
        const { name, value } = e.target
        setrecipe({
            ...recipe,
            [name]: value,
        })
    }
    async function addRecipe (e) {
        e.preventDefault();
        try{
            await fetch(` http://localhost:3001/Recipe`,{
                method:"POST",
                body: JSON.stringify(recipe),
                headers:{
                    "Content-Type": "application/json"
                }
            })
        }
        catch(e){
            console.log(e);
        }
        getRecipe()
    } 
    useEffect(()=>{
        getRecipe()
    },[])
    
    async function getRecipe(){
        try{  

            let res = await fetch(` http://localhost:3001/Recipe`)

            let data = await res.json();

            func(data);

        }
        catch(err){
            console.log(err);
        }
    }
    
    return <div className="sec1" >
        <form onSubmit={addRecipe} className="form" >
        <h1>Add Recipe</h1>
            <input className="inp" type="text" name="title" onChange={addData} placeholder="Title" />
            <input className="inp" type="text" name="ingredients" onChange={addData} placeholder="Ingredients" />
            <input className="inp" type="text" name="time" onChange={addData} placeholder="time" />
            <input className="inp" type="text" name="image" onChange={addData} placeholder="Image link" />
            <input className="inp" type="text" name="instructions" onChange={addData} placeholder="Instructions" />
            <input type="submit" className="btn" />
        </form>
    </div>
}