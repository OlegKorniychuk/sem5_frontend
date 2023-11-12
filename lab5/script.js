const submitButton = document.getElementById("submitButton");
submitButton.onclick = () => {
  form = {
    fullName: document.getElementById("fullNameInput"),
    group: document.getElementById("groupInput"),
    idCard: document.getElementById("idCardInput"),
    birthDate: document.getElementById("birthDateInput"),
    telegram: document.getElementById("telegramInput")
  };
  formError = 0;
  if (!/^[А-ЯІЄ][а-яіїє']+\s(?:[А-ЯЄЇІ]\.){2}$/.test(form.fullName.value)) {
    form.fullName.style.backgroundColor = "red";
    formError = 1;
  } else {
    form.fullName.style.backgroundColor = "white";
  }
  if (!/^[А-ЯІЄ]{2}-[0-9]{2}$/.test(form.group.value)) {
    form.group.style.backgroundColor = "red";
    formError = 1;
  } else {
    form.group.style.backgroundColor = "white";
  }
  if (!/^[А-ЯЭІЇ]{2}\s№[0-9]{6}$/.test(form.idCard.value)) {
    form.idCard.style.backgroundColor = "red";
    formError = 1;
  } else {
    form.idCard.style.backgroundColor = "white";
  }
  if (!/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(form.birthDate.value)) {
    form.birthDate.style.backgroundColor = "red";
    formError = 1;
  } else {
    form.birthDate.style.backgroundColor = "white";
  }
  if (!/^@[A-Za-z0-9]+$/.test(form.telegram.value)) {
    form.telegram.style.backgroundColor = "red";
    formError = 1;
  } else {
    form.telegram.style.backgroundColor = "white";
  }

  const info = document.createElement('div');
  info.id = 'info';
  info.appendChild(document.createTextNode(`ПІБ: ${form.fullName.value}`));
  info.appendChild(document.createElement('br'))
  info.appendChild(document.createTextNode(`Група: ${form.group.value}`));
  info.appendChild(document.createElement('br'))
  info.appendChild(document.createTextNode(`ID картка: ${form.idCard.value}`));
  info.appendChild(document.createElement('br'))
  info.appendChild(document.createTextNode(`Дата народження: ${form.birthDate.value}`));
  info.appendChild(document.createElement('br'))
  info.appendChild(document.createTextNode(`Телеграм: ${form.telegram.value}`));
  info.appendChild(document.createElement('br'))

  if (!formError) {
    if (document.getElementById('info')) document.getElementById('info').remove();
    document.body.appendChild(info);
  }
}