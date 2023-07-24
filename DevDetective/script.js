
async function getUrl(url){

    try{
        let response=await fetch("https://api.github.com/users/"+`${url}`)
        let data= await response.json();
        console.log(data);
        getRender(data);
    } catch(err){
        alert("Opps Something went wrong",err)
    }
    
};

function getRender(data){

    const MainImage=document.querySelector(".imagee");
    const Name=document.querySelector(".sub-name");
    const logIn=document.querySelector(".log-in");
    const BioDetail=document.querySelector(".bio");
    const Repo=document.querySelector(".repo");
    const Follower=document.querySelector(".foll");
    const Following=document.querySelector(".flg");
    const locationn=document.querySelector(".location");
    const website=document.querySelector(".website");
    const twitter=document.querySelector(".twitter");
    const company=document.querySelector(".company");
    const date=document.querySelector(".date")


    MainImage.src = `${data?.avatar_url}`;
    Name.innerText = data?.name;
    // logIn.innerText = `${data?.login}`;
    // user.href = `${data?.html_url}`;
    date.innerText = data?.created_at;
    BioDetail.innerText = data?.bio == null? "This Profile has No Bio" : `${data?.bio}`;
    Repo.innerText = data?.public_repos;
    Follower.innerText = data?.followers;
    Following.innerText = data?.following;
    locationn.innerText = data?.location == null? "Not Available" : `${data?.location}`;
    twitter.innerText = data?.twitter_username ==null? "Not Available" :`${ data?.twitter_username}`
    company.innerText = data?.company == null? "Not Available" : `${data?.company}`;
};

const Butten=document.querySelector(".btn");

Butten.addEventListener("click",() =>{
    const inPut=document.querySelector(".search-bar");
    let name=inPut.value;
    console.log(name)
     if(name==="") {
       return;
    } else{
        getUrl(name)
    }
});
const cont=document.querySelector(".light");
const Dark=document.querySelector(".dark");
const wrapper=document.querySelector(".wrapper")
const text=document.querySelector(".text");
const light=document.querySelector(".light")

Dark.addEventListener("click",()=>{
    if(cont.innerHTML == "Dark"){
      
        Dark.src="./images/moon-icon.svg";
        wrapper.setAttribute("class","active");
        cont.innerText="Light";
        text.setAttribute("class","pop");
        light.setAttribute("class","black");

    } else{
        
        Dark.src="./images/sun-icon.svg";
        wrapper.setAttribute("class","wrapper");
        cont.innerText="Dark";
        text.setAttribute("class","text");
        light.setAttribute("class","light");
    }
})









