import{a as o}from"./index-D1Z7wIYD.js";import{$ as C}from"./filterDOMProps-CeZl_uWj.js";import{$ as O}from"./useFormReset-CqSSSrN8.js";import{d as R}from"./useFocusable-Di1f8vLw.js";import{a as f}from"./usePress-CipJ8IEr.js";import{$ as I}from"./useControlledState-C0C-dzuH.js";function z(e,a,i){let{isDisabled:l=!1,isReadOnly:d=!1,value:s,name:r,children:b,"aria-label":$,"aria-labelledby":u,validationState:n="valid",isInvalid:c}=e,p=t=>{t.stopPropagation(),a.setSelected(t.target.checked)},m=b!=null,P=$!=null||u!=null;!m&&!P&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:S,isPressed:v}=f({isDisabled:l}),{pressProps:g,isPressed:y}=f({isDisabled:l||d,onPress(){a.toggle()}}),{focusableProps:h}=R(e,i),x=o(S,h),D=C(e,{labelable:!0});return O(i,a.isSelected,a.setSelected),{labelProps:o(g,{onClick:t=>t.preventDefault()}),inputProps:o(D,{"aria-invalid":c||n==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":d||void 0,onChange:p,disabled:l,...s==null?{}:{value:s},name:r,type:"checkbox",...x}),isSelected:a.isSelected,isPressed:v||y,isDisabled:l,isReadOnly:d,isInvalid:c||n==="invalid"}}function B(e={}){let{isReadOnly:a}=e,[i,l]=I(e.isSelected,e.defaultSelected||!1,e.onChange);function d(r){a||l(r)}function s(){a||l(!i)}return{isSelected:i,setSelected:d,toggle:s}}export{z as $,B as a};