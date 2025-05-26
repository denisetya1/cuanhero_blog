import { permanentRedirect } from 'next/navigation';

type Redirections = {
  [key: string]: string;
}

const redirections: Redirections = {
  "botn": "/lp/banjir-orderan-tanpa-iklan",
}

const page = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params

  return (
    permanentRedirect(redirections[slug]) // 301 for permanent redirect
  )
}

export default page