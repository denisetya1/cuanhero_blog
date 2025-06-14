import { permanentRedirect, redirect } from 'next/navigation';

type Redirections = {
  [key: string]: string;
}

const redirections: Redirections = {
  "botn": "/lp/banjir-orderan-tanpa-iklan",
  "jjjc": "/lp/jalan-jalan-jadi-cuan",
}

const page = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  if (!redirections[slug]) {
    return (
      redirect('/404') // Redirect to 404 page if slug not found
    )
  }

  return (
    permanentRedirect(redirections[slug]) // 301 for permanent redirect
  )
}

export default page