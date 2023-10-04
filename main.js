let getResidents = document.querySelector('button')

let myDiv = document.querySelector('div')


getResidents.addEventListener('click', () => {
    console.log("button clicked")
    axios
    .get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res) => {
        let resURLArr = res.data.results[0].residents

        for (let i = 0; i <resURLArr.length; i = i + 1) {
            axios.get(resURLArr[i])
            .then((residentResponse) => {
                let newElement = document.createElement('h2')
                newElement.innerHTML = residentResponse.data.name
                myDiv.appendChild(newElement)
            })
        }
    })

})