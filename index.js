
//yes
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')
const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "moody.webp",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.webp",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.webp",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused1.webp",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.webp",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: true,
        image: "happy123.webp",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.webp",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.webp",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insom.webp",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insom2.webp",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.webp",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nerv1.webp",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.webp",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.webp",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry1.webp",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry11.webp",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused.webp",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant2.webp",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy12.webp",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused11.webp",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry22.webp",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry33.webp",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insom222.webp",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "happyanal.webp",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relax123.webp",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nerv123.webp",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "scare.webp",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sady1.webp",
        alt: "A cat looking sad",
    },
]

emotionRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal(){
    memeModal.style.display = 'none'
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    
    if(catsArray.length === 1){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray 
    }  
}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




