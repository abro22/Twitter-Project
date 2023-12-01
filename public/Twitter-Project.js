

fetch("http://localhost:3000/tweet")

    .then((response) => {

        return response.json()

    })

    .then((jsonResponse) => {

        console.log(jsonResponse)


        const article = jsonResponse

        // const main = doucment.getElementById("main")

        const likes1 = document.getElementById("likes1")

        const likes2 = document.getElementById("likes2")
        const likes3 = document.getElementById("likes3")
        const likes4 = document.getElementById("likes4")
        const likes5 = document.getElementById("likes5")
        const likes6 = document.getElementById("likes6")

        const header1 = document.getElementById("header1")
        const header2 = document.getElementById("header2")
        const header3 = document.getElementById("header3")
        const header4 = document.getElementById("header4")
        const header5 = document.getElementById("header5")
        const header6 = document.getElementById("header6")

        const content1 = document.getElementById("content1")
        const content2 = document.getElementById("content2")
        const content3 = document.getElementById("content3")
        const content4 = document.getElementById("content4")
        const content5 = document.getElementById("content5")
        const content6 = document.getElementById("content6")



        header1.textContent = article[0].author
        content1.textContent = article[0].tweet
        likes1.textContent = "Likes " + article[0].likes

        header2.textContent = article[1].author
        content2.textContent = article[1].tweet
        likes2.textContent = "Likes " + article[1].likes

        header3.textContent = article[2].author
        content3.textContent = article[2].tweet
        likes3.textContent = "Likes " + article[2].likes

        header4.textContent = article[3].author
        content4.textContent = article[3].tweet
        likes4.textContent = "Likes " + article[3].likes

        header5.textContent = article[4].author
        content5.textContent = article[4].tweet
        likes5.textContent = "Likes " + article[4].likes

        header6.textContent = article[5].author
        content6.textContent = article[5].tweet
        likes6.textContent = "Likes " + article[5].likes



    })
