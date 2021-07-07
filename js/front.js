function ack() {
  const myForm = document.getElementById('newForm');
  //const obj={}

  //list..........................................................
  const ul = document.getElementById('display');
  ul.innerHTML = '';
  const hd = document.createElement('h4');
  hd.innerHTML = 'USER INPUTS : ';
  ul.append(hd);
  ul.style.backgroundColor = '#fff2cc';
  ul.style.fontSize = 'medium';
  for (var j = 0; j < myForm.elements.length; j++) {
    if (
      myForm.elements[j].tagName == 'INPUT' ||
      myForm.elements[j].tagName == 'TEXTAREA' ||
      myForm.elements[j].tagName == 'SELECT'
    ) {
      const li = document.createElement('li');
      li.innerHTML = myForm.elements[j].name + ' : ' + myForm.elements[j].value;
      ul.append(li);
    }
  }

  //table.........................................................
  const tbl = document.getElementById('tbl');
  tbl.style.backgroundColor = '#ffe6e6';
  tbl.style.padding = '3px';
  tbl.style.width = '100%';
  const row = document.createElement('tr');
  tbl.append(row);
  const head1 = document.createElement('th');
  head1.innerHTML = 'S.No';
  row.append(head1);
  const head2 = document.createElement('th');
  head2.innerHTML = 'TITLE';
  row.append(head2);
  const head3 = document.createElement('th');
  head3.innerHTML = 'USER VALUE';
  row.append(head3);
  for (var x = 0; x < myForm.elements.length; x++) {
    if (
      myForm.elements[x].tagName == 'INPUT' ||
      myForm.elements[x].tagName == 'TEXTAREA' ||
      myForm.elements[x].tagName == 'SELECT'
    ) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      tr.append(x + 1);
      td1.innerHTML = myForm.elements[x].name;
      tr.append(td1);
      td2.innerHTML = myForm.elements[x].value;
      tr.append(td2);
      tbl.append(tr);
    }
  }

  event.preventDefault();
  const f = document.getElementById('newForm').elements[4].value;
  if (f.match(/\d{10}/)) alert('Submitted successfully!!!');
  else alert('Re-enter mobile number');
}
cDate.min = new Date().toISOString().split('T')[0];
