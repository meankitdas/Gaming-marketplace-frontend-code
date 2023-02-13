import Select from "react-dropdown-select";
import styled from "styled-components";

interface DropdownProps {
	isSingle?: boolean;
	name?: string;
	title?: string;
	data?: any;
	onSingleChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
	isMultiple?: boolean;
	multiData?: any;
	multiName?: string;
	multiTitle?: string;
	onMultiChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
	list?: any;
}

const StyledSelect = styled(Select)`
	background: transparent;
	border: #795315 !important;
	color: #fff;
	outline: 2px solid #795315;
	height: 4rem;
	font-size: 1.5rem;
	font-family: Inter;
	border-radius: 8px;

	.react-dropdown-select-clear,
	.react-dropdown-select-dropdown-handle {
		color: #fff;
	}
	.react-dropdown-select-option {
		border: 1px solid #795315;
	}
	.react-dropdown-select-item {
		color: #333;
	}
	.react-dropdown-select-input {
		color: #fff;
	}
	.react-dropdown-select-dropdown {
		position: absolute;
		left: 0;
		border: none;
		width: 500px;
		padding: 0;
		display: flex;
		flex-direction: column;
		border-radius: 2px;
		max-height: 300px;
		overflow: auto;
		z-index: 9;
		background: #333;
		box-shadow: none;
		color: #fff !important;
	}
	.react-dropdown-select-item {
		color: #f2f2f2;
		border-bottom: 1px solid #fff;

		:hover {
			color: #ffffff80;
		}
	}
	.react-dropdown-select-item.react-dropdown-select-item-selected,
	.react-dropdown-select-item.react-dropdown-select-item-active {
		//background: #111;
		border-bottom: 1px solid #fff;
		color: #fff;
		font-weight: bold;
	}
	.react-dropdown-select-item.react-dropdown-select-item-disabled {
		background: #777;
		color: #ccc;
	}
`;

const DropdownItem = ({
	isMultiple,
	isSingle,
	name,
	title,
	data,

	multiData,
	multiName,
	multiTitle,
	onSingleChange,
	onMultiChange,
}: DropdownProps) => {
	return (
		<>
			{isSingle && (
				// <Dropdown
				// 	name={name}
				// 	title={title}
				// 	list={data}
				// 	onChange={onChange}
				// 	styles={{
				// 		headerTitle: { color: 'black' },

				// 		listItem: { color: 'black' },

				// 	}}

				// />

				<StyledSelect
					options={data}
					values={[]}
					placeholder={name}
					dropdownGap={0}
					color="#795315"
					onChange={onSingleChange}
				/>
			)}

			{isMultiple && (
				// <DropdownMultiple
				// 	name={multiName}
				// 	title={multiTitle}
				// 	titleSingular={multiName}
				// 	list={multiData}
				// 	onChange={onMultiChange}
				// />
				<StyledSelect
					multi
					options={multiData}
					values={[]}
					color="#795315"
					placeholder={multiName}
					dropdownGap={0}
					// onChange={(value) => console.log(value)}
					onChange={onMultiChange}
				/>
			)}
		</>
	);
};

export { DropdownItem };
export type { DropdownProps };
