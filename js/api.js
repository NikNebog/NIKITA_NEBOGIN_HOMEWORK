const petro = document.getElementById('Petro')
const stam = document.getElementById('Albuquerque')
const tucson = document.getElementById('Tucson')
async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m')
    const respons_stam = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.0845&longitude=-106.6511&current=temperature_2m')
    const respons_tucs = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m')
        
    const data_petro = await respons_petro.json()
    const data_stam = await respons_stam.json()
    const data_tucs = await respons_tucs.json()
    return [data_petro, data_stam, data_tucs]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C `
        stam.textContent =`Air temperature: ${out[1].current.temperature_2m} \u00B0C `
        tucson.textContent=`Air temperature: ${out[2].current.temperature_2m} \u00B0C `

    }
    catch(error){
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()