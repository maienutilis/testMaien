const axios = require('axios');

export const getData = async (req,response)=>{
    try{
        let contactData = []
        const res = await axios.get('https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122');
        
        for (let i=0 ; i< res.data.length; i++){
            
            let name ='';
            const arrD = []

            // get name 
            if (res.data[i].contact_info.name.formatted_name){
                name = res.data[i].contact_info.name.formatted_name;
            }
            
            // get job, start and end date
            res.data[i].experience.forEach((val)=>{
                arrD.push({
                    start: val.start_date,
                    end: val.end_date,
                    job: val.position_type 
                })
            }   
            );
            contactData.push(
                { 
                    name: name,
                    info: arrD
                }
            );
        }        
        response.json(contactData);
    }catch (err){
        console.log(err)
    }
}
