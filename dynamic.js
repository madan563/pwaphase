function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }
  }
  xhr.send(null);
  }
  getfile("dynamic.json",function(text){
    var data=JSON.parse(text);
      console.log(data);
      profile(data.basics);
      career(data.carrer);
      education(data.education);
      skills(data.skills);
})


var parent=document.querySelector('.parent');
var child=document.querySelector('.child');
var resume=document.querySelector('.resume');
function profile(pro){

  var head=document.createElement('h1');
  head.textContent="   profile   ";
  child.appendChild(head);
  parent.appendChild(child);

    var hr=document.createElement('hr');
    child.append(hr);

  var image=document.createElement('img');
  image.src=pro.img;
  child.appendChild(image);
  parent.appendChild(child);

  var head=document.createElement('h2');
  head.textContent=pro.name;
  child.appendChild(head);
  parent.appendChild(child);

  var hr=document.createElement('hr');
  child.append(hr);

  var head=document.createElement('h2');
  head.textContent=pro.email;
  child.appendChild(head);
  parent.appendChild(child);



}
function career(c){
  var h1=document.createElement('h1');
  h1.textContent="Info";
  resume.appendChild(h1);

  var hr=document.createElement('hr');
  resume.append(hr);


  var head1=document.createElement('h3');
  head1.textContent=c.info;
  resume.appendChild(head1);
  parent.appendChild(resume);

}
function education (edu){
  var h2=document.createElement('h1');
  h2.textContent="Education Details";
  resume.appendChild(h2);
  var hr=document.createElement('hr');
  resume.append(hr);

  var table=document.createElement('table');

  let row=' ';
  row += "<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"<th>"+"institute"+"</th>"+"<th>"+"year"+"</th>"+"</tr>";
  for(i in edu){
  row += "<tr>"+"<td>"+edu[i].sno +"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].institute+"</td>"+"<td>"+edu[i].year+"</td>"+"</tr>";
}
table.innerHTML=row;
resume.appendChild(table);
parent.appendChild(resume);
}
function skills(l)
{
  var hh=document.createElement("h1");
  hh.textContent="skills set";
  resume.append(hh);

  var hr=document.createElement('hr');
  resume.append(hr);

  var ul=document.createElement(ul);
  resume.append(ul);
  for(i in l)
  {
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);

  }
}
