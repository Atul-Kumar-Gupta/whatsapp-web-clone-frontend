import React from "react";
import Icon from "../Icon/index";
import { Link } from "react-router-dom";
import formatTime from "../../utils/formatTime";
import profilePicture from '../../assets/images/profile-picture-default.jpg'
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state";
// import { useUsersContext } from "context/usersContext";

const Contact = ({ contact }) => {
	const dispatch = useDispatch()
	const { updateChatWindowUser } = bindActionCreators(actionCreators, dispatch)
	// const state = useSelector(state => state)
	let pp = contact?.image?.length > 0 ? contact.image : profilePicture
	let name = contact?.name?.length > 0 ? contact.name : contact.mobile
	let mobile = contact.mobile.length > 0 ? contact.mobile : ''
	// const { setUserAsUnread } = useUsersContext();
	// const getLastMessage = () => {
	// 	const messageDates = Object.keys(contact.messages);
	// 	const recentMessageDate = messageDates[messageDates.length - 1];
	// 	const messages = [...contact.messages[recentMessageDate]];
	// 	const lastMessage = messages.pop();
	// 	return lastMessage;
	// };

	// const lastMessage = getLastMessage(contact);

	return (
		<div className="sidebar-contact" onClick={() => {
			updateChatWindowUser(mobile)
		}}>
			<div className="sidebar-contact__avatar-wrapper">
				<img
					src={pp}
					alt={'contact.profile_picture'}
					className="avatar"
				/>
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {name} </h2>
					<span className="sidebar-contact__time">
						{'formatTime(lastMessage.time)'}
					</span>
				</div>
				<div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{/* {lastMessage.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)} */}
						<span
							className={`sidebar-contact__message ${'!!contact.unread' ? "sidebar-contact__message--unread" : ""
								}`}
						>
							{contact.typing ? <i> typing...</i> : 'lastMessage?.content'}
						</span>
					</p>
					<div className="sidebar-contact__icons">
						{'contact.pinned' && (
							<Icon id="pinned" className="sidebar-contact__icon" />
						)}
						{'!!contact.unread' && (
							<span className="sidebar-contact__unread">{'contact.unread'}</span>
						)}
						<button aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
