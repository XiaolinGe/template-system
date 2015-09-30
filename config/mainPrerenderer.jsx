import routes from "../app/mainRoutes";
import storesDescriptions from "../app/mainStoresDescriptions";
import html from "../app/mainPrerender.html";
import createStoresForPrerender from "./createStoresForPrerender";
import Prerenderer from "./Prerenderer";

export default class MainRenderer {
	constructor(options) {

	}

	render(path, readItems, callback) {
		var stores = createStoresForPrerender(storesDescriptions, readItems);
		this.prerenderer.getContent(path, stores, (err, content, data) => {
			if(err) return callback(err);
			var page = this.html
				.replace("DATA", JSON.stringify(data))
				.replace("CONTENT", content);
			callback(null, page);
		});
	}
}
