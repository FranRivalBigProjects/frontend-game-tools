const res=document.getElementById('res');
function run(){
  const val=document.getElementById('code').value;
  res.innerText='Frames simulated: '+val.split('\n').length;
}