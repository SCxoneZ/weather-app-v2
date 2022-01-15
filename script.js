const input = document.querySelector('.container .input-wrapper input');
const city = document.querySelector('.city-name');
const degree = document.querySelector('.degree-value');
const img = document.querySelector('.status-wrapper img');
const humidity = document.querySelector('.humidity-value');
const wind = document.querySelector('.wind-value');
const status = document.querySelector('.status-value');
const api = {
  apikey: '681f35b64d6e9f95a76677364a4f78b0',
  getData(city){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`).then(res => res.json()).then(data => data).catch(err => err)
  }
}

def();

async function def(){
  const data = await api.getData('Jakarta');
  if(data.cod !== 200) return alert('Invalid');
  input.value = 'Jakarta';
  city.innerHTML = data.name;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  degree.innerHTML = data.main.temp;
  status.innerHTML = data.weather[0].main;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
}

input.addEventListener('change', async () => {
  const data = await api.getData(input.value);
  if(data.cod !== 200) return alert('Invalid');
  city.innerHTML = data.name;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  degree.innerHTML = data.main.temp;
  status.innerHTML = data.weather[0].main;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
})