import CollapsibleCard from '@/components/CollapsibleCard'
import React from 'react'

const Page = () => {
  return (
    <div className='p-6'>
      <h1 className='text-xl md:text-4xl font-bold mb-10'>Panduan Rahasia Mendapatkan Visa Schengen 99% Pasti Diterima</h1>

      <div className='mt-10 text-sm md:text-md lg:text-lg text-gray-600 dark:text-gray-300'>
        <p>Kebanyakan orang bilang bahwa mengurus Visa Schengen itu sulit, bahkan mengurus melalui agen pun kadang tetap ditolak. Tapi sebenarnya, nggak sesulit itu kok! Asal kamu tahu cara mengurus Visa Schengen dengan benar, kamubisa urus sendiri tanpa perlu agen dengan peluang diterima hampir 100%. Di sini aku bakal kasih tau langkah-langkahnya, supaya kamu bisa tenang ngurus visa dan lebih siap buat petualangan di Eropa.</p>

        <p>Di ebook ini, kita bakal bahas gimana cara dapetin visa ini dengan mudah dan meningkatkan peluang kamu buat diterima hampir 100%. Jadi, siap-siap catet ya!</p>

        <div className='mt-10 flex flex-col gap-2 w-full'>
          <CollapsibleCard className='bg-gray-100 dark:bg-gray-800'>
            <h2 className='font-bold'>Apa itu Visa Schengen</h2>

            <p>Visa Schengen adalah "golden ticket" buat kamu yang mau jelajah Eropa tanpa harus berurusan sama imigrasi tiap kali pindah negara. Dengan visa ini, kamu bisa masuk ke 27 negara di Eropa tanpa perlu apply visa tiap negara—cukup satu visa untuk semua. Praktis banget, kan?</p>

            <h3>Negara-Negara di Schengen Area</h3>

            <p>Visa Schengen memungkinkan kamu main ke negara-negara Eropa seperti:</p>

            <div className='flex justify-between w-full'>
              <ul className='pl-4 w-1/2'>
                <li className='list-disc'>Austria</li>
                <li className='list-disc'>Belgia</li>
                <li className='list-disc'>Republik Ceko</li>
                <li className='list-disc'>Denmark</li>
                <li className='list-disc'>Estonia</li>
                <li className='list-disc'>Finlandia</li>
                <li className='list-disc'>Prancis</li>
                <li className='list-disc'>Jerman</li>
                <li className='list-disc'>Yunani</li>
                <li className='list-disc'>Hungaria</li>
                <li className='list-disc'>Islandia</li>
                <li className='list-disc'>Italia</li>
                <li className='list-disc'>Latvia</li>
                <li className='list-disc'>Liechtenstein</li>
              </ul>
              <ul className='pl-4 w-1/2'>
                <li className='list-disc'>Lituania</li>
                <li className='list-disc'>Luksemburg</li>
                <li className='list-disc'>Malta</li>
                <li className='list-disc'>Belanda</li>
                <li className='list-disc'>Norwegia</li>
                <li className='list-disc'>Polandia</li>
                <li className='list-disc'>Portugal</li>
                <li className='list-disc'>Slowakia</li>
                <li className='list-disc'>Slovenia</li>
                <li className='list-disc'>Spanyol</li>
                <li className='list-disc'>Swedia</li>
                <li className='list-disc'>Swiss</li>
                <li className='list-disc'>Monako (walau bukan bagian resmi, tetap menerima Visa Schengen)</li>
              </ul>
            </div>

            <p>Selain buat wisata, visa ini bisa dipakai untuk kunjungan keluarga, urusan bisnis, bahkan acara budaya. Visa ini biasanya berlaku buat kunjungan singkat, maksimal 90 hari dalam 180 hari.</p>
          </CollapsibleCard>
          <CollapsibleCard className='bg-gray-100 dark:bg-gray-800'>
            <h2 className='font-bold'>Di Mana Bisa Mengajukan Permohonan Visa Schengen?</h2>

            <p>setelah tahu apa itu Visa Schengen, saatnya kamu tahu ke mana harus pergi untuk mengajukan visa ini. Pengajuan Visa Schengen nggak bisa dilakukan sembarangan ya—ada tempat khusus yang memang ditunjuk untuk membantu proses ini. Kamu bisa memilih tempat pengajuan di bawah ini:</p>
            <ul className='pl-5 pt-2 pb-2'>
              <li className='list-decimal'>
                <h4><strong>Kedutaan atau Konsulat Negara Tujuan</strong></h4>
                <p>Kalau kamu cuma mau mengunjungi satu negara di Schengen Area, maka langsung ajukan ke kedutaan atau konsulat negara tersebut di Indonesia.</p>
              </li>
              <li className='list-decimal'>
                <h4><strong>VFS Global</strong></h4>

                <p>Untuk beberapa negara, proses aplikasi visa diurus oleh pihak ketiga, yaitu VFS Global. Ini adalah pusat pengajuan visa yang bekerja sama dengan kedutaan untuk mempermudah proses aplikasi. VFS Global punya cabang di kota-kota besar seperti Jakarta dan Surabaya, jadi kamu bisa pilih lokasi terdekat.</p>
              </li>
              <li className='list-decimal'>
                <h4><strong>Pusat Pengajuan Visa Lainnya (Jika Ada)</strong></h4>

                <p>Beberapa negara mungkin punya pusat aplikasi khusus selain VFS Global. Untuk tahu lokasi yang tepat, cek situs resmi kedutaan negara tujuan kamu.</p>
              </li>
            </ul>

            <p>Catatan Penting: Kalau kamu berencana mengunjungi lebih dari satu negara, ajukan visa di kedutaan negara tempat kamu akan tinggal paling lama. Kalau durasi kunjungan di setiap negara sama, ajukan di kedutaan negara yang pertama kali kamu masuki.</p>

          </CollapsibleCard>
          <CollapsibleCard className='bg-gray-100 dark:bg-gray-800'>
            <h2 className='font-bold'>Anti-Gagal! Tips Jitu Supaya Visa Schengen Kamu Diterima</h2>

            <p>Nah ini dia bebrapa tips dan trik rahasia supaya aplikasi schengen kamu bisa disetujui dengan mudah. Bukan hanya sekedar melengkapi persyaratan tapi perhatikan tips dan trik di bawah ini dengan detail dan pastikan kamu benar-benar mengikuti satu per satu supaya pengajuanmu semakin lengkap dan semakin besar peluang visa kamu diterima.</p>

            <CollapsibleCard>
              <h3 className='font-[600]'>Ajukan Melalui VFS Global</h3>
              <p>Kenapa harus melalui VFS Global? karena jika kamu mendaftar melui VFS global, dokumenmu akan diperiksa dan diverifikasi lebih dulu oleh staf atau petugas VFS. Jadi petugas bisa menginformasikan terlebih dulu jika ada dokumen yang belum lengkap atau ada dokumen yang harus disusulkan. Di VFS juga tidak perlu ada interview seperti jika kamu mendaftar langsung ke kedutaan. VFS juga menyediakan jasa pengiriman Paspor ke rumah kamu jika rumah kamu jauh dari tempat pengurusan, sehingga bisa menghemat biaya dan waktu.</p>
              <p>Jangan lupa membuat janji temu terlebih dulu untuk bisa mengurus VISA melalui VFS global. Untuk lebih jelasnya kamu bisa langsung buka website <a href="https://www.vfsglobal.com/en/individuals/index.html" target="_blank">VFS Global</a>, lalu pilih dari negara mana dan negara tujuan, kamu akan diarahkan ke webiste VFS Global khusus untuk negara tujuanmu. Tinggal ikuti langkah-langkah pengajuan seperti yang tertera di website.</p>
            </CollapsibleCard>
            <CollapsibleCard>
              <h3 className='font-[600]'>Isi Formulir Aplikasi VISA Online</h3>
              <p>Formulir pendaftaran bisa kamu dapatkan di website kedutaan atau dari website VFS Global. Aku sarankan kamu mengisi mengunakan Online Application Form yang disediakan oleh VFS Global. Isi formulir dengan detail dan lengkap lalu download dan cetak dokumen. </p>
            </CollapsibleCard>
            <CollapsibleCard>
              <h3 className='font-[600]'>Langkah Paling Penting: Lengkapi Persyaratan</h3>
              <p>Selain mengisi formulir pendaftaran kamu juga perlu menlampirkan beberapa dokumen. Dokumen-dokumen ini sangat penting sebagai persyaratan dan bukti pendukung bahwa kamu akan kembali lagi ke Indonesia atau keuanganmu cukup untuk membiaya biaya hidup dan perjalanan selama berada di Eropa.</p>

              <ul className='p-5 flex flex-col gap-3'>
                <li className='list-decimal'><h4 className='font-[600]'>Paspor Asli yang Masih Berlaku</h4>
                  <p>Syarat yang paling utama tentu saja kamu harus punya paspor yang masih berlaku minimal 6 bulan terhitung dari tanggal keberangkatan. Semua jenis paspor masih bisa digunakan baik e-paspor maupun paspor biasa.</p>
                  <p className='pl-3 my-2 border-l-2 border-gray-400'><strong>Tips Penting:</strong> Bukan hanya paspor asli dan salinan bagian depan saja,
                    tapi juga <strong>sertakan fotocopy semua halaman paspor yang ada stiker atau cap VISA dari negara manapun.</strong> Jika kamu mempunyai VISA
                    di paspor lama yang sudah expired tetap sertakan fotocopy VISAnya. Jadi jangan buang paspor lama yang sudah tidak berlaku karena jika sudah
                    pernah mempunyai VISA masih bisa digunakan untuk memperkuat aplikasi VISA barumu. Misalnya jika kamu pernah berkunjung ke Jepang menggunakan
                    paspor elektronik dan mendapatkan VISA waiver kamu juga bisa menyertakan fotocopy VISA ini.</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Foto Terbaru</h4>
                  <p>Pastikan ukuran foto 3.5 x 4.5 cm dengan background putih dengan komposisi wajah terlihat 75%.
                    Beberapa kantor VFS menyediakan layanan foto di tempat tapi untuk berjaga-jaga sebaiknya kamu menyiapakan juga foto dari rumah.
                    Ukuran lebih detail bisa dilihat <a href="https://id.visafoto.com/eu-visa-photo" target='_blank'>disini</a>.</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Asuransi Perjalanan</h4>
                  <p>Ini salah satu syarat wajib yang harus kamu sertakan. Asuransi harus mengcover minimal <strong>€30.000</strong> Euro atau sekitar 540 juta rupiah. Jangan asal membeli asurani yang murah, Pihak penyedia asuransi juga harus yang benar-benar kredible dan diakui oleh kedutaan Negara tujuan kamu.</p>

                  <p>Kamu bisa membeli asuransi perjalanan dari pihak penyedia asuransi perjalan seperti MSIG, Zurich, Tokio Marine, dll yang sudah terbukti. Jika kamu mau sedikit menghemat budget, kamu bisa membandingkan beberapa asuransi melalui broker seperti Cermati. Terakhir kali, aku sendiri menggunakan asuransi MSIG dengan harga Rp 400.000-an dengan manfaat seperti berikut:</p>
                  <p>
                    <img src='https://important-soda-e24.notion.site/image/attachment%3A58a1ed13-b7ee-477a-930f-063237aa0981%3AScreenshot_2025-01-28_011952.png?table=block&id=188c4eaf-1f41-805f-ac08-f98d0429c890&spaceId=42cb2e56-dcc6-46d9-b1d2-47bd6f889cce&width=1120&userId=&cache=v2' alt="tabel manfaat" className='w-full' />
                  </p>
                  <p>manfaat seperti di atas sudah sangat cukup untuk memperkuat aplikasi VISA mu. Jika kamu sudah mempunyai asuransi perjalanan, tidak perlu menyertakan semua dokumen polis, cukup sertakan halaman yang memuat nama kamu, tabel manfaat dan tanda tangan atau Authorized Signature dari provider pilihanmu. Ingat, pastikan melampirkan asuransi ASLI yang benar bukan hanya asuransi palsu yang dibuat-buat. Kebanyakan orang yang gagal tidak benar-benar membeli asuransi tapi hanya menggunakan dokumen palsu atau editan.</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Foto Terbaru</h4>
                  <p>Pastikan ukuran foto 3.5 x 4.5 cm dengan background putih dengan komposisi wajah terlihat 75%.
                    Beberapa kantor VFS menyediakan layanan foto di tempat tapi untuk berjaga-jaga sebaiknya kamu menyiapakan juga foto dari rumah.
                    Ukuran lebih detail bisa dilihat <a href="https://id.visafoto.com/eu-visa-photo" target='_blank'>disini</a>.</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Bukti Keuangan</h4>
                  <p>Bukti keuangan adalah salah satu dokumen penting yang perlu kamu sertakan. Dokumen ini tidak hanya menunjukkan bahwa kamu punya cukup dana untuk menanggung semua biaya selama di Eropa, tetapi juga membuktikan bahwa kamu memiliki penghasilan yang cukup, sehingga ada alasan kuat untuk kembali ke Indonesia.</p>

                  <p className='pl-3 my-2 border-l-2 border-gray-400'><strong>Tips Penting</strong>: pastikan kamu menyertakan cetak laporan tabungan yang menunjukkan transaksi aktif, terutama pemasukan seperti gaji selama 3 bulan terakhir. Kamu bisa mencetak sendiri e-statement dari Bank, tapi aku sarankan cetak melalui CS Bank, supaya kamu juga bisa dibuatkan surat keterangan atau surat sponsor dari Bank.</p>

                  <p>Tidak ada aturan pasti tentang jumlah saldo yang harus mengendap, tapi kamu bisa memperkirakannya dari lama waktu kamu tinggal di Eropa dan biaya hidup sehari-hari di sana. Berikut contoh perhitungan:</p>

                  <p>Misalnya, kamu berencana tinggal di Eropa selama 10 hari, dan rata-rata biaya hidup sehari di sana adalah €100. Maka, perkiraan saldo yang aman adalah:

                    <p>10 hari x €100 = €1.000 (sekitar Rp17 juta, tergantung kurs).</p>

                    <p></p>Selain itu, pastikan laporan tabunganmu terlihat konsisten dan wajar, dengan transaksi aktif seperti gaji bulanan, agar semakin meyakinkan.</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Rencana Perjalanan (Itinerary)</h4>
                  <p>Yang dimaksud dengan Itinerary perjalanan adalah bukti pemesanan tiket pulang pergi serta bukti pemesanan hotel atau penginapan selama kamu di Eropa. Tidak perlu mencantumkan detail semua tempat yang akan kamu kunjungi, apalagi hingga mencatat jam berapa kamu akan ke sana. Cukup sertakan tiket pulang-pergi yang sudah benar-benar <strong>issued</strong> atau terbit dan bukti pemesanan hotel yang sudah <strong>terkonfirmasi</strong>.</p>

                  <p className='pl-3 my-2 border-l-2 border-gray-400'><strong>Tips Penting:</strong> Kamu tidak perlu membayar di awal untuk mendapatkan bukti booking hotel yang terkonfirmasi. Gunakan trik ini untuk mendapatkan <strong>bukti booking hotel yang terkonfirmasi tanpa harus membayar di awal!</strong> Kamu bisa memanfaatkan fitur <strong>"Pay at The Property"</strong> atau <strong>"Pay Nothing Until [date]"</strong> yang tersedia di beberapa website dan aplikasi pemesanan hotel seperti ,<a href="https://booking.com" target='_blank'>Booking.com</a>, <a href="https://agoda.com" target='_blank'>Agoda</a>, dll.</p>

                  <p>Aku pribadi sering menggunakan fitur <strong>"Pay Nothing Until [date]"</strong> dari <a href="https://booking.com" target='_blank'>Booking.com</a>. Dengan fitur ini, reservasi hotelmu tetap terkonfirmasi tanpa perlu langsung membayar. <strong>Selain itu, kamu juga bisa mengunci harga murah</strong> jika kamu melakukan pemesanan jauh-jauh hari, karena biasanya semakin dekat dengan tanggal check-in, harga kamar akan semakin mahal. Kamu bisa melakukan pembayaran saat tiba di hotel atau menjelang tanggal check-in. Praktis, fleksibel, dan aman untuk kebutuhan aplikasi visa!</p>
                </li>
                <li className='list-decimal'><h4 className='font-[600]'>Cover Letter</h4>
                  <p>Syarat ini memang tidak tertulis di manapun, tapi sangat penting untuk memperkuat aplikasi VISAmu. Jika kamu adalah seorang karyawan, mintalah surat keterangan kerja dari kantormu yang ditujukan langsung ke kedutaan negara tujuan dalam bahasa Inggris.</p>
                  <p><img src='https://important-soda-e24.notion.site/image/attachment%3Ab7141d3e-9a5b-47d4-a015-81f807e611db%3AScreenshot_2025-01-28_155539.png?table=block&id=189c4eaf-1f41-80c8-a8e6-df2e3acc8d84&spaceId=42cb2e56-dcc6-46d9-b1d2-47bd6f889cce&width=1120&userId=&cache=v2' alt="cover letter" className='w-full' /></p>
                  <p>Pastikan cover letter memuat kop surat perusahaan tempat kamu bekerja dan anda tangan dari HR manager. Tapi jika kamu seorang entrepreneur, kamu bisa membuat cover letter sendiri yang menyatakan dengan jelas bahwa kamu akan kembali ke negara asal setelah perjalananmu. Pastikan surat ini ditulis dalam bahasa Inggris, menggunakan format profesional, dan mencantumkan detail bisnis yang kamu jalankan. Berikut contoh formatnya:</p>
                  <br /><hr />
                  <div className='text-xs md:text-sm p-4'>
                    <p><strong>[Nama Lengkap]</strong></p>
                    <p><strong>[Alamat Rumah]</strong></p>
                    <p><strong>[Nomor Telepon]</strong></p>
                    <p><strong>[Email]</strong></p>
                    <p><strong>[Tanggal Surat]</strong></p>
                    <p>To:</p>
                    <p><strong>[Embassy Name]</strong></p>
                    <p><strong>[Embassy Address]</strong></p>

                    <p>Subject:** Travel Confirmation Letter</p>

                    <p>Dear Sir/Madam,<br /><br />

                      My name is <strong>[Nama Lengkap]</strong>, and I am the owner of <strong>[Nama Bisnis]</strong>, a company specializing in <strong>[Jenis Usaha]</strong> based in <strong>[Kota, Negara]</strong>. I am writing this letter to confirm my travel plans to <strong>[Negara Tujuan]</strong> from <strong>[Tanggal Keberangkatan]</strong> to <strong>[Tanggal Kepulangan]</strong>.<br /><br />

                      As the owner of an established business, I have ongoing responsibilities and commitments that require my return to <strong>[Negara Asal]</strong> after this trip. My company employs <strong>[Jumlah Karyawan, jika relevan]</strong> and has been operating successfully since <strong>[Tahun Berdiri]</strong>. Attached to this letter, I have included supporting documents such as my business registration certificate, tax returns, and recent bank statements to validate my financial stability and ties to <strong>[Negara Asal]</strong>.<br /><br />

                      I assure you that this trip is solely for tourism purposes, and I have no intention of overstaying my visa or relocating. I have already secured a return ticket and accommodations, as outlined in my travel itinerary.<br /><br />

                      Please feel free to contact me at <strong>[Nomor Telepon atau Email]</strong> if you require any additional information or documentation.<br /><br />

                      Thank you for considering my application.<br /><br />

                      Sincerely,<br /><br />

                      <strong>[Nama Lengkap]</strong><br /><br />
                    </p>
                  </div>
                  <hr /><br />

                  <p>Pastikan surat ini dilengkapi dengan dokumen pendukung seperti surat registrasi bisnis, laporan keuangan, atau pembayaran pajak untuk memperkuat pernyataanmu. Surat ini akan membantu pihak kedutaan memahami bahwa kamu memiliki tanggung jawab yang memastikan kamu akan kembali ke negara asal.</p>
                </li>
              </ul>

            </CollapsibleCard>
          </CollapsibleCard>

          <CollapsibleCard className='bg-gray-100 dark:bg-gray-800'>
            <h2 className='font-bold'>Kesalahan Fatal yang Harus Dihindari Saat Mengajukan Visa Schengen</h2>
            <p>Mengajukan Visa Schengen seharusnya tidak perlu jadi mimpi buruk, tapi faktanya, banyak orang gagal hanya karena kesalahan-kesalahan kecil yang sebenarnya bisa dihindari. Dari dokumen yang kurang lengkap hingga itinerary yang tidak meyakinkan, hal-hal sepele ini sering jadi alasan utama penolakan visa. Nah, di bagian ini, saya akan bocorkan kesalahan-kesalahan fatal yang harus Anda hindari agar aplikasi visa Anda bisa lolos dengan lancar. Yuk, simak baik-baik!</p>
            <ul className='p-4 flex flex-col gap-3'>
              <li className='list-decimal'><h3 className='font-[600]'>Dokumen Tidak Lengkap atau Salah Format</h3>
                <p>Kesalahan Umum: Mengumpulkan dokumen yang kurang lengkap atau tidak sesuai dengan persyaratan resmi kedutaan.</p>

                <p>Akibat: Aplikasi visa langsung ditolak karena dianggap tidak serius atau tidak memenuhi syarat.</p>

                <p>Cara Menghindari:</p>

                <p>Pastikan Kamu memeriksa checklist dokumen resmi dari kedutaan negara tujuan.</p>

                <p>Perhatikan format dokumen (contoh: paspor harus masih berlaku minimal 6 bulan, foto harus sesuai ukuran dan latar belakang yang ditentukan).</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Jadwal Perjalanan yang Tidak Jelas</h3>
                <p>Kesalahan Umum: Membuat itinerary yang tidak detail atau terlihat dibuat-buat.</p>

                <p>Akibat: Pihak kedutaan meragukan tujuan dan rencana perjalanan Kamu, sehingga visa ditolak.</p>

                <p>Cara Menghindari:</p>

                <p>Sertakan bukti pemesanan tiket pesawat pulang pergi dan reservasi hotel.</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Keuangan yang Tidak Mencukupi</h3>
                <p>Kesalahan Umum: Menunjukkan bukti keuangan yang tidak cukup atau tidak konsisten.</p>

                <p>Akibat: Pihak kedutaan meragukan kemampuan finansial Kamu selama di Eropa, sehingga visa ditolak.</p>

                <p>Cara Menghindari:</p>

                <p>Pastikan saldo rekening Kamu mencukupi untuk biaya hidup selama di Eropa (biasanya sekitar €50-€100 per hari).
                </p>
                <p>Sertakan rekening koran 3 bulan terakhir dan pastikan tidak ada transaksi mencurigakan (seperti setoran besar mendadak).</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Surat Permohonan yang Tidak Meyakinkan</h3>
                <p>Kesalahan Umum: Menulis surat permohonan yang terlalu singkat, tidak jelas, atau tidak meyakinkan.</p>

                <p>Akibat: Pihak kedutaan tidak yakin dengan tujuan dan niat Kamu, sehingga visa ditolak.</p>

                <p>Cara Menghindari:</p>

                <p>Buat surat permohonan yang detail dan profesional, jelaskan tujuan perjalanan, rencana kegiatan, dan jaminan bahwa Kamu akan kembali ke negara asal.</p>

                <p>Gunakan template yang sudah terbukti berhasil.</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Tidak Menunjukkan Ikatan Kuat ke Negara Asal</h3>
                <p>Kesalahan Umum: Tidak bisa membuktikan bahwa Kamu memiliki alasan kuat untuk kembali ke negara asal (seperti pekerjaan, keluarga, atau aset).</p>

                <p>Akibat: Pihak kedutaan khawatir Kamu akan overstay atau tidak kembali, sehingga visa ditolak.</p>

                <p>Cara Menghindari:</p>

                <p>Sertakan bukti ikatan kuat, seperti surat kerja, surat keterangan kuliah, atau bukti kepemilikan properti.</p>

                <p>Jelaskan dengan jelas dalam surat permohonan bahwa Kamu memiliki komitmen untuk kembali.</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Kesalahan Saat Wawancara</h3>
                <p>Kesalahan Umum: Tidak siap saat wawancara, jawaban tidak konsisten, atau terlihat gugup.</p>

                <p>Akibat: Pihak kedutaan meragukan keaslian tujuan Kamu, sehingga visa ditolak.</p>

                <p>Cara Menghindari:</p>

                <p>Persiapkan jawaban untuk pertanyaan umum seperti tujuan perjalanan, rencana kegiatan, dan jaminan kembali ke negara asal.</p>

                <p>Lakukan simulasi wawancara sebelumnya agar lebih percaya diri.</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Mengabaikan Asuransi Perjalanan</h3>
                <p>Kesalahan Umum: Tidak menyertakan asuransi perjalanan yang memenuhi syarat (minimal coverage €30.000).</p>

                <p>Akibat: Aplikasi visa langsung ditolak karena dianggap tidak memenuhi syarat keamanan.</p>

                <p>Cara Menghindari:</p>

                <p>Pastikan Kamu membeli asuransi perjalanan yang mencakup seluruh durasi perjalanan dan memenuhi syarat coverage yang ditentukan.</p>
              </li>

              <li className='list-decimal'><h3 className='font-[600]'>Terlambat Mengajukan Visa</h3>
                <p>Kesalahan Umum: Mengajukan visa terlalu mepet dengan tanggal keberangkatan.</p>

                <p>Akibat: Proses visa tidak selesai tepat waktu, atau Kamu tidak punya waktu untuk memperbaiki kesalahan jika ada.</p>

                <p>Cara Menghindari:</p>

                <p>Ajukan visa minimal 1-2 bulan sebelum tanggal keberangkatan.</p>

                <p>Periksa jadwal cuti kedutaan atau hari libur yang mungkin memengaruhi proses pengajuan.</p>
              </li>
            </ul>
          </CollapsibleCard>

          <div className='p-4 mt-10 bg-gray-100 dark:bg-slate-800 border-[1px] border-gray-300'>
            <p>Nah, sekarang kamu sudah punya semua "senjata" untuk ngadepin Visa Schengen kayak pro. Gak perlu takut ditolak lagi, deh! Asal kamu ikutin panduan ini, hindarin kesalahan-kesalahan fatal, dan siapin semuanya dengan baik, Eropa tinggal nunggu kamu dateng. So, siap-siap packing koper, ambil kamera, dan siap-siap bikin story seru buat Instagram!</p>
            <p>&nbsp;</p>
            {/* <p>Tapi, tunggu dulu...
              Kalau kamu mau bikin travelingmu bukan cuma seru, tapi juga jadi sumber cuan, aku punya sesuatu yang bakal bikin kamu semangat banget! Ebookku yang berjudul <strong>"Jalan-Jalan Jadi Cuan"</strong> bakal bocorin semua rahasia gimana cara menghasilkan uang dari hobi traveling. Bayangin, kamu bisa dapet duit sambil jalan-jalan, eksplor tempat-tempat keren, dan bikin konten yang bikin semua orang iri. Gak percaya? Coba aja baca!</p>
            <p>&nbsp;</p>
            <p>Jangan cuma jadi penonton, yuk jadi pemain!
              Klik link di bawah ini buat dapetin ebook <strong>"Jalan-Jalan Jadi Cuan"</strong> dan mulai perjalananmu dari traveler biasa jadi travelpreneur keren. Eropa? Bisa! Cuan? Bisa banget!</p> */}
          </div>
        </div>
      </div >
    </div >
  )
}

export default Page