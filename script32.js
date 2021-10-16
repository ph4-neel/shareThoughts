let realdata ="";
const Quotes= document.getElementById('quotes');
const Author=document.getElementById('author');
const NewQuotes=document.getElementById('newQ');
const TweetPost=document.getElementById('tweet');

const getNumber=()=>{
    let numbers=Math.floor(Math.random()*10);
    // Quotes.innerText=`${realdata[numbers].text}`;
    quotesData=realdata[numbers];
    Quotes.innerText=`${quotesData.text}`
    Author.innerText=`${realdata[numbers].author}`;
}

const post=()=>{

    let tweet=`https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweet);
}


const getData= async()=>{

    const api="https://type.fit/api/quotes";
    try{

        let data=await fetch(api);
        realdata= await data.json();
        console.log(realdata)
        getNumber();

    }

    catch (error){

    }
};

NewQuotes.addEventListener("click",getData);
TweetPost.addEventListener("click", post);
getData();
