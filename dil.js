const diller = {
  tr: {
    heroBaslik:"Modern işletmeler için ölçeklenebilir yazılımlar geliştiriyoruz",
    heroAlt:"Özel sistemler, otomasyon çözümleri ve yüksek performanslı web platformları.",
    heroButon:"Proje Başlat",
    hizmetBaslik:"Hizmetlerimiz",
    h1:"Otomasyon Sistemleri",
    h2:"Özel Yazılım",
    h3:"Web Platformları",
    h4:"Botlar & Entegrasyonlar",
    projeBaslik:"Projeler",
    projeMetin:"İçerik Yönetimi, Discord Botu, Takım Paneli",
    hakkindaBaslik:"Hakkımızda",
    hakkindaMetin:"WHATILEX modern yazılım çözümleri geliştiren bir stüdyodur.",
    iletisimBaslik:"İletişim",
    isim:"Adınız",
    eposta:"E-posta",
    mesaj:"Mesajınız",
    gonderBtn:"Gönder",
    footerMetin:"© 2026 WHATILEX Software"
  },
  en: {
    heroBaslik:"We build scalable software for modern businesses",
    heroAlt:"Custom systems, automation tools and high performance platforms.",
    heroButon:"Start Project",
    hizmetBaslik:"Our Services",
    h1:"Automation Systems",
    h2:"Custom Software",
    h3:"Web Platforms",
    h4:"Bots & Integrations",
    projeBaslik:"Projects",
    projeMetin:"CMS, Discord Bot, Team Management Panel",
    hakkindaBaslik:"About Us",
    hakkindaMetin:"WHATILEX is a modern software development studio.",
    iletisimBaslik:"Contact",
    isim:"Your Name",
    eposta:"Email",
    mesaj:"Your Message",
    gonderBtn:"Send",
    footerMetin:"© 2026 WHATILEX Software"
  }
}

function dilDegistir(d){
  const x = diller[d];
  for(let id in x){
    if(document.getElementById(id))
      document.getElementById(id).innerText = x[id];
  }
}
dilDegistir("tr");
