import { isValidHttpUrl } from "@/Shared/Helpers";
import { Fragment, useEffect, useRef, useState } from "react";

function ImageFileInput({
	className,
	name,
	imageFlagData = null,
	label,
	accept,
	errors = [],
	onChange,
	value = null,
	helpText = null,
	labelRightComponent = null,
}) {
	const [oldFile, setOldFile] = useState(null);
	const [file, setFile] = useState();
	const [preview, setPreview] = useState();
	const fileInput = useRef();
	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!file) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(file);
		let img = new Image();
		img.src = objectUrl;
		img.onload = function () {
			console.log(this.width + " " + this.height);
			URL.revokeObjectURL(objectUrl);
		};
		setPreview(objectUrl);

		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl);
	}, [file]);

	// useEffect(() => {
	// 	if (isValidHttpUrl(value)) {
	// 		setPreview(value);
	// 	}
	// }, [value]);

	useEffect(() => {
		// console.log(`Name: ${name}, value: ${value}`);
		if (isValidHttpUrl(value)) {
			setOldFile(value);
		}
	}, []);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setFile(undefined);
			return;
		}

		// I've kept this example simple by using the first image instead of multiple
		const uploadedFile = e.target.files[0];
		// console.log(uploadedFile);
		setFile(uploadedFile);
		onChange(uploadedFile, name);
	};

	function browse() {
		fileInput.current.click();
	}

	function remove() {
		setFile(null);
		onChange(null, name);
		fileInput.current.value = null;
	}

	return (
		<div className="w-full">
			{label ? <p className="text-base font-normal text-black">{label}</p> : null}
			<div className="my-1">{labelRightComponent}</div>
			<div className="">
				<div className="flex w-full items-center justify-center relative">
					{file && oldFile ? (
						<button
							type="button"
							onClick={() => {
								remove();
								onChange(oldFile, name);
							}}
							className="bg-[#F76565] text-white rounded-full px-4 py-2 text-xs absolute top-4 left-2 z-10"
						>
							Reset
						</button>
					) : null}

					{file ? (
						<div className="my-2 p-2 h-64 w-full flex items-center justify-center rounded-lg border-2 border-dashed border-black bg-[#F1F0F0] relative">
							<img src={preview} className="rounded-lg w-full h-full object-contain object-center" />
							{file ? (
								<button
									type="button"
									onClick={remove}
									className="bg-[#F76565] text-white rounded-full px-4 py-2 text-xs absolute top-2 right-2"
								>
									Remove
								</button>
							) : null}
						</div>
					) : (
						<Fragment>
							{oldFile && value ? (
								<div
									className={`my-2 p-2 h-64 w-full flex items-center justify-center rounded-lg ${
										imageFlagData ? "!border-2 !border-dashed !border-[#FF2727]" : "border-2 border-dashed border-black"
									} bg-[#F1F0F0] relative`}
								>
									<img src={oldFile} className="rounded-lg w-full h-full object-contain object-center" />
								</div>
							) : (
								<button
									type="button"
									onClick={browse}
									className={`my-2 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg ${
										imageFlagData ? "!border-2 !border-dashed !border-[#FF2727]" : "border-2 border-dashed border-black"
									} bg-[#F1F0F0]`}
								>
									<div className="flex items-center justify-center pt-5 pb-6 ">
										<svg width={53} height={39} viewBox="0 0 53 39" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M0.275391 38.9999L12.7541 22.16L22.0368 27.7435L33.5546 9.54883L52.4334 38.9999H0.275391Z"
												fill="#D1D1D1"
											/>
											<path
												d="M9.55368 9.00326C11.7617 9.00326 13.5517 6.98781 13.5517 4.50163C13.5517 2.01545 11.7617 0 9.55368 0C7.34564 0 5.55566 2.01545 5.55566 4.50163C5.55566 6.98781 7.34564 9.00326 9.55368 9.00326Z"
												fill="#D1D1D1"
											/>
										</svg>
										<p className="text-xl font-medium text-black">+ Upload</p>
									</div>
								</button>
							)}
						</Fragment>
					)}
					<input id={name} ref={fileInput} accept={accept} type="file" className="hidden" onChange={onSelectFile} />
				</div>
				<div className="flex items-end gap-x-1">
					{/* <p className="text-xs font-medium tracking-tight text-[#F76565]">{helpText}</p> */}

					{helpText ? (
						<div className="bg-[#ededed] border border-[#E8E8E8] flex items-center justify-center rounded-lg py-2 px-4">
							<img src="/assets/light-icon.png" alt="" className="mr-2" />
							<p className="font-semibold text-[11px] text-black normal-case">{helpText}</p>
						</div>
					) : null}

					{oldFile || file || !value ? (
						<button type="button" onClick={browse} className="bg-[#F76565] h-[30px] text-white rounded-full px-4 py-2 text-xs">
							{file || !value ? "Upload" : "Update"}
						</button>
					) : null}
				</div>
			</div>
			{errors && errors.length > 0 && <div className="form-error">{errors}</div>}
			{/* <p className="p-4">
				<pre className="text-xs whitespace-pre-wrap">{JSON.stringify(value)}</pre>
			</p> */}
		</div>
	);
}

export default ImageFileInput;

// const Button = ({ text, onClick }) => (
// 	<button type="button" className="focus:outline-none px-4 py-1 bg-gray-600 hover:bg-gray-700 rounded-sm text-xs font-medium text-white" onClick={onClick}>
// 		{text}
// 	</button>
// );

// const x = ({ className, name, label, accept, errors = [], onChange, currentFleUrl = null }) => {
// 	const fileInput = useRef();
// 	const [file, setFile] = useState(null);

// 	function browse() {
// 		fileInput.current.click();
// 	}

// 	function remove() {
// 		setFile(null);
// 		onChange(null, name);
// 		fileInput.current.value = null;
// 	}

// 	function handleFileChange(e) {
// 		const file = e.target.files[0];
// 		setFile(file);
// 		onChange(file, name);
// 	}

// 	return (
// 		<div className={className}>
// 			{label && (
// 				<div className="flex justify-between">
// 					<label className="form-label" htmlFor={name}>
// 						{label}:
// 					</label>
// 					{currentFleUrl ? (
// 						<span className="mb-2 text-right">
// 							<a href={currentFleUrl} target="_blank">
// 								Current File
// 							</a>
// 						</span>
// 					) : null}
// 				</div>
// 			)}
// 			<div className={`form-input p-0 ${errors.length && "error"}`}>
// 				<input id={name} ref={fileInput} accept={accept} type="file" className="hidden" onChange={handleFileChange} />
// 				{!file && (
// 					<div className="p-0">
// 						<Button text="Browse" onClick={browse} />
// 					</div>
// 				)}
// 				{file && (
// 					<div className="flex items-center justify-between p-0 flex-wrap">
// 						<div className="flex-1 pr-1">
// 							{file.name}
// 							<span className="text-gray-600 text-xs ml-1">({filesize(file.size)})</span>
// 						</div>
// 						<Button text="Remove" onClick={remove} />
// 					</div>
// 				)}
// 			</div>

// 			{errors.length > 0 && <div className="form-error">{errors}</div>}
// 		</div>
// 	);
// };
