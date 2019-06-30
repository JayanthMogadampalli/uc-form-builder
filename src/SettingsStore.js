import { writable } from 'svelte/store';

export const settings = writable({
		create : "TEXT_FIELD",
		label : "",
		htmlInput : {
			required : false,
			name : "",
			id : "",
			value : "",
			cssClasses : "",
			autocomplete : null,
			autofocus : "",			
			rows : 0,
			cols : 0,
			step : 0,
			readonly : "",
			form:"",
			tabindex : null,
			aria_label : "",	
		},
		angularJs : {
			ng_model : "",
			ng_pattern : "",
			ng_pattern_cus : "",
			ng_required : "",	//false			
			ng_disabled : "",
			ng_selected : "",
			ng_checked : "",
			ng_maxlength : null,	//used as number field, hence special handling. Otherwise we would have used "" as its value.
			ng_minlength : null,
			ng_min : null,
			ng_max : null,
			ng_hide : "",			
		}
	});