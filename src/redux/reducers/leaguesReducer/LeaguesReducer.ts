import _ from "lodash";

import { IAction } from "../../../interface";
import leaguesInitialState from "./initialState";

function leaguesReducer(state = leaguesInitialState, action: IAction) {
	switch (action.type) {
		case "DISABLE_ITEMS": {
			const { role, draggable } = action.payload;

			const leagues = _.cloneDeep(state);

			leagues.forEach((league) => {
				league.teams.forEach((team) => {
					if (role === "player") {
						team.draggable = draggable!;
						return;
					}

					team.players.forEach((player) => {
						player.draggable = draggable!;
					});
				});
			});

			return leagues;
		}
		default: {
			return state;
		}
	}
}
export default leaguesReducer;
