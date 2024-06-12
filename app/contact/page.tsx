import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Page(){
    return(
        <div className="flex flex-col gap-4 max-w-[1100px] mx-auto p-6 text-sky-500">
            <div className="text-6xl tracking-tighter font-bold text-orange-500">Contact Us</div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-5xl font-bold tracking-tighter">Kiddee Lab</div>
                    <div className="text-3xl font-semibold tracking-tighter">{"Lasalle's Avenue"}</div>
                    <div className="text-xl">{"Lasalle's Avenue บางนา Bang Na, Bangkok 10260"}</div>
                    <div className="flex flex-row items-center gap-4">
                        <Link href={'https://www.facebook.com/kiddeelab/'} className='text-3xl'><FontAwesomeIcon icon={faSquareFacebook}/></Link>
                        <Link href={'https://www.instagram.com/kiddeelab'} className='text-3xl'><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                        <Link href={'https://page.line.me/kiddeelab'} className='text-[1.640625rem]'><FontAwesomeIcon icon={faLine} /></Link>
                        <Link href={'tel:0838871199'}><FontAwesomeIcon icon={faPhone} /></Link>
                    </div>
                </div>
               
                <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.021905252534!2d100.62125527445394!3d13.656431399495746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f591c6f0a67%3A0xdf5b1c85d6bd5b7c!2sKiddee%20Lab!5e0!3m2!1sen!2sth!4v1711448985051!5m2!1sen!2sth" width="350" height="350" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-5xl font-bold tracking-tighter">Kiddee Lab</div>
                    <div className="text-3xl font-semibold tracking-tighter">{"Chaiyapruk Branch"}</div>
                    <div className="text-xl">{"99/9 Moo 5 (C321) The Crystal PTT Chaiyapruek, Nonthaburi"}</div>
                    <div className="flex flex-row gap-4 items-center">
                        <Link href={'https://www.facebook.com/KiddeeLab.Chaiyapruk'} className='text-3xl'><FontAwesomeIcon icon={faSquareFacebook}/></Link>
                        <Link href={'https://line.me/R/ti/p/@373uxkbp'} className='text-[1.640625rem]'><FontAwesomeIcon icon={faLine} /></Link>
                    </div>
                </div>
                <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15490.405098098247!2d100.474662!3d13.922765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e285a87cc60e9f%3A0x3f64d906c99eaf09!2sThe%20Crystal%20PTT!5e0!3m2!1sen!2sus!4v1711449198834!5m2!1sen!2sus" width="350" height="350" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </div>
    )
}