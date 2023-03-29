const searchBtn = document.getElementById('search')
const  inp = document.getElementById('countryInp')
const results = document.getElementById('answer')


searchBtn.addEventListener('click',()=>{
    let countryName = inp.value
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    // console.log(url)
    fetch(url).then((res)=>res.json()).then((data)=>{
        // console.log(data[0])
        // console.log(data[0].capital[0])
        // console.log(data[0].flags.svg)
        // console.log(data[0].name.common)
        // console.log(data[0].continents[0])
        // console.log(Object.keys(data[0].currencies)[0])
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        // console.log(Object.values(data[0].languages).toString().split(',').join(','));


        results.innerHTML = `
        <h1>${data[0].name.common}</h1>
            <img src="${data[0].flags.svg}" class="flag-img"/>
            <div class="txt">
                <h4>Continent:<span> ${data[0].continents[0]}<span/></h4>
                <h4>Population:<span> ${data[0].population}<span/></h4>
                <h4>Capital: <span> ${data[0].capital[0]}<span/></h4>
                <h4>Currency:<span> ${Object.keys(data[0].currencies)[0]}<span/></h4>
                <h4>Currency Name:<span> ${data[0].currencies[Object.keys(data[0].currencies)].name}<span/></h4>
                <h4>Common Language: <span> ${Object.values(data[0].languages).toString().split(',').join(',')}<span/></h4>
            </div>
        `
    }).catch(()=>{
        if(countryName===''){
            results.innerHTML = `<h2>Input can't be empty<h2>`
        }else{
            results.innerHTML = `<h2>Please enter a valid Country name<h2>`

        }
    })
    
    
})
