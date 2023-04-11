const addToDb=id=>{
    let jobs={};
    const storedJobs=localStorage.getItem('job-bd');
    if(storedJobs){
     jobs=JSON.parse(storedJobs);
    }
    // add quantity
    const quantity=jobs[id];
    if(quantity){
        const newQuantity = quantity + 1;
        jobs[id]=newQuantity; 
    }else{
        jobs[id]=1;
    }
    localStorage.setItem('job-bd', JSON.stringify(jobs));
}

const getJobFromStorage=()=>{
    let jobs={};
    const storedJobs=localStorage.getItem('job-bd');
    if(storedJobs){
        jobs=JSON.parse(storedJobs);
    }
    return jobs;
}
export {addToDb, getJobFromStorage};