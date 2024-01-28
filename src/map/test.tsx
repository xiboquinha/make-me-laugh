import React, { useRef, useEffect } from 'react';

const ScrollableContainer: React.FC = () => {
    const outerDivRef = useRef<HTMLDivElement>(null);
    const innerDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the inner div has reached the bottom
            if (innerDivRef.current && outerDivRef.current) {
                const isAtBottom = innerDivRef.current.scrollHeight - innerDivRef.current.scrollTop === innerDivRef.current.clientHeight;

                // If at the bottom, scroll the outer div
                if (isAtBottom) {
                    outerDivRef.current.scrollTop += 10; // You can adjust the scroll amount
                }
            }
        };

        if (outerDivRef.current) {
            outerDivRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            // Clean up event listener on component unmount
            if (outerDivRef.current) {
                outerDivRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='bg-red-400' style={{ height: '200px', overflow: 'auto' }} ref={outerDivRef}>
            <div style={{ height: '400px' }} ref={innerDivRef}>
                conteudo
            </div>
        </div>
    );
};

export default ScrollableContainer;
