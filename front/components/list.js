
const List = ({data}) =>{
    return (
        <>
            {
            
            data ? (data.map((val,index)=>
            {
                return(
                <div key= {index}>
                    <div>{val.name}:</div>
                    {val.info ? (
                        val.info.map((val2, index2)=>{
                            return <div key={index2}>Worked as: {val2.job}, From {val2.start} To {val2.end}</div>
                        })
                    ):("")}
                </div>);
            
            })):("")
            
            }
        </>
    );
    
}


export default List;
