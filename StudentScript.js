fetch('Students.Json')
    .then(function(response){
        return response.Json();
    })
    .then(function(Students){
        let placeholder = document.querySelector("#output");
        let displayData = "";

        for(let student of Students){
            displayData += `
                <tr>
                    <td>${student.lrn}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.section}</td>
                    <td><img src='${student.image}' /></td>
                </tr>
            `;
        }

        placeholder.innerHTML = displayData;
    });
