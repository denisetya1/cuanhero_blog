import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full p-20'>
      <h1 className='font-bold text-3xl mb-10'>Payout History</h1>

      <div className='w-screen h-screen flex items-start justify-center'>
        <div className='flex gap-4  w-full'>
          <div className='w-[200px]'>
            <div className='border-b-[1px] border-solid border-gray-100'>
              <span className='p-2 block font-semibold'>2025</span>
              <ul className=' w-full'>
                <li className='p-2 bg-gray-100'>May 2025</li>
                <li className='p-2 '>Apr 2025</li>
                <li className='p-2 '>Mar 2025</li>
                <li className='p-2 '>Feb 2025</li>
                <li className='p-2 '>Jan 2025</li>
              </ul>
            </div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2024</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2023</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2022</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2021</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2020</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2019</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2018</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2017</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2016</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2015</span><ChevronDown className="text-gray-400" /></div>
            <div className='border-b-[1px] border-solid border-gray-100 flex justify-between items-center'><span className='p-2 block font-semibold'>2014</span><ChevronDown className="text-gray-400" /></div>
          </div>

          <div>
            <div>
              <h2 className='font-bold'>May 2025</h2>
            </div>
            <div className='w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 mt-5 mb-10'>
              <Card>
                <CardHeader>Amount</CardHeader>
                <CardContent>
                  <div className='font-semibold text-4xl'>$ 2,653.66</div>
                </CardContent>
                <CardFooter className='p-0'>
                  <div className='text-right w-full p-4 border-t-[1px] border-solid border-gray-100'>
                    <a href='' className='text-blue-600'>Download Invoice</a>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>Method</CardHeader>
                <CardContent>
                  <div className='mb-4'>
                    <div className='mb-2 font-semibold flex justify-start gap-2 items-center'><Image
                      alt='laporan performa penjualan 2025'
                      width={30}
                      height={30}
                      src='/assets/img/paypal.png' />PayPal</div>
                  </div>
                  <div>deni.setyawan@gmail.com</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>Invoice Comment</CardHeader>
                <CardContent>
                  success
                </CardContent>
              </Card>
            </div>

            <div className='mb-4'>
              <h2 className='font-bold text-lg'>Bookings and Earnings</h2>
              <p className='text-gray-600'>We sent the payout for this bookings on May 31, 2025, 8:37 am</p>
            </div>
            <div>
              <Table>
                <TableHeader className='bg-gray-100'>
                  <TableRow>
                    <TableHead className='font-semibold'>Program</TableHead>
                    <TableHead className='font-semibold'>Booking Date</TableHead>
                    <TableHead className='font-semibold'>Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className=''>
                    <TableCell className='flex gap-2 p-4 font-semibold'><img
                      src='https://img.wway.io/travelpayouts/brands/icon/104@svg'
                      width={20}
                      height={20}
                    />Agoda</TableCell>
                    <TableCell>May 20, 2025, 8:57 am</TableCell>
                    <TableCell>$ 1.56</TableCell>
                  </TableRow>
                  <TableRow className=''>
                    <TableCell className='flex gap-2 p-4 font-semibold'><img
                      src='https://img.wway.io/travelpayouts/brands/icon/84@svg'
                      width={20}
                      height={20}
                    />Booking.com</TableCell>
                    <TableCell>May 18, 2025, 10:55 am</TableCell>
                    <TableCell>$ 4.56</TableCell>
                  </TableRow>
                  <TableRow className=''>
                    <TableCell className='flex gap-2 p-4 font-semibold'><img
                      src='https://img.wway.io/travelpayouts/brands/icon/137@svg'
                      width={20}
                      height={20}
                    />Klook</TableCell>
                    <TableCell>May 17, 2025, 4:57 pm</TableCell>
                    <TableCell>$ 51</TableCell>
                  </TableRow>
                  <TableRow className=''>
                    <TableCell className='flex gap-2 p-4 font-semibold'><img
                      src='https://img.wway.io/travelpayouts/brands/icon/84@svg'
                      width={20}
                      height={20}
                    />Booking.com</TableCell>
                    <TableCell>May 16, 2025, 07:05 am</TableCell>
                    <TableCell>$ 4.56</TableCell>
                  </TableRow>
                  <TableRow className=''>
                    <TableCell className='flex gap-2 p-4 font-semibold'><img
                      src='https://img.wway.io/travelpayouts/brands/icon/84@svg'
                      width={20}
                      height={20}
                    />Booking.com</TableCell>
                    <TableCell>May 06, 2025, 11:54 am</TableCell>
                    <TableCell>$ 4.56</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

          </div>


        </div >
      </div >
    </div >
  )
}

export default page