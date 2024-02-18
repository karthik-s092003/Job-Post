

function Application(props){

   
    const accept = async ()=> {
        props.error()
        await props.accept({
            Name: props.Name,
            msg:"",
            status:"accepted",
            companyName: props.companyName,
            title: props.title
        })
        props.toggelDisp()
       
    }
    const reject = async()=> {
        props.error()
        await props.accept({
            Name: props.Name,
            msg:"",
            status:"rejected",
            companyName: props.companyName,
            title: props.title
        })
        props.toggelDisp()
    }

    return <>
   
    <div className="post">
            <div className="one">
                 <h2>{props.Name}</h2>
            </div>
            <div className="two">
            <span>{props.title}</span>
            </div>
            <div className="three">
            <span>{props.Qualification}</span>
            <span>{props.Experience}</span>
            <span>{props.Previous_ctc}</span>
            <span>{props.ReasonToJoin}</span>
            </div>
            <div className="four">
                <button onClick={accept}>Accept</button>
                <button onClick={reject}>Reject</button>
            </div>
    </div>
    </>
}

export default Application