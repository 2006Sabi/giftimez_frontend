import React from 'react';
import Button from '../common/Button';

const GalleryFilter = ({ activeCategory, setActiveCategory, categories }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
                variant={activeCategory === 'All' ? 'primary' : 'ghost'}
                onClick={() => setActiveCategory('All')}
                className={activeCategory === 'All' ? '' : 'border-2 border-gray-200 text-gray-500 hover:text-primary hover:border-primary bg-white'}
            >
                All
            </Button>
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? 'primary' : 'ghost'}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? '' : 'border-2 border-gray-200 text-gray-500 hover:text-primary hover:border-primary bg-white'}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default GalleryFilter;
