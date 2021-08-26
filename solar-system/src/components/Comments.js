import { useState } from "react"


function Comments({planet, API}){
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
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comments: [...planet.comments,{user: user, comment: comment}]
              })
        }).then(()=>{
            if(user.length && comment.length > 0){
            const comData = { user: user, comment: comment};
            const dataArray = [...submittedCom, comData];
            setSubmittedCom(dataArray)
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
                <h3>
                {com.user} : {com.comment}
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