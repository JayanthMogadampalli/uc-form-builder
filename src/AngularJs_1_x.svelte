<script>
	import {settings}  from "./SettingsStore.js";
	function  displayNgMaxlength(){		
			if ($settings.create == "TEXT_FIELD" || $settings.create == "TEXT_FIELD_NUMBER" || $settings.create == "TEXT_FIELD_EMAIL" || $settings.create == "TEXT_FIELD_PHONENUMBER" || $settings.create == "PASSWORD" || $settings.create =="EMAIL" || $settings.create =="NUMBER" || $settings.create =="PHONENUMBER" )
			{
				
				return true;
			
			}
	}
	function  displayNgMax(){		
			if ($settings.create =="NUMBER" || $settings.create =="DATE" || $settings.create =="RANGE" )
			{
				
				return true;
			
			}
	}
	function  displayNgMin(){		
			if ($settings.create =="NUMBER" || $settings.create =="DATE" || $settings.create =="RANGE" )
			{
				
				return true;
			
			}
	}
	function  displayNgMinlength(){	
			if  ($settings.create == "TEXT_FIELD" || $settings.create == "TEXT_FIELD_NUMBER" || $settings.create == "TEXT_FIELD_EMAIL" || $settings.create == "TEXT_FIELD_PHONENUMBER" || $settings.create == "PASSWORD" || $settings.create =="EMAIL"  || $settings.create =="PHONENUMBER" )
			{
				
				return true;
			
			}
	}
</script>

<div class="col-12 mt-5 mb-3;float-left">
	<h5 class="mt-3 mb-3 col">AngularJS (1.x) attributes</h5>
	
	<!-- ##############################  NG-MODEL  ###################################### -->
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text"><strong>ng-model</strong></span>
		</div>
		<input type="text" class="form-control" bind:value="{$settings.angularJs.ng_model}" >
	</div>
	
	<!-- ##############################  NG-REQUIRED  ###################################### -->
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-required</span>
		</div>
		<select class="form-control" bind:value={$settings.angularJs.required}>
			<option selected></option>
			<option value="YES">true - Mandatory field</option>
			<option value="NO">false - Optional field - DUMMY</option>
		</select>
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.required = '' }">X</span>
		</div>
	</div>

<!-- ##############################  NG-Hide  ###################################### -->
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-hide</span>
		</div>
		<select class="form-control" bind:value={$settings.angularJs.ng_hide}>
			<option selected></option>
			<option value="YES">true - Mandatory field</option>
			<option value="NO">false - Optional field - DUMMY</option>
		</select>
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_hide = '' }">X</span>
		</div>
	</div>

<!-- ##############################  NG-Checked  ###################################### -->
	
	{#if $settings.create ==="RADIO" || $settings.create ==="CHECKBOX"}
	
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-checked</span>
		</div>
		<select class="form-control" bind:value={$settings.angularJs.ng_checked}>
			<option selected></option>
			<option value="YES">true - Mandatory field</option>
			<option value="NO">false - Optional field - DUMMY</option>
		</select>
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_checked = '' }">X</span>
		</div>
	</div>
{/if}


<!-- ##############################  NG-Selected  ###################################### -->
	
	{#if $settings.create ==="SELECT"}
	
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-selected</span>
		</div>
		<select class="form-control" bind:value={$settings.angularJs.ng_selected}>
			<option selected></option>
			<option value="YES">true - Mandatory field</option>
			<option value="NO">false - Optional field - DUMMY</option>
		</select>
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_selected = '' }">X</span>
		</div>
	</div>
{/if}
	<!-- ##############################  NG-MINLENGTH  ###################################### -->
	{#if displayNgMinlength()}
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-minlength</span>
		</div>
		<input type="number" min="1" class="form-control" bind:value="{$settings.angularJs.ng_minlength}" >
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_minlength = null}">X</span>
		</div>
	</div>
	{/if}

	<!-- ##############################  NG-MAXLENGTH  ###################################### -->
	{#if displayNgMaxlength()}
		<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-maxlength</span>
		</div>
		<input type="number" min="1" class="form-control" bind:value="{$settings.angularJs.ng_maxlength}" >
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_maxlength = null}">X</span>
		</div>
	</div>
	{/if}

	<!-- ##############################  NG-MIN ###################################### -->
	{#if displayNgMin()}
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-min</span>
		</div>
		<input type="number" min="1" class="form-control" bind:value="{$settings.angularJs.ng_min}" >
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_min= null}">X</span>
		</div>
	</div>
	{/if}
<!-- ##############################  NG-MAX ###################################### -->
{#if displayNgMax()}
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-max</span>
		</div>
		<input type="number" min="1" class="form-control" bind:value="{$settings.angularJs.ng_max}" >
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_max= null}">X</span>
		</div>
	</div>
	{/if}
	<!-- ##############################  NG-DISABLED  ###################################### -->
	<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-disabled</span>
		</div>
		<input type="text" min="1" class="form-control" bind:value="{$settings.angularJs.ng_disabled}" >
		<div class="input-group-prepend">
			<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_disabled = ""}">X</span>
		</div>
	</div>
	<!-- ##############################  NG-PATTERN  ###################################### -->
{#if $settings.create === "TEXT_FIELD" ||  $settings.create === "TEXT_FIELD_NUMBER"|| $settings.create === "TEXT_FIELD_EMAIL"|| $settings.create === "TEXT_FIELD_MOBILE"|| $settings.create === "PASSWORD"}
<div class="input-group input-group-sm mt-3 col-12">
		<div class="input-group-prepend">
			<span class="input-group-text">ng-pattern</span>
		</div>
		<select class="form-control" bind:value={$settings.angularJs.ng_pattern} >
			<option value="" ></option>
			<option value="/^[A-Za-z]+$/" >/^[A-Za-z]+$/ (String)</option>
			<option value="/^[A-Za-z0-9]+$/" >/^[A-Za-z0-9]+$/ (AlphaNumeric)</option>
			<option value="/^(\D)+$/" >/^(\D)+$/ (Characters)</option>
			<option value="/^(\d)+$/" >/^(\d)+$/ (Numbers)</option>
			<option value="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&amp;\*])/" >/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&amp;\*])/ (password)</option>
			<option value="/^[6-9][0-9]&#123;9&#125;$/" >/^[6-9][0-9]{9}$/ (Mobile Number)</option>
			<option value="/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/" >/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/ (Email)</option>
			<option value="customize" >Customize</option>
			
		</select>
		
	</div>
	{/if}
	{#if $settings.angularJs.ng_pattern=="customize" }
			<div class="input-group input-group-sm mb-3 col" >
				<div class="input-group-prepend" >
					<span class="input-group-text" >ng-pattern </span>
				</div>
			<input type="text" bind:value="{$settings.angularJs.ng_pattern_cus}" /><br/><br/>
				<div class="input-group-prepend">
					<span class="input-group-text" on:click="{ e => $settings.angularJs.ng_pattern_cus= '' }">X</span>
				</div>
		</div>
		{/if}
</div>