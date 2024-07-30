

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='my-16 md:w-3/12 mx-auto'>
            <h4 className='my-4 text-red-400'>-- {subHeading} --</h4>
            <div className='border-y-4 border-red-100'>
                <h1 className='uppercase text-4xl my-4'>{heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;