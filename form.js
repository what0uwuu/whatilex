const form = document.getElementById("iletisimFormu");
const basari = document.getElementById("basariMesaji");

form.addEventListener("submit", async e=>{
 e.preventDefault();
 const data = new FormData(form);

 const res = await fetch("https://formspree.io/f/mdalklyp", {
  method:"POST",
  body:data,
  headers:{Accept:"application/json"}
 });

 if(res.ok){
  form.style.display="none";
  basari.innerText="Mesaj gönderildi!";
  basari.style.display="block";
 }
});
