import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import Icon from "../../../components/Icon/index";
import OptionsBtn from "../../../components/OptionsButton/index";

const Header = ({ user, openProfileSidebar, openSearchSidebar }) => {
	const { changeChatWindow, updateSocketConnection } = useSelector(state => state)
	const [onlineUsers, setOnlineUsers] = useState(null);
	useEffect(() => {
		updateSocketConnection && updateSocketConnection.on('connected_users', (data) => {

			setOnlineUsers(data.onlineUsers)
		})

	}, [updateSocketConnection, onlineUsers, changeChatWindow])

	return (
		<header className="header chat__header">
			<div className="chat__avatar-wrapper"
				onClick={openProfileSidebar}
			>
				<img src={user?.profile_picture} alt={user?.name} className="avatar" />
			</div>

			<div className="chat__contact-wrapper"
				onClick={openProfileSidebar}
			>
				<h2 className="chat__contact-name"> {changeChatWindow}</h2>
				<p className="chat__contact-desc">
					{!onlineUsers && 'click here for contact info'}
					{(onlineUsers && changeChatWindow) && (onlineUsers.find(item => item.mobile == changeChatWindow) ? "online" : "typing...")}
				</p>
			</div>
			<div className="chat__actions">
				<button
					className="chat__action"
					aria-label="Search"
					onClick={openSearchSidebar}
				>
					<Icon
						id="search"
						className="chat__action-icon chat__action-icon--search"
					/>
				</button>
				<OptionsBtn
					className="chat__action"
					ariaLabel="Menu"
					iconId="menu"
					iconClassName="chat__action-icon"
					options={[
						"Contact Info",
						"Select Messages",
						"Mute notifications",
						"Clear messages",
						"Delete chat",
					]}
				/>
			</div>
		</header>
	);
};

export default Header;
