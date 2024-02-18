function MsgBox(props) {
    function message(e){
        props.message(e.target.value)
    }

    return <>
    <div className="form">
        <div className="Backdrop" onClick={props.toggelDisp}></div>
        <div className="jobOffers msgBox">
            <div className="title">
                <span>Feedback Form</span>
            </div>
            <div className="cont">
                <div className="row">
                    <div className="elements">
                        <span>Message</span>
                        <input type="text" placeholder="Message...." onChange={message}/>
                    </div>
                </div>
            </div>
            {props.errDisp&&<div className="errr">
                <span>{props.err}</span>
            </div>}
            <div className="sub">
                <button onClick={props.handleSubmit}>submit</button>
            </div>
        </div>
    </div>
    </>
}

export default MsgBox