let userId = localStorage.getItem('user_id');
if (!userId) {
  alert('Please login first');
  window.location.href = 'index.html';
}

function loadContacts() {
  fetch(`http://127.0.0.1:5000/api/contacts/${userId}`)
    .then(res => res.json())
    .then(data => renderContacts(data));
}

function renderContacts(data) {
  const tbody = document.querySelector('#contactsTable tbody');
  tbody.innerHTML = '';
  data.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.phone}</td>
      <td>
        <button onclick="editContact(${c.id}, '${c.name}', '${c.phone}')">✏️</button>
        <button onclick="deleteContact(${c.id})">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addContact() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  if (!name || !phone) return alert('Please fill all fields');
  fetch('http://127.0.0.1:5000/api/contacts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, phone, user_id: userId})
  }).then(() => loadContacts());
}

function editContact(id, name, phone) {
  const newName = prompt("Edit name:", name);
  const newPhone = prompt("Edit phone:", phone);
  fetch(`http://127.0.0.1:5000/api/contacts/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: newName, phone: newPhone})
  }).then(() => loadContacts());
}

function deleteContact(id) {
  if (confirm("Delete this contact?")) {
    fetch(`http://127.0.0.1:5000/api/contacts/${id}`, {method: 'DELETE'})
      .then(() => loadContacts());
  }
}


function filterContacts() {
  const search = document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('#contactsTable tbody tr').forEach(tr => {
    const name = tr.children[0].innerText.toLowerCase();
    const phone = tr.children[1].innerText.toLowerCase();
    tr.style.display = (name.includes(search) || phone.includes(search)) ? '' : 'none';
  });
}

function logout() {
  localStorage.clear();
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', loadContacts);

function exportCSV() {
    fetch(`http://127.0.0.1:5000/api/export/${userId}`)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `contacts_user_${userId}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
        });
}

