const WA='967711287865';
function orderDish(name){
  const msg=`مرحباً مطعم كشري لوز وورد، أريد طلب: ${name}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank','noopener');
}
function toggleMenu(){document.querySelector('.mobile-menu')?.classList.toggle('show')}
function setupDelete(){
  const form=document.getElementById('deleteForm'); if(!form)return;
  const modal=document.getElementById('confirmModal'), success=document.getElementById('successBox');
  form.addEventListener('submit',e=>{e.preventDefault();const phone=document.getElementById('phone').value.trim();if(phone.length<7){alert('يرجى إدخال رقم هاتف صحيح.');return} modal.classList.add('show')});
  document.getElementById('cancelDelete')?.addEventListener('click',()=>modal.classList.remove('show'));
  document.getElementById('confirmDelete')?.addEventListener('click',()=>{modal.classList.remove('show');success.style.display='block';form.style.display='none';});
}
document.addEventListener('DOMContentLoaded',setupDelete);
