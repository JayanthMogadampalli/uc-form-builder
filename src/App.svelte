

<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<script>
	//https://thdoan.github.io/bootstrap-select/examples.html
	
	import {settings}  from "./SettingsStore.js";
	
	import HTMLAttributes from "./HTMLAttributes.svelte";
	import AngularJs_1_x from "./AngularJs_1_x.svelte";
	
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-4 border" style="height:500px; overflow : scroll;">
			<HTMLAttributes />
			<AngularJs_1_x />
		</div>
		<div class="col-md-8 border" style="height: 500px; overflow : scroll;">
			<pre class="bg-light text-primary border shadow-lg p-3 m-3">

&lt;div class="row"&gt;
	&lt;div class="col-12 form-group" &gt;
		&lt;label for="{$settings.htmlInput.id}" &gt;{$settings.label}&lt;/label&gt;
		{#if $settings.create == "TEXTAREA"}
	     	&lt;textarea 
		{#if $settings.htmlInput.name}name="{$settings.htmlInput.name}"{/if}
		{#if $settings.angularJs.ng_model.length}ng-model="{$settings.angularJs.ng_model}"{/if}
		rows="{$settings.htmlInput.rows}" cols="{$settings.htmlInput.cols}"
	    {#if $settings.htmlInput.aria_label} aria-label="{$settings.htmlInput.aria_label}"{/if}
		{#if $settings.htmlInput.id}id="{$settings.htmlInput.id}"{/if}
		{#if $settings.angularJs.required === "YES"}ng-required="true"{/if}&gt;
	 Enter your text here	
&lt;/textarea&gt;

      {:else}
		&lt;input 
		{#if $settings.create=="TEXT_FIELD" || $settings.create=="TEXT_FIELD_NUMBER" || $settings.create=="TEXT_FIELD_EMAIL" || $settings.create=="TEXT_FIELD_PHONENUMBER" }
		type="text"
		{:else}
			type="{$settings.create}"
		{/if} 
			{#if $settings.htmlInput.cssClasses.length}class="{$settings.htmlInput.cssClasses}"{/if}
			{#if $settings.htmlInput.name.length}name="{$settings.htmlInput.name}"{/if}
			{#if $settings.htmlInput.id.length}id="{$settings.htmlInput.id}"{/if}
			{#if $settings.htmlInput.value.length}value="{$settings.htmlInput.value}"{/if}
			{#if $settings.htmlInput.autocomplete === "OFF"}autocomplete="off"{:else if $settings.htmlInput.autocomplete === "ON"}autocomplete="on" {/if}
			{#if $settings.htmlInput.tabindex!=null}tabindex="{$settings.htmlInput.tabindex}"{/if}
			{#if $settings.htmlInput.autofocus === "ON"}autofocus{/if}
			{#if $settings.htmlInput.readonly=="ON"}readonly{/if}
			{#if $settings.angularJs.ng_model.length}ng-model="{$settings.angularJs.ng_model}"{/if}
			{#if $settings.angularJs.required === "YES"}ng-required="true"{/if}
			{#if $settings.angularJs.ng_hide === "YES"}ng-hide="true"{/if}
			{#if $settings.angularJs.ng_checked === "YES"}ng-checked="true"{/if}
			{#if $settings.angularJs.ng_selected === "YES"}ng-selected="true"{/if}
			{#if $settings.angularJs.ng_maxlength!=null}ng-maxlength="{$settings.angularJs.ng_maxlength}"{/if}
			{#if $settings.angularJs.ng_minlength!=null}ng-minlength="{$settings.angularJs.ng_minlength}"{/if}
			{#if $settings.angularJs.ng_min!=null}ng-min="{$settings.angularJs.ng_min}"{/if}
			{#if $settings.angularJs.ng_max!=null}ng-max="{$settings.angularJs.ng_max}"{/if}
			{#if $settings.htmlInput.aria_label} aria-label="{$settings.htmlInput.aria_label}"{/if}
			{#if $settings.htmlInput.step} step="{$settings.htmlInput.step}"{/if}
			{#if $settings.angularJs.ng_disabled.length }ng-disabled="{$settings.angularJs.ng_disabled}"{/if}
			
			
			{#if $settings.angularJs.ng_pattern.length && $settings.angularJs.ng_pattern !="customize"}ng-pattern="{$settings.angularJs.ng_pattern}"{/if}
			{#if $settings.angularJs.ng_pattern=="customize"}ng-pattern="{$settings.angularJs.ng_pattern_cus}"{/if}
		
			{#if $settings.angularJs.ng_pattern || $settings.angularJs.ng_pattern=="customize"}
					&lt;span style="color:red" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.pattern"&gt;Not a valid pattern&lt;/span&gt;
					{/if}
					
					{/if}
		<!--###  Errror Handling  ###-->
		{#if $settings.angularJs.required === "YES"}
			&lt;span style="color:blue" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.required"&gt;{$settings.label} is reqired&lt;/span&gt;
		{/if}
		<!--###  ng-minlength  ###-->
		{#if $settings.angularJs.ng_minlength!=null}
				&lt;span style="color:red" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.minlength"&gt; Min length {$settings.angularJs.ng_minlength} is reqired&lt;/span&gt;
		{/if}
		<!--###  ng-maxlength  ###-->
		{#if $settings.angularJs.ng_maxlength!=null}
				&lt;span style="color:green" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.maxlength"&gt; Max length {$settings.angularJs.ng_maxlength} is reqired&lt;/span&gt;
		{/if}
		<!--###  ng-min  ###-->
		{#if $settings.angularJs.ng_min!=null}
				&lt;span style="color:red" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.min"&gt; Min  {$settings.angularJs.ng_min} is reqired&lt;/span&gt;
		{/if}
		<!--###  ng-max  ###-->
		{#if $settings.angularJs.ng_max!=null}
				&lt;span style="color:green" ng-show="{$settings.htmlInput.form}.{$settings.htmlInput.name}.$error.max"&gt; Max  {$settings.angularJs.ng_max} is reqired&lt;/span&gt;
		{/if}

	&lt;/div&gt;
&lt;/div&gt;
<br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			</pre>
		</div>
	</div>
</div>

