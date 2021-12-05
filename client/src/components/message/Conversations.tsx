import React from 'react';

const Conversations = () => {
	return (
		<>
			<div className="col-lg-12">
				<div className="mesg-area-head">
					<div className="active-user">
						<figure>
							<span className="status f-online" />
						</figure>
						<div>
							<h6 className="unread">Andrew</h6>
							<span>Online</span>
						</div>
					</div>
					<ul className="live-calls">
						<li className="audio-call"><span className="fa fa-phone" /></li>
						<li className="video-call"><span className="fa fa-video" /></li>
						<li className="uzr-info"><span className="fa fa-info-circle" /></li>
						<li>
							<div className="dropdown">
								<button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="ti-view-grid" />
								</button>
								<div className="dropdown-menu dropdown-menu-right">
									<a className="dropdown-item audio-call" href="#"><i className="ti-headphone-alt" />Voice Call</a>
									<a href="#" className="dropdown-item video-call"><i className="ti-video-camera" />Video Call</a>
									<hr />
									<a href="#" className="dropdown-item"><i className="ti-server" />Clear History</a>
									<a href="#" className="dropdown-item"><i className="ti-hand-stop" />Block Contact</a>
									<a href="#" className="dropdown-item"><i className="ti-trash" />Delete Contact</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-lg-8 col-md-8">
						<div className="mesge-area">
							<ul className="conversations">
								<li>
									<figure></figure>
									<div className="text-box">
										<p>HI, i have faced a problem with your software. are you available now</p>
										<span><i className="ti-check" /><i className="ti-check" /> 2:32PM</span>
									</div>
								</li>
								<li className="me">
									<figure></figure>
									<div className="text-box">
										<p>HI, i have checked about your query, there is no any problem like that...</p>
										<span><i className="ti-check" /><i className="ti-check" /> 2:35PM</span>
									</div>
								</li>
								<li className="you">
									<figure></figure>
									<div className="text-box">
										<p>
											thank you for your quick reply, i am sending you a screenshot
											<em>Size: 106kb <ins>download Complete</ins></em>
										</p>
										<span><i className="ti-check" /><i className="ti-check" /> 2:36PM</span>
									</div>
								</li>
								<li className="me">
									<figure></figure>
									<div className="text-box">
										<p>Yes, i have to see, please follow the below link.. <a href="#">https://www.abc.com</a></p>
										<span><i className="ti-check" /><i className="ti-check" /> 2:38PM</span>
									</div>
								</li>
								<li className="me">
									<figure></figure>
									<div className="text-box">
										<p>
											Dear You May again download the package directly.. 
											<span><ins>File.txt</ins> <i className="fa fa-file" /> 30MB download complete</span>
										</p>
										<span><i className="ti-check" /><i className="ti-check" /> 2:40PM</span>
									</div>
								</li>
								<li className="you">
									<figure></figure>
									<div className="text-box">
										<div className="wave">
											<span className="dot" />
											<span className="dot" />
											<span className="dot" />
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="message-writing-box">
							<form method="post">
								<div className="text-area">
									<input type="text" placeholder="write your message here.." />
									<button type="submit"><i className="fa fa-paper-plane-o" /></button>
								</div>
								<div className="emojies">
									
								</div>
								<div className="attach-file">
									<label className="fileContainer">
										<i className="ti-clip" />
										<input type="file" />
									</label>
								</div>
							</form>
						</div>
					</div>
		</>
	);
};

export default React.memo(Conversations);
