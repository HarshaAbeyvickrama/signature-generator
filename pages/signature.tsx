import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
    data: any;
}

const Signature: NextPage<Props> = ({ data }) => {
    if (data == undefined) return <div></div>;

    const host = window.location.protocol + "://"+ window.location.hostname;

    return (
        <>
            <html lang="en">
                <head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
                </head>
                <body>
                    <div className="flex flex-col  w-[800px] font-sans">
                        <div>
                            <p className="font-semibold">{data.fullname}</p>
                            <p className="italic">{data.designation}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-row w-1/2 border-r-2  border-dotted items-center ">
                                <div className='2'>
                                    <Image
                                        src="/assets/bitzquad-logo.png"
                                        alt="Picture of the author"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className='text-sm'>
                                    <p>Bitzquad (Pvt) Ltd</p>
                                    <p>No 275/2,
                                        <br />
                                        Katuwana Rd,
                                        <br />
                                        Homagama,
                                        <br />
                                        Sri Lanka.
                                    </p>
                                </div>
                            </div>
                            <div className="w-3/5 flex flex-col pl-5">
                                <div className='h-full flex flex-row'>
                                    <div className='w-3/4 text-sm'>
                                        <div>
                                            <span className='text-gray-500 italic'>General : </span>
                                            <span>+94 77 881 3384 </span>
                                        </div>
                                        <div>
                                            <span className='text-gray-500 italic'>Mobile : </span>
                                            <span>{data.contact}</span>
                                        </div>
                                        <div>
                                            <span className='text-gray-500 italic'>Web : </span>
                                            <span><a className='text-blue-600' href="https://www.bitzquad.com/">https://www.bitzquad.com</a></span>
                                        </div>
                                        <div>
                                            <span className='text-gray-500 italic'>Email : </span>
                                            <span><a className='text-blue-600' href={`mailto:${data.email}`}></a>{data.email}</span>
                                        </div>
                                    </div>
                                    <div className='w-1/4'>
                                        QR Code
                                    </div>
                                </div>
                                <div>
                                    {
                                        data.social.linkedin !== "" &&
                                        <span className='mr-2'>
                                            <a href={`https://www.linkedin.com/in/${data.social.linkedin}`}>
                                                <i className="ri-linkedin-fill text-lg"></i>
                                            </a>
                                        </span>
                                    }
                                    {
                                        data.social.facebook !== "" &&
                                        <span className='mr-2'>
                                            <a href={`https://www.facebook.com/${data.social.facebook}`}>
                                                <i className="ri-facebook-fill text-lg"></i>
                                            </a>
                                        </span>
                                    }
                                    {
                                        data.social.discord !== "" &&
                                        <span className='mr-2'>
                                            <a href={`discordapp.com/users/${data.social.discord}`}>
                                                <i className="ri-discord-fill text-lg"></i>
                                            </a>
                                        </span>
                                    }
                                    {
                                        data.social.discord !== "" &&
                                        <span className='mr-2'>
                                            <a href={`https://www.behance.net/${data.social.behance}`}>
                                                <i className="ri-behance-fill text-lg"></i>
                                            </a>
                                        </span>
                                    }
                                    {
                                        data.social.medium !== "" &&
                                        <span className='mr-2'>
                                            <a href={`https://${data.social.medium}.medium.com/`}>
                                                <i className="ri-medium-fill text-lg"></i>
                                            </a>
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='text-[10px] text-gray-500'>
                            <p>
                                Some of the information contained within this email may be considered as sensitive, such that the disclosure of such information to a party other than the intended recipient could result in harming the business interests of either Bitzquad (Pvt) Ltd. and/or the organization represented by the intended recipient. It is understood, therefore, that exchange of the information contained in this email between the two parties will not result in such disclosure, either in spirit or fact, without the explicit authorization of the party concerned. If you are not the intended recipient of this email, please contact
                                <a href="mailto:admin@bitzquad.io" className='text-blue-600'> admin@bitzquad.io</a>
                            </p>
                        </div>
                    </div>
                </body>
            </html>


        </>
    );
}

export default Signature;