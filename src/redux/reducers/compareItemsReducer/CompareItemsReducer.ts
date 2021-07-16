import { IAction, ICompareItem } from "../../../interface";

function compareItemsReducer(state: ICompareItem[] = [], action: IAction) {
	switch (action.type) {
		case "ADD_COMPARE_ITEM": {
			const item: ICompareItem = {
				name: action.payload.name!,
				role: action.payload.role!,
			};

			if (state.length === 0) {
				return [item];
			}

			const index = state.length === 1 ? 0 : 1;

			return [state[index], item];
		}
		case "DELEATE_ITEM": {
			const { index } = action.payload;

			const newState = [...state];
			newState.splice(index!, 1);

			return newState;
		}
		default: {
			return state;
		}
	}
}
export default compareItemsReducer;
