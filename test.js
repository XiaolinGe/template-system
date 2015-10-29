function rename(obj,old_key,new_key){
  obj[new_key]=obj[old_key];
  delete obj[old_key];
  return obj;
}

let arrs =  [
  { id: 2,
    display: 'gallery',
    link: '/gallery',
    customer_id: '1',
    created_at: null,
    updated_at: null },
  { id: 3,
    display: 'phone',
    link: '/phone',
    customer_id: '1',
    created_at: null,
    updated_at: null }];


arrs.map(e=>rename(e,"link","new_link"))
  .map(e=>console.log(e));
