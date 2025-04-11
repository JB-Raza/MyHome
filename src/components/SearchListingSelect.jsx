import React, { useState, useRef, useEffect } from 'react';

export default function SearchListingSelect({ title, itemList }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownVal, setDropdownVal] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleDropdownVal = (val) => setDropdownVal(val);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="custom-dropdown w-100 search-listing-select">
            <input
                type="button"
                className="dropdown-btn"
                value={dropdownVal || title}
                onClick={toggleDropdown}
            />
            <i className={`fa-solid text-dark fa-angle-down ${dropdownVal !=null && dropdownVal !== title ? "d-none" : "d-inline"}`} />
            <i
                className={`fa-solid text-dark fa-xmark ${dropdownVal !=null && dropdownVal !== title ? "d-inline" : "d-none"}`}
                onClick={() => setDropdownVal(title)}
            />

            <div className={`dropdown-content ${isDropdownOpen ? "d-block" : "d-none"}`} id={title}>
                {itemList?.map((item) => (
                    <div
                        key={item.value}
                        className="dropdown-item d-flex justify-content-between align-items-center"
                        onClick={() => handleDropdownVal(item.value)}
                    >
                        <div className="wrapper p-3 cursor-pointer d-flex gap-2 flex-grow-1 align-items-center">
                            {title === "Region" && (
                                <input
                                    className="form-check-input cursor-pointer rounded-0 m-0 fs-5"
                                    type="checkbox"
                                    value=""
                                    id={`checkbox-${item.value}`}
                                />
                            )}
                            <label className="form-check-label cursor-pointer" htmlFor={`checkbox-${item.value}`}>
                                {title === "Price" || title === "Rent Price" ? "< $" : ""}
                                {item.value}
                            </label>
                        </div>
                        {!(title === "Price" || title === "Rent Price") && (
                            <span className="badge color-dark-blue-gray me-3 d-flex align-items-center bg-normal-gray rounded-pill">
                                {item.quantity}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <input type="hidden" className="selected-value" name={title} value={dropdownVal} />
        </div>
    );
}
