import React from 'react';

const PartnerModal = ({toggleVideoModal}) => {
    return (
        <>
           <div className="nirmana__ami__modal">
				<div id="demo-modal" className="modal">
					<div className="modal__content">
						<div className="video__site__container">
							<iframe
								src={`https://www.youtube.com/embed/a3VMQdVvgdw?autoplay=1`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
							<div className="link__share__div">
								<div className="">
									<span className="share__div share__div__modal">
										<img src="/assets/nirmana-ami/share-white.png" alt="" className="" />
										Share
									</span>
									<a href="" className="">
										<img src="/assets/nirmana-ami/Facebook.svg" alt="" className="" />
									</a>
									<a href="" className="">
										<img src="/assets/nirmana-ami/WhatsApp.svg" alt="" className="" />
									</a>
									<a href="" className="">
										<img src="/assets/nirmana-ami/link-white.svg" alt="" className="" />
									</a>
								</div>
							</div>
						</div>
						
						<svg
							className="modal__close"
							onClick={toggleVideoModal}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</div>
				</div>
			</div>
        </>
    );
}

export default PartnerModal;
