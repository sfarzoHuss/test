console.log('a');
fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
  console.log(json);



  var serviceContent = `  <div class="col-lg-12 col-md-12 icon-box">
  <div class="icon"><i class="icofont-computer"></i></div>
  <h4 class="title"><a href="">Lorem Ipsum</a></h4>
  <p class="description">tony</p>
  </div>`

  var servicesDivFirstRow=document.getElementById("servicesDivFirstRow");
  for (let i = 0; i< json.length; i++) {
    console.log(i);
    var x = document.createElement('div');
    var currentServiceContent = serviceContent;
    currentServiceContent=currentServiceContent.replace('Lorem Ipsum',json[i].name);
    currentServiceContent=currentServiceContent.replace('tony',json[i].description);
    x.innerHTML = currentServiceContent;
    console.log(i);
    servicesDivFirstRow.appendChild(x);      // didn't work with me 
      }
  })