import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const PageLink = ({ active, label, url }) => {
	const className = classNames(["mr-1 mb-1", "px-4 py-3", "border rounded", "text-sm", "hover:bg-white", "focus:border-secondary focus:text-secondary"], {
		"bg-white": active,
		"ml-auto": label === "Next",
	});
	return (
		<a className={className} href={url}>
			<span dangerouslySetInnerHTML={{__html: label}}></span>
			{/* {label} */}
		</a>
	);
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
	const className = classNames("mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray", {
		"ml-auto": label === "Next",
	});
	return <div className={className}><span dangerouslySetInnerHTML={{__html: label}}></span></div>;
};

export default ({ links = [] }) => {
	console.log(links.label)
	// dont render, if there's only 1 page (previous, 1, next)
	if (links.length === 3) return null;
	return (
		<div className="mt-6 -mb-1 flex flex-wrap ">
			{links.map(({ active, label, url }) => {
				return url === null ? <PageInactive key={label} label={label} /> : <PageLink key={label} label={label} active={active} url={url} />;
			})}
		</div>
	);
};
