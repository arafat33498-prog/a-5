let allIssues = []; 

const loadAllIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then ((data) =>{
        allIssues = data.data
        console.log(allIssues)
    })

}
loadAllIssues();