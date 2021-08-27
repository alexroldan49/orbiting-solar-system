import { useEffect, useState } from "react"


function Comments({planet, API, setPlanets}){
    const [user, setUser] = useState("")
    const [comment, setComment] = useState("")
    const [submittedCom, setSubmittedCom] = useState([])
    // const [comObj, setComObj] = useState({
    //     user:"",
    //     comment:""
    // })
    

    function handleUserChange(e){
        return setUser(e.target.value);
    }
    
    function handleCommentChange(e){
        return setComment(e.target.value)
    }
    // function handleNewCom(e){
    //     return setComObj({
    //         ...comObj,
    //         [e.target.name : e.target.value]
    //     })
    // }

    function submitComment(e){
        e.preventDefault()

        // const newComment = [...planet.comments,comment ]
        // console.log(newComment)
                fetch(`${API}/${planet.id}`,{
                method: "POST",
                body: JSON.stringify({
                    comments: [...planet.comments,{user: user, comment: comment}]
                  }),
                headers:{
                    "Content-Type": "application/json"
                }
                  .then(r=> r.json())
                  .then(data=> console.log(data))
            }).then(()=>{
                if(user.length && comment.length > 0){
                const comData = { user: user, comment: comment};
                const dataArray = [ submittedCom, comData];
                setSubmittedCom(dataArray)
                console.log(dataArray)
                // setPlanet(dataArray)
                setUser("")
                setComment("")}
                else{
                    alert("UserName and Comment required")
                }
            })
           
    }


    const listOfSubmits = submittedCom.map((com)=>{
        return(
            <div className="commentCard">
                <h4>UserName: {com.user}</h4>
                <h3>
                    {com.comment}
                </h3>
            </div>
        )
    })

return(
    <>
        <div className="comments">
            <form onSubmit={submitComment} >
                <input type="text" placeholder="User Name..." value={user} onChange={(e)=>handleUserChange(e)} />
                <textarea type="text" placeholder="Comment..." value={comment} onChange={(e)=>handleCommentChange(e)}/>
                <button>Post</button>
            </form>
        </div>
        <div>
                <h3>Comments</h3>
                {listOfSubmits}
        </div>
            </>
)
}


export default Comments