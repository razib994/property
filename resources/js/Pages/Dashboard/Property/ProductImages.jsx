import React, { Fragment } from "react";
// import { handleChangeByIndex } from "./Helpers";
// import ImageFileInput from "./ImageFileInput";
import ImageFileInput from "./ImageFileInput"
import { handleChangeByIndex } from "./Helpers";


function ProductImages({ handleChange, values, setValues, errors, template, extraData }) {
	return (
		<Fragment>
			{/* <TextInput
					className="pr-6 pb-8 w-full lg:w-1/2" //
					label="Quantity"
					name="quantity"
					errors={errors.quantity}
					//value={values.point}
					onChange={handleChange}
				/>
				<TextInput
					className="pr-6 pb-8 w-full lg:w-1/2" //
					label="Point"
					name="point"
					errors={errors.point}
					value={values.point}
					onChange={handleChange}
				/> */}
			{/* <pre>{JSON.stringify(values.images)}</pre> */}
			<div className="w-full">
				<div className="grid grid-cols-3 gap-4 w-full">
					{values.images &&
						values.images.map((image, index) => {
							return (
								<div key={index} className="w-full">
									<div className="bg-gray-100 p-4 w-full mb-4 flex flex-wrap rounded-lg relative shadow border border-gray-300">
										{/* <FileInput
											label="Image"
											className="pr-6 pb-8 w-full "
											name="image_path"
											accept="image/*"
											errors={errors.image_path}
											value={image.image_path}
											onChange={(file, name) => {
												// console.log(file, name);
												handleChangeByIndex({
													event: {
														target: {
															name: name,
															value: file,
														},
													},
													values: values,
													setValues: setValues,
													index: index,
												 	keyName: "images",
												});
											}}
											currentFleUrl={image.image}
										/> */}
										<ImageFileInput
											label={`Image ${index + 1}`}
											className="pr-6 pb-8 w-full "
											name="image_path"
											accept="image/*"
											errors={errors.image_path}
											value={image.image_path}
											onChange={(file, name) => {
												// console.log(file, name);
												handleChangeByIndex({
													event: {
														target: {
															name: name,
															value: file,
														},
													},
													values: values,
													setValues: setValues,
													index: index,
													keyName: "images",
												});
											}}
											helpText="Recommended Image  Max Size(160kb)"
										/>

										{/* <TextInput
										className="w-full lg:w-1/3 p-2"
										label="Point Quantity"
										name="quantity"
										placeholder="Enter Point Quantity"
										value={point.quantity}
										onChange={(e) =>
											handleChangeByIndex({
												event: e,
												values: values,
												setValues: setValues,
												index: index,
												keyName: "images",
											})
										}
									/> */}

										{/* <TextInput
										className="w-full lg:w-1/3 p-2"
										label="Point Redeem"
										name="point"
										// disabled
										placeholder="Enter Point Redeem"
										value={point.point || ""}
										onChange={(e) =>
											handleChangeByIndex({
												event: e,
												values: values,
												setValues: setValues,
												index: index,
												keyName: "points",
											})
										}
									/> */}
										<button
											type="button"
											onClick={() => {
												if (confirm("Are you sure you want to delete this item?")) {
													handleChangeByIndex({
														action: "remove",
														values: values,
														setValues: setValues,
														keyName: "images",
														index: index,
													});
												}
											}}
											className="absolute -top-3 -right-3"
										>
											<img src="/backend_assets/images/cross-rounded.svg" className="w-8 h-8" />
										</button>
									</div>
								</div>
							);
						})}
				</div>
				<button
					type="button"
					onClick={() => {
						handleChangeByIndex({
							action: "add",
							values: values,
							setValues: setValues,
							keyName: "images",
							template: template,
						});
					}}
					className=" mb-4 rounded-md border border-[#D53967] p-2 text-[10.5px] font-semibold uppercase leading-[13px] tracking-wide text-[#D53967]"
				>
					+ ADD IMAGE
				</button>
			</div>
		</Fragment>
	);
}

export default ProductImages;
