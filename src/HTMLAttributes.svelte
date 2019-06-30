<script>
	import {settings}  from "./SettingsStore.js";
	function  displayAutoCompleteFormElement(){		
			if( $settings.create === "TEXT_FIELD" || $settings.create === "TEXT_FIELD_NUMBER" || $settings.create === "TEXT_FIELD_EMAIL" || $settings.create === "TEXT_FIELD_PHONENUMBER" || $settings.create === "PASSWORD" || $settings.create ==="EMAIL" || $settings.create ==="NUMBER" || $settings.create ==="PHONENUMBER" )
			{
				return true;
			}
		}
		function displayValueFormElement(){
			if($settings.create !== "SELECT" && $settings.create !== "TEXTAREA" ){
				return true;
			}
		}
	function settodefault(){
			$settings.angularJs.ng_model="";
			$settings.angularJs.ng_pattern = "";
			$settings.angularJs.ng_required = "";				
			$settings.angularJs.ng_disabled = "";
			$settings.angularJs.ng_selected = "";
			$settings.angularJs.ng_checked ="";
			$settings.angularJs.ng_maxlength = null;	
			$settings.angularJs.ng_minlength = null;
			$settings.angularJs.ng_min = null;
			$settings.angularJs.ng_max = null;
			$settings.htmlInput.required =false;
			$settings.htmlInput.name="";
			$settings.htmlInput.id="";
			$settings.htmlInput.cssClasses="";
			$settings.htmlInput.autocomplete=null;
			$settings.htmlInput.autofocus="";
			$settings.htmlInput.hidden="";
			$settings.htmlInput.rows =0;
			$settings.htmlInput.cols = 0;
			$settings.htmlInput.step = 0;
			$settings.htmlInput.readonly ="";
			$settings.htmlInput.form="";
			$settings.htmlInput.tabindex = null;
			$settings.htmlInput.aria_label = "";	
	}
</script>

<div class="col-12 mt-3">
	<div class="input-group col ">
		<div class="input-group-prepend">
			<span class="input-group-text bg-primary text-white">Create</span>
		</div>
		<select class="form-control bg-primary text-white" bind:value={$settings.create} >
			<option value="TEXT_FIELD" selected>Text field</option>
			<option value="TEXT_FIELD_NUMBER" on:click={settodefault}>Text field-Number</option>
			<option value="TEXT_FIELD_EMAIL" on:click={settodefault}>Text field-Email</option>
			<option value="TEXT_FIELD_PHONENUMBER" on:click={settodefault}>Text field-PhoneNumber</option>
			<option value="PASSWORD" on:click={settodefault}>Password field</option>
			<option value="EMAIL" on:click={settodefault}>Email field</option>
			<option value="NUMBER" on:click={settodefault}>Number field</option>
			<option value="RANGE" on:click={settodefault}>Range Slider</option>			
			<option value="RADIO" on:click={settodefault}>Radio buttons</option>
			<option value="CHECKBOX" on:click={settodefault}>Check box</option>
			<option value="SELECT" on:click={settodefault}>Select box</option>
			<option value="TEXTAREA" on:click={settodefault}>Textarea</option>
			<option value="DATE" on:click={settodefault}>Date</option>
		</select>
	</div>
	
	<div class="input-group input-group-sm mt-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text bg-primary text-white">Label</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.label}" >
	</div>

	<h5 class="mt-4 mb-3 col">HTML elements</h5>
	<!-- ############################## Form Name ###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Form Name</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.form}" >
	</div>
	<!-- ############################## Styling class ###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">CSS classes</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.cssClasses}" >
	</div>

	<!-- ############################## Input Field Name ###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Input Field Name</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.name}" >
	</div>

	<!-- ############################## Input Field ID ###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Input Field ID</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.id}" >
	</div>
<!-- ############################## Input Field Value ###################################### -->
	{#if displayValueFormElement()}
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Input Field VALUE</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.value}" >
	</div>
		{/if}
			
	<!-- ######################### Autocomplete input field#################################### -->
	{#if  displayAutoCompleteFormElement()}
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Autocomplete</span>
		</div>
		<select class="form-control" bind:value={$settings.htmlInput.autocomplete}>
			<option selected></option>
			<option value="OFF">OFF</option>
			<option value="ON">ON</option>
		</select>
	</div>
	{/if}
<!-- ######################### Autofocus#################################### -->
	
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Autofocus</span>
		</div>
		<select class="form-control" bind:value={$settings.htmlInput.autofocus}>
			<option selected></option>
			<option value="OFF">OFF</option>
			<option value="ON">ON</option>
		</select>
	</div>

<!-- ############################## TabIndex ###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">TabIndex</span>
		</div>
		<input type="number" min="1" class="form-control" bind:value="{$settings.htmlInput.tabindex}" >
	</div>	


<!-- ############################## Read Only###################################### -->
	<div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">ReadOnly</span>
		</div>
	<select class="form-control" bind:value={$settings.htmlInput.readonly}>
			<option selected></option>
			<option value="OFF">OFF</option>
			<option value="ON">ON</option>
	</select>
	</div>

    	<!-- ############################# Aria-Label	 ##################-->
    <div class="input-group input-group-sm mb-3 col">
		<div class="input-group-prepend">
			<span class="input-group-text">Aria-Label</span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.htmlInput.aria_label}" >
	</div>

	<!-- ##############################  STEP  ###################################### -->
	 {#if $settings.create=="NUMBER" || $settings.create=="RANGE"}
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">step</span>
		</div>
		<input type="number" class="form-control" bind:value="{$settings.htmlInput.step}" >
	</div>
	
   {/if}
	
	{#if $settings.create == "TEXTAREA"}
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">Rows</span>
		</div>
    <input type="number" class="form-control" bind:value={$settings.htmlInput.rows} placeholder="Enter number of rows of textarea">
  </div>
<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">Columns</span>
		</div>
    <input type="number" class="form-control" bind:value={$settings.htmlInput.cols} placeholder="Enter nubmer of columns of textarea">
  </div>
{/if}
	
</div>




