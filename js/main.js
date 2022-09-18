//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicOfDay)

function getPicOfDay(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=gTyNqfOHoVwmXaaef7oQLK5AQ7Yo6Bn9T8Sv8oaG&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.code == '404' || data.code == '400'){
          document.querySelector('h2').innerHTML = `No data available for date: ${today}`
        }else if( data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').style.display = 'block'
          document.querySelector('img').style.opacity = '1'
        }else if( data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = 'none'
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}