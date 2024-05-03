import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-DbrZWI7Y.js";import"./index-CkqFYb2z.js";import M from"./Default.stories-BO6eZPWM.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-Cq_ZV_AH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B9DLSnGg.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DybNggUs.js";import"./useFocusable-MoxYh-uU.js";import"./utils-CFgm1FN7.js";import"./usePress-MPJq79ab.js";import"./FocusScope-rBNftQuu.js";import"./useEvent-bUe--On6.js";import"./Dialog-DzxZJdi6.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-B4XMciY_.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DihPW0Td.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-B4xl8Q9B.js";import"./VisuallyHidden-nkBW5OaY.js";import"./Collection-DC4Wq3pw.js";import"./Popover-C-oWjOfV.js";import"./Text-lHr3U40N.js";import"./IconApp-JyWhxCMW.js";import"./IconWarning-C_kJLkLV.js";import"./index-C54xbiei.js";import"./Text-CJTQbeNn.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-CMA-K2VV.js";import"./Button-BK2AeOPB.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
