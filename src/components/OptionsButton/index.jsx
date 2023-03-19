import React, { useState } from "react";
import constant from "../../constant";
import useCookie from "../../hooks/useCookie";
import Icon from "../Icon/index";
import "./styles/main.css";

const OptionsBtn = ({
	className,
	iconId,
	iconClassName,
	ariaLabel,
	options = [],
	position = "left",
	showPressed = true,
	...props
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [token, setToken, deleteToken] = useCookie(constant.keys.token);

	return (
		<div className="pos-rel">
			<button
				aria-label={ariaLabel}
				className={`options-btn ${showOptions && showPressed ? "options-btn--pressed" : ""
					} ${className || ""}`}
				onClick={() => setShowOptions(!showOptions)}
				{...props}
			>
				<Icon id={iconId} className={iconClassName} />
			</button>
			<ul
				className={`options-btn__options ${showOptions ? "options-btn__options--active" : ""
					} ${position === "right" ? "options-btn__options--right" : ""}`}
			>
				{options.map((option, index) => {
					if (option === "Log out") {
						return (<li className="options-btn__option" key={index} onClick={() => deleteToken()}>
							{option}
						</li>)
					}
					else {
						return (<li className="options-btn__option" key={index}>
							{option}
						</li>)
					}
				})}
			</ul>
		</div>
	);
};

export default OptionsBtn;
