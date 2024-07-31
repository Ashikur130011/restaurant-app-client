import { Parallax } from 'react-parallax';

const CoverLite = ({ title, img, text }) => {
    return (
        <Parallax
            className='mt-16'
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[450px]">
                <div className="hero-overlay "></div>
                <div className="text-neutral-content bg-slate-50 w-3/5  p-16 bg-opacity-10 text-center">
                    <div className="max-w-m">
                        <h1 className="mb-5 text-5xl uppercase font-serif">{title}</h1>
                        <p className="mb-5  font-serif">{text}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverLite;