const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
      label: "Week 2",
      url: "#"
    },
    {
      label: "Week 3",
      url: "#"
    }
  ]

  for (let i = 0; i < links.length; i++) {
    let week = document.createElement('li');
    let link = document.createElement('a');
    
    let content = links[i].label;
    link.appendChild(document.createTextNode(content));
    link.setAttribute('href', links[i].url);
    
    
    
    document.querySelector("#weeks").appendChild(week).appendChild(link);



  }

// current year for copyright on footer

const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();


