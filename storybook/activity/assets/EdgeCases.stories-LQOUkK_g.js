import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-CYlYQwUe.js";import"./index-R9SXROV0.js";import M from"./Default.stories-Bqf3Nldq.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-DuqxXfo1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DSjr-DA9.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-C8AANQ8j.js";import"./useFocusable-DzpyvdoN.js";import"./utils-BPWq_g-Q.js";import"./usePress-BlWeTRZV.js";import"./FocusScope-BcVerVEk.js";import"./useEvent-DjykftQI.js";import"./Dialog-DpHOp60S.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BQ0eDFRq.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BrR5B9uo.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DU7gDNHk.js";import"./VisuallyHidden-BhpnabCC.js";import"./Collection-wbrVRoqV.js";import"./Popover-3nIfbjqo.js";import"./Text-DaIqyakl.js";import"./IconApp-Cw_YJm7P.js";import"./IconWarning-Brm6znG4.js";import"./index-Cmm4kSfL.js";import"./Text-_YkQ25lp.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-B41iwwvE.js";import"./Button-CgYWhGLL.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
