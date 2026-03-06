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

            const statusIcon = issue.status === 'open' ? 'assets/open-Status.png' : 'assets/Closed- Status .png';
            const card = `
       <div class="card bg-white shadow-sm border border-gray-100 rounded-xl flex flex-col h-full hover:shadow-md transition-all">
            <div class="p-6 flex flex-col h-full">
                
                
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-2">
                        <img src="${statusIcon}" alt="status" class="w-5 h-5 object-contain"> 
                    </div>
                    <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-pink-50 text-pink-400 border border-pink-100">
                        ${issue.priority}
                    </span>
                </div>

                <h2 class="text-gray-800 font-extrabold text-sm mb-2 line-clamp-2 leading-tight">
                    ${issue.title}
                </h2>

               
                <p class="text-gray-400 text-[11px] line-clamp-2 mb-5 leading-relaxed">
                    ${issue.description}
                </p>

              
                <div class="flex gap-2 mb-8">
                    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-400 text-[9px] font-bold border border-red-100">
                         <img src="assets/BugDroid.png" alt="bug" class="w-3 h-3"> BUG
                    </span>
                    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-400 text-[9px] font-bold border border-orange-100">
                         <img src="assets/Lifebuoy (1).png" alt="help" class="w-3 h-3"> HELP WANTED
                    </span>
                </div>

                
                <div class="mt-auto pt-4 border-t border-gray-50">
                    <p class="text-[11px] text-gray-500 font-medium mb-1">
                        #by ${issue.user_name}
                    </p>
                    <p class="text-[11px] text-gray-300 font-medium">
                        ${issue.updatedAt.split('T')[0]}
                    </p>
                </div>

            </div>
        </div>
            `;
           issuesCard.innerHTML += card;
        })
    }


loadAllIssues();