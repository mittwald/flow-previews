import{R as e}from"./index-BwDkhjyp.js";import{C as s,M as t}from"./index-CeadSW1J.js";import"./index-Bvj9sSMo.js";import{$ as E}from"./import-Cu03TQlK.js";import{B as x}from"./Button-BViRxOm6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DZ09anV6.js";import"./Popover-CCVim2Rm.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";import"./index-HBuN0i9E.js";import"./Text-DFvNZx2y.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./real-module-_6R3Ww0Q.js";import"./LoadingSpinner-D3tEegIC.js";const F={title:"Actions/ContextMenu",component:s,render:m=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(s,{...m},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},a={render:m=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(s,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...m},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "single",
    defaultSelectedKeys: ["item2"]
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var w,g,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "multiple",
    defaultSelectedKeys: ["item2", "item3"]
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var M,h,S;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu defaultSelectedKeys={["https://www.mittwald.de"]} selectionMode="navigation" {...props}>
        <MenuItem href="https://www.mittwald.de" id="https://www.mittwald.de">
          www.mittwald.de
        </MenuItem>
        <MenuItem href="https://www.google.de">www.google.de</MenuItem>
        <MenuItem href="https://www.adobe.com">www.adobe.com</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>,
  args: {
    defaultOpen: true
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const G=["Default","SingleSelection","MultipleSelection","WithLinks"];export{r as Default,n as MultipleSelection,o as SingleSelection,a as WithLinks,G as __namedExportsOrder,F as default};
