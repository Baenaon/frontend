import Head from 'next/head'
import Image from 'next/image'
import Layout from '../pages/components/layout';


export default function Home() {
  return (
    <Layout>

      <Head>
        <title>배나온</title>
        <meta name="description" content="배나온" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <h1 className="text-3xl font-bold underline">
            홈입니다
        </h1>

        <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> 배나온
                        <br className="hidden lg:inline-block"/>
                    </h1>
                    <p className="mb-8 leading-relaxed">배달비 부담스러우시죠?
                        그래서 준비했습니다. 당신의 배달비 저희가 아껴드릴게요 </p>
                    <div className="flex justify-center">
                        <button
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
                        </button>
                        <button
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                </div>
            </div>
        </section>

    </Layout>
  )
}
