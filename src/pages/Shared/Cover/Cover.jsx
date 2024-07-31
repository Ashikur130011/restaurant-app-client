import { Parallax } from 'react-parallax';

const Cover = ({ heading, img, subHeading }) => {
    
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[500px]">
                <div className="hero-overlay "></div>
                <div className="text-neutral-content bg-slate-50 px-36 py-16 bg-opacity-10 text-center">
                    <div className="max-w-m">
                        <h1 className="mb-5 text-6xl uppercase font-serif">{heading}</h1>
                        <p className="mb-5 uppercase font-serif">{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;