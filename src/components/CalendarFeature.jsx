import Button from "./Button"
import Heading from "./Heading"
import Top from '../assets/calendar-feature-screenshot.png'

const CalendarFeature = () => {
    return (
        <section className="bg-white py-[90px] px-5 xl:px-0">
            <div className="w-full max-w-[400px] flex flex-col justify-center items-center mx-auto lg:flex-row lg:max-w-[1240px] lg:gap-[50px]">
                <div className="flex flex-col mb-[60px] lg:mb-0">
                    <Heading type="h2" className="text-center lg:text-left lg:max-w-[335px]" >
                        Lorem Ipsum is simply
                    </Heading>

                    <Heading type="h4" className="mb-[60px] mt-4 text-center lg:text-left lg:mb-[70px] lg:max-w-[532px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Heading>

                    <Button className='lg:max-w-[236px]'>Try For Free</Button>
                </div>

                <img src={Top} alt="itens" />
            </div>
        </section>
    )
}

export default CalendarFeature