import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div> <div className='bg-[#F4F4F4] pb-5 font-Helvetica'>
      <Link to='/'><h5 className='text-[#B8B8B8] underline text-[18px] px-[20px] pt-[12px]'>Haqqımızda</h5></Link>
      <h2 className='text-[#292929] font-bold text-[28px] px-5 py-[15px] '>Haqqımızda</h2>
      <p className='text-[#292929] px-5 py-2 text-[22px]'>Park Cinema - 4 meydançadan ibarət ən böyük nüfuzlu kinoteatrlar şəbəkəsidir. Ən yüksək texniki tələblərə cavab verən kinoteatrlar Park Bulvar, MetroPark, Park Zagulba AVM, Bakının yeni simvolu Flame Towers-in yüksək səviyyəli ticarət mərkəzi.</p>
      <p className='text-[#292929] px-5 py-2 text-[16px]'>Əfsanəvi komfort və zalların keyfiyyətindən savayı, Park Cinema Azərbaycanda əzəmətli IMAX formatının yeganə nümayəndəsidir. Şəbəkə repertuarına festival filmləri və arthausdan başqa, ən məşhur premyeralar daxildir. Hər il Park Cinema şəbəkəsində kinofestivallar keçirilir, müntəzəm olaraq qala-premyeralar və press-nümayişlər, sadiq tamaşaçılar üçün geniş aksiyalar və filmlərin xeyriyyə nümayişi təşkil olunur. Şəbəkə Facebook və İnstagram sosial şəbəkələrində öz fəallığı,  kontentə və istifadəçilərlə ünsiyyətə yaradıcı yanaşma ilə  məşhurlaşıb və Azərbaycanın ən müzakirə olunan və populyar kinoman qrupu statusunu alıb (Socialbakers*-in məlumatına əsasən). Onu da qeyd edək ki, brend Bakının kübar həyatının çoxsaylı mühüm hadisələrinin tərəfdaşıdır, bu da Park Cinema-nın yüksək statusunun rəmzidir. </p>
      <p className='text-[#292929] px-5 py-2 text-[16px]'>*Socialbakers- sosial şəbəkələrdə ən məşhur hesabat və statistika xidmətidir. Park Cinema səhifəsi istifadəçilərin sorğularının 98%-ni cavablandırdığına görə sertifikat alıb. </p>
      <p className='text-[#292929] px-5 font-bold py-2 text-[18px]'>FLAME CINEMA MMC </p>
      <p className='text-[#292929] font-medium px-5  py-2 text-[18px]'>AZ1060, Bakı ş-ri, Nizami r-nu AZƏR MANAFOV ev.14, m.54</p>
      <p className='text-[#292929] font-medium px-5 py-2 text-[18px]'>AZ1006, Bakı ş-ri, Səbail r-nu, M.Hüseyn küçəsi, 1A</p>
    </div></div>
  )
}

export default About