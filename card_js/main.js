

function card(title, cName, views, monthOld, duration, thumbnail) {
    // document.body.style.backgroundColor = "black"
    let box2 = document.createElement("div")
    box2.style.display="flex"
    box2.style.gap="10px"
    box2.style.marginTop="50px"



    let container = document.querySelector(".box")
    let Image = document.querySelector(".image")
    let Detail = document.querySelector(".details")
    
    container.style.width="1000px"
    container.style.height="112px"
    container.style.border="2px solid black"
    container.style.backgroundColor="darkGray"
    


    let img = document.createElement("img")
    img.src=thumbnail
    img.style.width="200px"
    Image.style.position="relative"

    let Title = document.createElement("h1")
    Title.innerText = title
    
    let time = document.createElement("h3")
    time.innerText=duration
    time.style.position="absolute"
    time.style.bottom="0px"
    time.style.right="0px"
    time.style.backgroundColor="white"



    let detail = document.createElement("h3")
    detail.innerText= cName

    let Views= document.createElement("h3")
    Views.innerText=views

    let MonthOld= document.createElement("h3")
    MonthOld.innerText=monthOld
    
    Image.append(time)
    Image.append(img)
    Detail.append(Title,box2)
    box2.append(detail,Views,MonthOld )

}
card("Introduction to backend:sigma playlist", "codeWithHarry", "556k", "7 months", "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")



