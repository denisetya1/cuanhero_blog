import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Strategi Mengubah Jalan-Jalan Jadi Cuan Tanpa Jastip',
  description: 'Ingin dapat penghasilan dari hobi traveling? Temukan cara menghasilkan uang dari konten jalan-jalan tanpa Jastip. Bisa dilakukan siapa saja, tanpa modal!',
  keywords: 'cara menghasilkan uang dari jalan-jalan, jalan-jalan jadi cuan, cara cuan dari traveling, penghasilan dari konten travel, ebook jalan-jalan, tanpa jastip, monetize traveling, ide bisnis traveler, passive income dari traveling'
};

const Page = () => {
  return (
    <div className='p-3 md:p-6 lg:p-10 flex items-start justify-center'>
      <Card className='max-w-3xl w-full'>
        <CardHeader></CardHeader>
        <CardContent>
          <div className='flex flex-col'>
            <div className='uppercase mt-5 mb-10 text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-[#fffc00] text-red-600 p-2'>
              <p>Rahasia Menghasilkan Ribuan Dollar tiap bulan dari Traveling<br />Tanpa Jastip, Tanpa Ribet, Tanpa Harus Jadi Selebgram!</p>
            </div>

            <div>
              <Image
                src='/assets/img/dashboard-tp.png'
                alt='Banjir Orderan Tanpa Iklan + 100 Prompt AI'
                width={1000}
                height={1000}
                className='w-full h-auto'
              />
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-2xl font-bold text-center'>
              <p>Kalau kamu suka traveling dan sering upload foto atau video, sebenarnya kamu sudah punya modal untuk <span className='bg-[#fffc00] dark:text-black'>menghasilkan ribuan dollar.</span> Ebook ini akan membongkar strategi praktis mengubah hobi  <span className='bg-[#fffc00] dark:text-black'>jalan-jalan jadi mesin cuan</span> — bahkan kalau kamu pemula.</p>
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <p>Ebook ini membongkar cara cuan dari jalan-jalan tanpa harus jastip.</p>
            </div>

            <div className='mt-10'>
              <Card>
                <CardHeader>
                  <div className=' text-xl md:text-2xl lg:text-3xl font-bold text-center'>
                    <p>Kenapa tidak Jastip?</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div>
                      <h3 className='font-semibold'>Jastip:</h3>
                      <div>🚫  Harus modal dulu buat beli barang</div>
                      <div>🚫 Repot bawa banyak barang titipan</div>
                      <div>🚫 Keuntungannya kecil per transaksi</div>
                      <div>🚫 Tidak scalable, tergantung jumlah titipan</div>
                      <div>🚫 Harus COD atau kirim manual</div>
                      <div>🚫 Resiko ditahan Bea Cukai</div>
                    </div>

                    <div>
                      <h3 className='font-semibold'>Strategi dalam eBook Ini:</h3>
                      <div>✅Bisa mulai tanpa modal sama sekali</div>
                      <div>✅Cuma bawa kamera/HP dan upload konten</div>
                      <div>✅Bisa hasilkan passive income berkali-kali</div>
                      <div>✅Scalable — 1 konten bisa hasilkan cuan terus</div>
                      <div>✅Semua serba otomatis, tinggal cek dashboard</div>
                      <div>✅Tidak ada resiko sama sekali</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className='text-center text-lg md:text-xl lg:text-2xl font-bold'>
                    <p>Jadi, kenapa harus jastip kalau bisa cuan lebih mudah dan tanpa ribet?</p>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className='mt-10 text-md md:text-xl lg:text-2xl font-bold text-center'>
              <p>Strategi di ebook ini terbukti mendatangkan cuan tanpa harus merepotkan seperti jastip</p>
            </div>

            <div>
              <Image
                src='/assets/img/payouts.png'
                alt='100 Prompt AI untuk Meningkatkan Penjualan Online'
                width={1000}
                height={1000}
                className='w-full h-auto'
              />
            </div>


            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              <p>Dapatkan materi yang langsung to the point, mudah dipahami, langkah demi langkah, dan langsung bisa dipraktikkan untuk <span className='bg-[#fffc00] dark:text-black'>menjadikan jalan-jalanmu jadi mesin cuan.</span></p>
            </div>

            <div className='mt-10'>

              <div className='text-md md:text-lg lg:text-xl p-2 border-[1px] border-gray-300 dark:border-gray-600 rounded-md bg-green-50 dark:bg-gray-800'>
                <h3 className=' text-xl md:text-2xl lg:text-3xl font-bold text-center mb-5'>Materi yang akan kamu dapatkan:</h3>
                <div>✅ Cara menghasilkan uang dari konten jalan-jalan</div>
                <div>✅ Platform yang bisa kamu manfaatkan (YouTube Shorts, TikTok, Blog, dsb)</div>
                <div>✅ Strategi konten viral dan monetisasi tanpa follower banyak</div>
                <div>✅ Teknik afiliasi & jual digital sambil traveling</div>
                <div>✅ Cara jual itinerary & stock photo secara otomatis</div>
                <div>✅ Studi kasus: Traveler pemula dapat Rp10 juta pertama secara online</div>
              </div>
            </div>

            {/* <div className='mt-10 text-lg md:text-xl lg:text-2xl font-bold text-center'>
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
            </div> */}

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              Kamu udah sering traveling, sering upload foto & story…
              <span className='bg-[#fffc00] dark:text-black'>Sekarang saatnya ubah semua itu jadi penghasilan!</span>
              <br />
              📥 Download sekarang eBook-nya dan mulai cuan tanpa Jastip!
            </div>

            <div className='mt-10 text-xl md:text-2xl lg:text-3xl font-bold text-center'>
              Harga Promo Launching <br /><span className='line-through'>Rp 99rb!</span><br />
              <span className='bg-[#fffc00] dark:text-black'>Rp 49rb!</span>
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
                href="https://cuanhero.myr.id/catalog/strategi-jualan-online-banjir-orderan-tanpa-ngiklan"
              >
                Bayar dan Download Materinya</a>
            </div>


          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div >
  )
}

export default Page