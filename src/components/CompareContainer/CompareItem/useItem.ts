import { useSelector } from "react-redux";

import { ILeague, IState, role, item } from "../../../interface";

export default function useItem(name: string, role: role) {
	const item = useSelector((state: IState) =>
		findItem(state.leagues, name, role)
	);

	return item;
}

function findItem(leagues: ILeague[], name: string, role: role): any {
	let item: item;

	leagues.some((league) => {
		if (role === "team") {
			item = league.teams.find((team) => team.name === name);

			if (item) {
				return true;
			}

			return false;
		}

		league.teams.some((team) => {
			item = team.players.find((player) => player.name === name);

			if (item) {
				return true;
			}

			return false;
		});

		if (item) {
			return true;
		}
		return false;
	});

	return item;
}
