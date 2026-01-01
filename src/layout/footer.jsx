import { Sticker } from "../components/sticker";
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'

export const Footer = () => {

    return (
        <footer className="bg-wetsoil p-4 shadow-lg w-full relative justify-center flex flex-col">
            <div className="text-white text-sm">
                Jordyn Niara Parker &copy; {new Date().getFullYear()}
            </div>
            <div className="mt-2 flex gap-1 justify-center">
                <Sticker size="xs">
                    <img
                        src={inchwormMascot}
                        alt="Inchworm colored Mascot"
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
                <Sticker size="xs">
                    <img
                        src={strawberryMascot}
                        alt="Strawberry colored Mascot"
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
                <Sticker size="xs">
                    <img
                        src={skyMascot}
                        alt="Sky colored Mascot"
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
            </div>
        </footer>
    );
};
