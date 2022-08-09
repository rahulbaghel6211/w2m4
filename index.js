function displayArtical(){
    document.getElementById("display").innerHTML="";
    var url = `https://jsonmock.hackerrank.com/api/articles?page=1`;
    async function articalData(){
        try {
            var res = await fetch(url);
            var data = await res.json();
            articalDisplay(data);
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
    articalData();

  {
      articalDisplay=(data) => {
        data.data.forEach((data) => {
            console.log(data);

            let div = document.createElement("div");
            let title = document.createElement("p");
            title.innerHTML=data.title;
            let h1 = document.createElement("p");
            h1.textContent = data.author;
            div.append(title,h1);
            document.getElementById('display').append(div);
        });
    };
   }

}
displayArtical()