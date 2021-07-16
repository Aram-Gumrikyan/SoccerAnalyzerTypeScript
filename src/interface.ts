export type role = "player" | "team";
export type item = IPlayer | ITeam | undefined;

export interface IStatistics {
	goals?: number;
	appearances?: number;
	tackle?: number;
	[key: string]: any;
}

export interface IPlayer extends IStatistics {
	name: string;
	draggable: boolean;
}

export interface ITeam extends IStatistics {
	name: string;
	players: IPlayer[];
	draggable: boolean;
}

export interface ILeague {
	name: string;
	teams: ITeam[];
}

export interface IAction {
	type: string;
	payload: IPayload;
}

export interface IDropDown {
	role?: role;
	draggable: boolean;
	name: string;
	children?: JSX.Element[];
}

export interface IState {
	leagues: ILeague[];
	compareItems: ICompareItem[];
}

export interface ICompareItem {
	name: string;
	role: role;
	index?: number;
}

export interface IPayload {
	name: string;
	role: role;
	draggable: boolean;
	index: number;
}
