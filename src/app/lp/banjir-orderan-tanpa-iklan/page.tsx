import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image'
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Jualan Laris Manis di Marketplace Tanpa Iklan | Ebook eCommerce Pemula Anti Boncos',
  description: 'Belajar jualan di marketplace tanpa iklan! Cocok untuk pemula eCommerce yang ingin cuan lewat strategi organik dan teknik proven anti boncos.',
  keywords: 'jualan di marketplace, jualan tanpa iklan, kelas ecommerce pemula, ebook pemula ecommerce, skill monetization, cara jualan online tanpa ads, jualan di Shopee Tokopedia, strategi organik marketplace, mentor jualan marketplace, jualan gratis tanpa iklan'
};

const Page = () => {
  return (
    <div className='p-3 md:p-6 lg:p-10 flex items-start justify-center'>
      <Card className='max-w-3xl w-full'>
        <CardHeader></CardHeader>
        <CardContent>
          <div className='flex flex-col'>
            <div className='capitalize text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
              <p><span className='bg-[#fffc00] dark:text-black'>Kamu baru mulai jualan di marketplace? Atau sudah ngiklan tapi hasilnya tidak sesuai harapan? Alhasil cuma boncos iklan doang!
              </span></p>
            </div>
            <div className='uppercase mt-5 mb-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-[#fffc00] text-red-600'>
              <p>Ini dia solusi Banjir Orderan tanpa boncos karena iklan!</p>
            </div>

            <div>
              <Image
                src='/assets/img/banjir-orderan-tanpa-iklan.jpg'
                alt='Banjir Orderan Tanpa Iklan'
                width={1000}
                height={1000}
                className='w-full h-auto'
              />
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-2xl font-bold text-center'>
              <p>Temukan hacks yang terbukti untuk mendatangkan traffic pengunjung ke produk-produk yang kamu jual di marketplace –
                <span className='bg-[#fffc00] dark:text-black'>tanpa mengeluarkan uang sepeser pun untuk iklan.</span></p>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <p>Mau hasil seperti ini?</p>
            </div>

            <div>
              <Image
                src='/assets/img/report-2025.jpg'
                alt='laporan performa penjualan 2025'
                width={1000}
                height={1000}
                className='w-full h-auto'
              />
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <p>atau ini?</p>
            </div>

            <div>
              <Image
                src='/assets/img/report-2024.jpg'
                alt='laporan performa penjualan 2024'
                width={1000}
                height={1000}
                className='w-full h-auto'
              />
            </div>

            <div className='mt-10 text-md md:text-xl lg:text-2xl font-bold text-center'>
              <p>Hasil di atas murni memanfaatkan penjualan organik <span className='bg-[#fffc00] dark:text-black'>tanpa iklan sama sekali.</span> </p>
            </div>

            <div className='mt-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
              <p><span className='text-red-600'>STOP</span> Menghabiskan Uang untuk Iklan! Pelajari Cara <span className='bg-[#fffc00] dark:text-black'>Berjualan Secara Organik (dan GRATIS!)</span> </p>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <p>Dapatkan materi yang langsung to the point, mudah dipahami, langkah demi langkah, dan langsung bisa dipraktikkan untuk meningkatkan penjualanmu di marketplace.</p>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>Materi yang akan kamu dapatkan:</div>

            <div className='text-md md:text-lg lg:text-xl p-2 border-[1px] border-gray-300 dark:border-gray-600 rounded-md bg-green-50 dark:bg-gray-800'>
              <div>✅️ Trik Naik Ranking Tanpa Harus Jualan Murah</div>
              <div>✅️ Fitur Gratis yang Diam-Diam Bikin Order Meledak</div>
              <div>✅️ Cara Tampil Seolah Toko Besar Padahal Modal Kecil</div>
              <div>✅️ Rahasia Dapat Review Bintang 5 Tanpa Minta-Minta</div>
              <div>✅️ Satu Kata di Judul Produk Bisa Bikin Kamu Kalah Saing</div>
              <div>✅️ Strategi Psikologis Biar Pembeli Checkout Tanpa Ragu</div>
              <div>✅️ “Main Halus” yang Bikin Orang Beli Lebih dari Satu Produk</div>
              <div>✅️ Trik Gabung Promo Resmi tapi Tetap Untung Besar</div>
              <div>✅️ Langkah praktis yang bisa kamu ikuti dengan detail</div>
            </div>


            <div className='mt-10 text-lg md:text-xl lg:text-2xl font-bold text-center'>
              <p>Kata Mereka yang udah nyobain:</p>
            </div>
            <div>
              <Card className='pt-2 bg-blue-100 mb-5'>
                <CardContent>
                  <div className=''>
                    <div>
                      <span className='font-semibold dark:text-black'>Rio</span> ⭐⭐⭐⭐⭐
                    </div>
                    <p className='text-sm md:text-md lg:text-lg dark:text-black'>
                      Materinya sangat membantu dan mudah dipahami! Saya berhasil meningkatkan penjualan tanpa harus mengeluarkan uang untuk iklan.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='pt-2 bg-blue-100 mb-5'>
                <CardContent>
                  <div className=''>
                    <div>
                      <span className='font-semibold dark:text-black'>Ari</span> ⭐⭐⭐⭐⭐
                    </div>
                    <p className='text-sm md:text-md lg:text-lg dark:text-black'>
                      Awal jualan cuma laku 0-3 order per hari, setelah ikut materi ini, penjualan saya meningkat drastis! Sekarang bisa konsisten sampai 50-100 order per hari.
                      Memang belum sampai omset milyaran, tapi cukup puas dengan hasilnya.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className='pt-2 bg-blue-100 mb-5'>
                <CardContent>
                  <div className=''>
                    <div>
                      <span className='font-semibold dark:text-black'>Vivi</span> ⭐⭐⭐⭐⭐
                    </div>
                    <p className='text-sm md:text-md lg:text-lg dark:text-black'>
                      Saya baru mulai jualan di marketplace, dan ebook ini sangat membantu! Langkah-langkahnya jelas dan mudah diikuti. Penjualan saya meningkat pesat!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className='mt-10 text-lg md:text-xl lg:text-2xl font-bold text-center'>
              Biar bukti yang berbicara:
            </div>
            <div>
              <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 mt-5'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof1.png'
                      alt='Bukti cetak resi'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 1</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/LGhSL8ozS5c" title="Proof1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof2.png?v=2'
                      alt='Bukti cetak resi'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 2</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/2cchP_7FJ6k" title="proof2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof3.png'
                      alt='Bukti paket'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 3</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/YRv6GQCD9gU" title="proof3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof4.png'
                      alt='Bukti cetak resi'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 4</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/Q9FJs32Na5o" title="proof4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof5.png'
                      alt='Bukti kirim'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 5</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/Ce4zpV6tae4" title="proof5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src='/assets/img/proof6.png'
                      alt='Bukti cetak resi'
                      width={100}
                      height={100}
                      className='w-full h-auto'
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof 6</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <iframe width="409" height="727" src="https://www.youtube.com/embed/7jHqANl-dXo" title="proof6" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              Segera dapatkan ebook ini dan jadi yang pertama meraih cuan milyaran di marketplace tanpa iklan!,
              <br /><span className='bg-[#fffc00] dark:text-black'>ingat 100% tanpa iklan, GRATIS! <br />100% no budget!</span>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              Harga pre-lauch <br />cuma 147rb!
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <span className='bg-[#fffc00] dark:text-black'><br />Khusus bulan Mei <br />ada cashback 50rb!</span>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              Pakai kode promo <br /><span className='underline'>&quot;DISKONMEI50&quot;</span>
            </div>

            <div className='flex items-center justify-center mb-4'>
              <Image
                src='/assets/img/arrow.gif'
                alt='laporan performa penjualan 2025'
                width={100}
                height={100}
              />
            </div>

            <div className='w-full'>
              <a className="iframe-lightbox-link block text-center p-3 w-full text-xl md:text-2xl lg:text-3xl bg-green-700 rounded-md font-bold text-white hover:bg-green-800 transition-colors"
                href="https://cuanhero.myr.id/catalog/strategi-jualan-online-cuan-milyaran-tanpa-ngiklan"
              >
                Bayar dan Download Materinya</a>
            </div>


          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}

export default Page