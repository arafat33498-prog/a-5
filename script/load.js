let allIssues = []; 

const loadAllIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then ((data) =>{
        allIssues = data.data
        console.log(allIssues);
        displayIssues(allIssues)
    })

}
    const displayIssues = (issues) => {
        const issuesCard = document.getElementById("issues-card")
        issuesCard.innerHTML = ""

        issues.forEach(issue => {
            const card = `
            <div class="card bg-base-100 shadow-xl border">
                <div class="card-body">
                    <h2 class="card-title text-lg">${issue.title}</h2>
                    <p class="text-sm text-gray-600">${issue.description}</p>
                    <div class="card-actions justify-end mt-4">
                        <div class="badge badge-outline">${issue.status}</div>
                        <div class="badge badge-primary">${issue.priority}</div>
                    </div>
                </div>
            </div>
            `;
           issuesCard.innerHTML += card;
        })
    }


loadAllIssues();