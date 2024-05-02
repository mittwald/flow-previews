import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-BZPBLnuf.js";import"./index-I3tg1ZlH.js";import M from"./Default.stories-ZjIlnaQB.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-B7Tl_OC2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Dglj5cqB.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-CpKCd2Kn.js";import"./useFocusable-DLPCeG8s.js";import"./utils-DDqfTkhb.js";import"./usePress-CJfWxQWU.js";import"./FocusScope-DR0UY-fH.js";import"./useEvent-CbpoCiOF.js";import"./Dialog-BB9pmluw.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTItOegv.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-m5PKJKvJ.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DNsw1HUe.js";import"./VisuallyHidden-BNJtAZAq.js";import"./Collection-DnI787mR.js";import"./Popover-BcxlGwlN.js";import"./Text-Ck09bxUA.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DWDcGR9n.js";import"./index-ClBBAz8G.js";import"./Text-CME0CjX1.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-BD6r3owA.js";import"./Button-EahR66DC.js";const te={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const re=["LongTexts","LongList"];export{r as LongList,t as LongTexts,re as __namedExportsOrder,te as default};
