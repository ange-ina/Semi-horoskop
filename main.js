function myFunc() {
    let month = document.getElementById("month").value
    let mon = month.toLowerCase()
    if (mon == "mar") {
       
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="">
        <h2>Your horoscope is Aries</h2>
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"

    } else if (mon == "apr") {
       
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="">
        <h2>Your horoscope is Taurus</h2>
        <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "may") {
     
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="">
        <h2>Your horoscope is Gemini</h2>
        <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jun") {
      
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="">
        <h2>Horoscopes are Cancer</h2>
        <p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jul") {
    
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="">
        <h2>Your horoscope is Leo</h2>
        <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "aug") {
     
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="">
        <h2>Your horoscope is Virgo</h2>
        <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "sep") {
   
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="">
        <h2>Your horoscope is Libra</h2>
        <p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "oct") {
      
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="">
        <h2>Your horoscope is Hank Scorpio</h2>
        <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "nov") {
    
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="">
        <h2>Your horoscope is Sagittarius</h2>
        <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "dec") {
      
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="">
        <h2>Your horoscope is Capri Sun</h2>
        <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jan") {
    
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="">
        <h2>Your horoscope is Aquarius</h2>
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "feb") {
       
        document.getElementById("text").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="">
        <h2>Your horoscope is Pissces</h2>
        <p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>`
        document.getElementById("text").style.boxShadow = "2px 2px 2px 4px #666"
    } else {
      
        document.getElementById("text").innerHTML = "<h2>Give your month</h2>"
        document.getElementById("text").style.color = 'red'
    }
} 
