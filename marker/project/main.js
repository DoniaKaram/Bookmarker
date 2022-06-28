var Name = document.getElementById("name");
var Url = document.getElementById("url");
var pAlertt=document.getElementById("pAlert");
var pAlert=document.getElementById("pAlert2");
if(localStorage.getItem('Urls')==null)
{
    var  Bookmarker=[];

}
else
{
    var  Bookmarker=JSON.parse( localStorage.getItem('Urls'));
}


displayData();

function addUrl()
{
    validateName();
    validateUrl();
    if(validateName() && validateUrl() )
   
    {
    
      
        var BookmarkerList = {
       
            SiteName:Name.value,
            SiteURL:Url.value 
        }
       
        Bookmarker.push(BookmarkerList );
        console.log(Bookmarker);
        localStorage.setItem('Urls',JSON.stringify(Bookmarker));
        displayData();
        ClearInputs();
        
    }
  
 
    
    
   

}

function validateName()
{
    if(Name.value=="")
    {
        Name.classList.remove("is-valid");
        Name.classList.add("is-invalid");
        pAlertt.classList.replace("d-none","d-block");
       return false;


    }
    else
    {
        Name.classList.remove("is-invalid");
        Name.classList.add("is-valid");
        pAlertt.classList.add("d-block","d-none");
        return true;
     
     }

}
function validateUrl()
{
    if(Url.value=="")
    {
        Url.classList.remove("is-valid");
        Url.classList.add("is-invalid");
        pAlert.classList.replace("d-none","d-block");
       return false;

    }
    else
    {
        Url.classList.remove("is-invalid");
        Url.classList.add("is-valid");
        pAlert.classList.add("d-block","d-none");
       return true;
    }

}

function displayData() {
    var tr='';
    for(i=0;i<Bookmarker.length;i++)
    {
        
        document.getElementById('tbody').innerHTML=
        tr+=`<tr ">
        <td>${ Bookmarker[i].SiteName}</td>
        <td><a id="visit" class="bg-secondary text-light p-2 border-0 text-decoration-none ms-5" href="${ Bookmarker[i].SiteURL}">Visit</a></td>
        <td><button id="delete" onclick="Delete(${i}); "class="bg-primary text-light p-2 border-0 ms-5">Delete</button></td>
        </tr>
        `
    }
}
function Delete(i)
{
    Bookmarker.splice(i,1);
    localStorage.Urls=JSON.stringify(Bookmarker);
    displayData();
}

function ClearInputs(){
    Name.value = "";
    Url.value = "";
}

 