import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./MenuItem-qAJ882cl.js";import{B as x}from"./Button-vzB-Qgsp.js";import M from"./Default.stories-ts8885X7.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-vzWTOrGV.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Popover-DC7vl5YR.js";import"./Dialog-BFmJ2ppq.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-v1vY8OUu.js";import"./useFocusable-DIAzcF9v.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DL4LW3M_.js";import"./FocusScope-CNJ-ZnPk.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-xpUhodH8.js";import"./IconApp-DtUWP9rs.js";import"./IconWarning-DRuTVITy.js";import"./Text-CUixX_oz.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-DR0QT0d2.js";import"./Header-BlggLZdS.js";import"./useEvent-BUAZZNDw.js";import"./Separator-bFMjWqbW.js";import"./LoadingSpinner-DPYzAr8k.js";import"./Button-B3LWHon2.js";import"./Separator-BNHOpfry.js";const me={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const oe=["LongTexts","LongList"];export{r as LongList,t as LongTexts,oe as __namedExportsOrder,me as default};
