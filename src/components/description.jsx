export const Description = ({ e }) => {
    if (e) {
        return <div>
            
            <div id="s3">
                <div>
                    <h2  className="title" > {e.title}</h2>
                    <h3><h3 className="ind" >Ingredients :</h3> {e.ingredients}</h3>
                    <h3><h3 className="ind" >Time : </h3> {e.time}</h3>
                </div>
                <div id="img">
                    <img src={e.image} alt="image" />
                </div>
            </div>
                    <h3><h3 className="ind">Instructions : </h3> {e.instructions}</h3>
        </div>
    }
    return <></>
}