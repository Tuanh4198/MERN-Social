import React from 'react';

const ListChat = () => {
  return (
		<div className="message-users">
			<div className="message-head">
				<h4>Chat Messages</h4>
				<div className="more">
					<div className="more-post-optns"><i className="ti-settings" />
						<ul>
							<li><i className="fa fa-wrench" />Setting</li>
							<li><i className="fa fa-envelope-open" />Active Contacts</li>
							<li><i className="fa fa-folder-open" />Archives Chats</li>
							<li><i className="fa fa-eye-slash" />Unread Chats</li>
							<li><i className="fa fa-flag" />Report a problem</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="message-people-srch">
				<form method="post">
					<input type="text" placeholder="Search Friend.." />
					<button type="submit"><i className="fa fa-search" /></button>
				</form>
				<div className="btn-group add-group" role="group">
					<button id="btnGroupDrop2" type="button" className="btn group dropdown-toggle user-filter">
						All
					</button>
					<div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
						<a className="dropdown-item" href="#">Online</a>
						<a className="dropdown-item" href="#">Away</a>
						<a className="dropdown-item" href="#">unread</a>
						<a className="dropdown-item" href="#">archive</a>
					</div>
				</div>
			</div>
			<div className="mesg-peple">
				<ul className="nav nav-tabs nav-tabs--vertical msg-pepl-list">
					<li className="nav-item unread">
						<a className="active">
							<figure>
								<span className="status f-online" />
							</figure>
							<div className="user-name">
								<h6>Andrew</h6>
								<span>you send a video - 2hrs ago</span>
							</div>
							<div className="more">
								<div className="more-post-optns"><i className="ti-more-alt" />
									<ul>
										<li><i className="fa fa-bell-slash-o" />Mute</li>
										<li><i className="ti-trash" />Delete</li>
										<li><i className="fa fa-folder-open-o" />Archive</li>
										<li><i className="fa fa-ban" />Block</li>
										<li><i className="fa fa-eye-slash" />Ignore Message</li>
										<li><i className="fa fa-envelope" />Mark Unread</li>
									</ul>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
  );
};

export default React.memo(ListChat);
