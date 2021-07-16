import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import React, { useEffect, useState, FC } from "react";

import { IState } from "../../interface";
import CompareItem from "./CompareItem";
import styles from "./CompareContainer.module.scss";

const CompareContainer: FC = () => {
	const dispatch = useDispatch();
	const compareItems = useSelector((state: IState) => state.compareItems);

	const [dragEnter, setDragEnter] = useState<boolean>(false);

	const containerClassName = classNames(styles.compareContainer, {
		[styles.dragEnter]: dragEnter,
	});

	useEffect(() => {
		document.addEventListener("dragend", (e) => {
			setDragEnter(false);
		});
	}, []);

	const drop = (e: React.DragEvent) => {
		const [name, role] = e.dataTransfer.getData("text/plain").split(",");

		if (!role) {
			return;
		}

		dispatch({ type: "DISABLE_ITEMS", payload: { role, draggable: false } });
		dispatch({ type: "ADD_COMPARE_ITEM", payload: { name, role } });
	};

	return (
		<div
			className={containerClassName}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => drop(e)}
			onDragEnter={(e) => setDragEnter(true)}
		>
			{compareItems.map((item, index) => {
				const { name, role } = item;

				return (
					<CompareItem name={name} role={role} index={index} key={index} />
				);
			})}
		</div>
	);
};

export default CompareContainer;
