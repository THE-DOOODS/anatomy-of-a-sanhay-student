import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";

/* eslint-disable react/prop-types */
function Button(props) {
	var classes = "button";
	if (props.styleName) {
		classes += " " + props.styleName;
	}
	return (
		<div
			className={classes}
			onClick={() => props.onClick()}>
			{props.label}
		</div>
	);
}

function Screen(props) {
	return <div className='screen mt-40'>{props.display}</div>;
}

var numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
var funcs = ["+", "-", "*", "/"];

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentValue: "0",
		};
	}
	number(number) {
		if (this.state.lastButton == ".") {
			console.log(".");
			this.setState({
				currentValue: this.state.currentValue + "." + number,
				lastButton: false,
			});
		} else if (this.state.currentValue == "0" || this.state.lastButton) {
			this.setState({ currentValue: String(number), lastButton: false });
		} else {
			this.setState({ currentValue: String(this.state.currentValue + number) });
		}
	}
	func(action) {
		if (this.state.storedValue) {
			this.setState({
				currentValue: String(
					eval(
						Number(this.state.storedValue) +
							this.state.storedFunc +
							Number(this.state.currentValue)
					)
				),
				storedValue: String(
					eval(
						Number(this.state.storedValue) +
							this.state.storedFunc +
							Number(this.state.currentValue)
					)
				),
				lastButton: action,
				storedFunc: action,
			});
		} else {
			this.setState({
				storedValue: String(this.state.currentValue),
				lastButton: action,
				storedFunc: action,
			});
		}
	}
	clear() {
		this.setState({
			currentValue: "0",
			lastButton: null,
			storedFunc: null,
			storedValue: null,
		});
	}
	negative() {
		this.setState({
			currentValue: String(Number(this.state.currentValue) * -1),
		});
	}
	decimal() {
		if (this.state.currentValue.indexOf(".") == -1) {
			this.setState({ lastButton: "." });
		}
	}
	percent() {
		this.setState({
			currentValue: String(Number(this.state.currentValue) * 0.01),
		});
	}
	calculate() {
		this.setState({
			currentValue: String(
				eval(
					Number(this.state.storedValue) +
						this.state.storedFunc +
						Number(this.state.currentValue)
				)
			),
			storedFunc: false,
			lastButton: "=",
			storedValue: false,
		});
	}

	render() {
		const buttons = numbers.map((number) => (
			<Button
				key={number}
				label={number}
				onClick={() => this.number(number)}
				styleName={"number " + "number-" + number}
			/>
		));
		const operators = funcs.map((func) => (
			<Button
				key={func}
				label={func}
				onClick={() => this.func(func)}
				styleName='operator'
			/>
		));
		let display;
		display = this.state.currentValue;
		return (
			<div>
				<div className='flex justify-between items-center mt-10 w-full absolute z-10 px-10'>
					<Link to='/anatomy'>
						<FaArrowLeftLong
							className=''
							size={40}
						/>
					</Link>
					<IoIosListBox
						className='text-primary'
						size={50}
					/>
				</div>
				<div className='container calculator grid place-items-center justify-center'>
					<Screen display={display} />
					<div className='numbers container'>
						<Button
							label='AC'
							onClick={() => this.clear()}
							styleName='function'
						/>
						<Button
							label='+/-'
							onClick={() => this.negative()}
							styleName='function'
						/>
						<Button
							label='%'
							onClick={() => this.percent()}
							styleName='function'
						/>
						{buttons}
						<Button
							label='.'
							onClick={() => this.decimal()}
							styleName='number'
						/>
					</div>
					<div className='functions container'>
						{operators}
						<Button
							label='='
							onClick={() => this.calculate()}
							styleName='operator'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
