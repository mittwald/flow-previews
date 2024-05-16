import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./index-B6i_RR7e.js";import"./index-aj1P-IeX.js";import M from"./Default.stories-BErnGVJq.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-BhR8xynm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BPbRU2D0.js";import"./index-7Bm5Bt6L.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./index-DxHWpCWl.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./usePress-C4eoOWOJ.js";import"./FocusScope-BAgquhRo.js";import"./useEvent-BxbBFNFa.js";import"./Dialog-CmqFKjmg.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DMphC9df.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-7II0TQXO.js";import"./VisuallyHidden-DMUsmByH.js";import"./Collection-DUP4IVi4.js";import"./Popover-DBFx0NG8.js";import"./Separator-BEXQHetg.js";import"./Text-QhWkLhD7.js";import"./IconApp-BHY5Gtgt.js";import"./IconWarning-VblBin6y.js";import"./index-CaYXpo-E.js";import"./Text-CXPWODI3.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./index-B0RjZPEM.js";import"./LoadingSpinner-sKQTUwFD.js";import"./Button-D-FvJARW.js";const ne={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const ie=["LongTexts","LongList"];export{r as LongList,t as LongTexts,ie as __namedExportsOrder,ne as default};
