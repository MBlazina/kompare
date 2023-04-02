const faq = [
  {
    title: "Koje načine plaćanja mogu koristiti?",
    content: "Faq 1 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Jesu li u cijenu uključeni svi obavezni porezi?",
    content: "Faq 2 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Od kojih osiguravajućih kuća ću dobiti ponudu?",
    content: "Faq 3 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Je li Kompare usluga  za mene stvarno besplatna? ",
    content: "Faq 4 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Je li Kompare osiguravajuća kuća?",
    content: "Faq 5 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Jesu li moji podaci i plaćanje sigurni? ",
    content: "Faq 6Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },
  {
    title: "Što u slučaju štete? Kome se trebam obratiti?",
    content: "Faq 7 Da, sukladno zakonu obračunat je i u cijenu uključen poseban porez na osiguranja."
  },]

document.addEventListener("DOMContentLoaded", function () {
  const faqElement = document.querySelector('.faq-container')

  const numberOfFirstMenuItems = Math.floor(faq.length / 2)

  faq.forEach((faqItem, index) => {
    const leftAccordionList = document.querySelector('.leftAccordion')
    const rightAccordionList = document.querySelector('.rightAccordion')

    const li = document.createElement('li')
    li.classList.add('faq-item')
    const label = document.createElement('label')

    let labelContent = ''
    labelContent += '<input class="faq-item-toggle" type="checkbox" />'
    labelContent += '<div class="accordion-title">'
    labelContent += '<div class="accordionIcon"></div>'
    labelContent += `<p class="faq-item-title">${faqItem.title}</p>`
    labelContent += '</div>'
    labelContent += `<div class="faq-item-content">${faqItem.content}</div>`

    label.innerHTML = labelContent
    li.append(label)

    if (index + 1 <= numberOfFirstMenuItems) {
      leftAccordionList.append(li)
    } else {
      rightAccordionList.append(li)
    }
    faqElement.append(leftAccordionList)
    faqElement.append(rightAccordionList)
  })

  /* SPLIT MENU */





})