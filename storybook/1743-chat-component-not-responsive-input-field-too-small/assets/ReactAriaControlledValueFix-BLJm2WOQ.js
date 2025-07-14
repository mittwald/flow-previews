import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BdpSHsi2.js";import{b as f}from"./mergeRefs-f9wmNE8z.js";import{$ as x,b as h}from"./utils-CNUJJGcD.js";const b=a=>{const{inputContext:r,children:i}=a,e=o.Children.only(i);if(!o.isValidElement(e))throw new Error("Expected valid element");const t=e.props,c=t.ref,[s,p]=x(t,c,r),l=f(n=>{(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)&&(n.value=String(s.value??""))},p),d={...s,value:void 0,ref:l},u={...t,ref:void 0,value:void 0};return m.jsx(h,{values:[[r,d]],children:o.cloneElement(e,u)})};b.__docgenInfo={description:`React Aria (accidentally?!) enforces controlled inputs by always setting the
value prop on Inputs and TextAreas with its context props API. This component
also uses this API to only unset the value prop. Furthermore setting an input
value is finally done by directly on the DOM element.

https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/textfield/src/useTextField.ts#L182
https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/numberfield/src/useNumberField.ts#L206`,methods:[],displayName:"ReactAriaControlledValueFix",props:{inputContext:{required:!0,tsType:{name:"Context",elements:[{name:"any"}],raw:"Context<any>"},description:""},props:{required:!0,tsType:{name:"unknown"},description:""}},composes:["PropsWithChildren"]};export{b as R};
