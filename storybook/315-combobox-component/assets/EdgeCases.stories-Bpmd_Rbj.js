import{R as e}from"./index-uCp2LrAq.js";import{$ as d,C as g,M as o}from"./index-BJtYgMLW.js";import"./index-B9XJpLw1.js";import M from"./Default.stories-Dfah0v24.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-aU2Eeeyj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CvmVviyC.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./index-CWjdaQek.js";import"./useFocusable-Ci2wVYze.js";import"./utils-BGsKKjDw.js";import"./usePress-CP78YWrE.js";import"./FocusScope-CRWuoD-1.js";import"./useEvent-CTaGr_kn.js";import"./Dialog-BTcu6PHq.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CBf0Hfqk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-COLBOOlB.js";import"./VisuallyHidden-DG5wj4QR.js";import"./Collection-D8kckE6P.js";import"./Popover-Bhbei27J.js";import"./Text-Daiml_5e.js";import"./IconApp-FFx7s__U.js";import"./IconWarning-CZBb_lzG.js";import"./index-B_ou1i4R.js";import"./Text-Dp5UV4Su.js";import"./index-IVpWfQyc.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./LoadingSpinner-Cqz6fh5v.js";import"./Button-C6109VW8.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
