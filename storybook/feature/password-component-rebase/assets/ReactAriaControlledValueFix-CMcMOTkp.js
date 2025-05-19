import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BdpSHsi2.js";import{$ as d,b as u}from"./utils-k5T1Axi4.js";const m=s=>{const{inputContext:n,children:i,props:e}=s,t=a.Children.only(i);if(!a.isValidElement(t))throw new Error("Expected valid element");const o=t.props,p=o.ref,[r,c]=d(o,p,n);return e&&typeof e=="object"&&!("value"in e)&&delete r.value,l.jsx(u,{values:[[n,{...r,ref:c}]],children:t})};m.__docgenInfo={description:`React Aria (accidentally?!) enforces controlled inputs by always setting the
value prop on Inputs and TextAreas. This component uses React Arias context
prop API to only set the value prop, if it is present in the original
Input/TextArea component.

https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/textfield/src/useTextField.ts#L182
https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/numberfield/src/useNumberField.ts#L206`,methods:[],displayName:"ReactAriaControlledValueFix",props:{inputContext:{required:!0,tsType:{name:"Context",elements:[{name:"any"}],raw:"Context<any>"},description:""},props:{required:!0,tsType:{name:"unknown"},description:""}},composes:["PropsWithChildren"]};export{m as R};
