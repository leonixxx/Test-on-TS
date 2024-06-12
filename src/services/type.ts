export interface RootInterface {
	total: number;
	per_page: number;
	page: number;
	limit: number;
	offset: number;
	items: Item[];
}

export interface Item {
	name: string;
	role: string;
	id: number;
	ctime: number;
}
