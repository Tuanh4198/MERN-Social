import React from 'react';

const InfoPartner = () => {
	return (
		<div className="col-lg-4 col-md-4">
			<div className="chater-info">
				<figure></figure>
				<h6>Andrew</h6>
				<span>Online</span>
				<div className="userabout">
					<span>About</span>
					<p>I love reading, traveling and discovering new things. You need to be happy in life.</p>
					<ul>
						<li><span>Phone:</span> +123976980</li>
						<li><span>Website:</span> <a href="#">www.abc.com</a></li>
						<li><span>Email:</span> <a href="http://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a0d3c1cdd0ccc5e0c7cdc1c9cc8ec3cfcd">[email&nbsp;protected]</a></li>
						<li><span>Phone:</span> Ontario, Canada</li>
					</ul>
					<div className="media">
						<span>Media</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(InfoPartner);
