import{R as e}from"./index-BwDkhjyp.js";import{C as d,M as m}from"./index-CeadSW1J.js";import"./index-Bvj9sSMo.js";import M from"./Default.stories-DZYlz3tf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{$ as g}from"./import-Cu03TQlK.js";import{B as x}from"./Button-BViRxOm6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DZ09anV6.js";import"./Popover-CCVim2Rm.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";import"./index-HBuN0i9E.js";import"./Text-DFvNZx2y.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./real-module-_6R3Ww0Q.js";import"./LoadingSpinner-D3tEegIC.js";const F={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:n=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...n},e.createElement(m,null,a.medium),e.createElement(m,null,a.medium)))},r={render:n=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...n},Array(20).fill("").map((T,o)=>e.createElement(m,{key:o},"Item ",o+1))))};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const G=["LongTexts","LongList"];export{r as LongList,t as LongTexts,G as __namedExportsOrder,F as default};
