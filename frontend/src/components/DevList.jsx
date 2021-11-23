function DevList(props) {
    return (
        <>
            <table border={'0'} style={{marginTop:'20px'}}>
                <tr>
                    <td valign="top" width="150px">
                        <img src={props.img} width={'150px'} height={'150px'} />
                        <br />
                        {props.children}
                    </td>
                    <td valign={'top'}>
                        <div className="profileTopics">
                            {props.name}<br /> 
                            {props.status} <br />
                            Lives in {props.location} <br />
                            {props.profile} <br />
                            <b style={{color:'#03A9F4'}}>Skills:</b> <br />
                            <span style={{color:'#03A9F4'}}>{props.skills}</span>
                        </div>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default DevList;