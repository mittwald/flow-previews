import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-CseK0um6.js";import"./index-Dap5Ezkh.js";import M from"./Default.stories-CjfAbrmg.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-Cx072bvs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B3-LTTWn.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DDlP1Cgs.js";import"./useFocusable-Ddi47NB9.js";import"./utils-D7InqjV7.js";import"./usePress-BZaguEpt.js";import"./FocusScope-4iKrC6rw.js";import"./useEvent-BkyXxHlT.js";import"./Dialog-CeEUt42U.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BBzZ3ne4.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DFbr5jK-.js";import"./VisuallyHidden-DV81ojJ5.js";import"./Collection-D_WRBQDn.js";import"./Popover-C71TfZyc.js";import"./Text-nCCH5eH7.js";import"./IconApp-D-kcT16p.js";import"./IconWarning-Cw7drCLR.js";import"./index-C0kgWbNG.js";import"./Text-B0HvyfcO.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-D3fzZb_z.js";import"./Button-tv1ba3Dw.js";const re={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
