import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./index-VV7y5rlT.js";import"./index-dN8z-uw3.js";import M from"./Default.stories-BDKdvjkS.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-t89z1yPQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CvYijzQN.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./index-yGv1oPtN.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./usePress-GzZvjGFA.js";import"./FocusScope-DsV13NlO.js";import"./useEvent-JfVSFEa6.js";import"./Dialog-CUn0EhxI.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CblaC-Mh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-LW5SiPO7.js";import"./VisuallyHidden-ORZgQdGI.js";import"./Collection-BDIHGFnI.js";import"./Popover-IRcdiENY.js";import"./Text-5ecqfi7M.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./index-ZGtVZsDz.js";import"./Text-CRgtz34V.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./LoadingSpinner-BHiCCzsu.js";import"./Button-r8qbaGYD.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const me=["LongTexts","LongList"];export{r as LongList,t as LongTexts,me as __namedExportsOrder,re as default};
