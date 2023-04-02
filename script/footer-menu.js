const footerMenu = [
  {
    title: "KOMPARE SERVIS",
    items: [
      {
        title: "Kompareovci",
        url: "#",
      },
      {
        title: "Iskustva kupaca",
        url: "#",
      },
      {
        title: "Za partnere",
        url: "#",
      },
      {
        title: "Poslovi",
        url: "#",
      },
      {
        title: "Poslovni podaci",
        url: "#",
      },
      {
        title: "Uredi i kontakt",
        url: "#",
      }]
  },
  {
    title: "Online Kupovina",
    items: [
      {
        title: "Postupak ugovaranja",
        url: "#",
      },
      {
        title: "Česta pitanja",
        url: "#",
      },
      {
        title: "Načini plaćanja auto osiguranja",
        url: "#",
      },
      {
        title: "Načini plaćanja dopunskog zdravstvenog osiguranja",
        url: "#",
      },
      {
        title: "Provjera police dopunskog zdravstvenog osiguranja",
        url: "#",
      },
      {
        title: "Upute za refundaciju i ugovorne ustanove ",
        url: "#",
      }]
  },

  {
    title: "SIGURNOST KUPACA",
    items: [
      {
        title: "Informacije o obradi osobnih podataka",
        url: "#",
      },
      {
        title: "Pravne obavijesti",
        url: "#",
      },
      {
        title: "Reklamacije i pritužbe",
        url: "#",
      },
      {
        title: "Otkazivanje ugovora i raskid police",
        url: "#",
      },
      {
        title: "Obavijest potrošačima",
        url: "#",
      },
      {
        title: "Akcije u osiguranju",
        url: "#",
      },
      {
        title: "Zakonski termini za vrstu osiguranja",
        url: "#",
      }]
  }]

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector('footer')
  const footerNav = footer.querySelector('nav')
  const menu1 = footerNav.querySelector('.menu-1')

  footerMenu.forEach((menu, index) => {
    const targetMenu = document.querySelector('.menu-' + (index + 1))
    const menuTitle = document.createElement('p')
    const submenu = document.createElement('ul')

    menuTitle.innerText = menu.title

    targetMenu.append(menuTitle)
    targetMenu.append(submenu)
    menu.items.forEach(subItem => {

      const submenuItem = document.createElement('li')
      const submenuItemLink = document.createElement('a')
      submenuItemLink.innerText = subItem.title
      submenuItemLink.setAttribute('href', subItem.url)
      submenuItem.append(submenuItemLink)
      submenu.append(submenuItem)

      targetMenu.append(submenu)
    })
  })
});