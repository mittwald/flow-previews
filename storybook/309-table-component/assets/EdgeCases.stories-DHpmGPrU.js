import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-CLE904PY.js";import"./index-ajPlF_if.js";import M from"./Default.stories-Dz62-9iM.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-D8pmMIBp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-syVPRVDK.js";import"./index-CoJk2QQB.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-D5RbZ7pD.js";import"./SelectionManager-LFnrF7wv.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./FocusScope-B_JIBP49.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./usePress-18_TO7Wj.js";import"./useEvent-CxA2gELr.js";import"./getScrollParent-CcmJp979.js";import"./useControlledState-C0C-dzuH.js";import"./Dialog-BDggyyJu.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-fvqKTS-v.js";import"./number-nHrFdSb-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DByniHrJ.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./Collection-DLxRuvCx.js";import"./Popover-C3fkzfCP.js";import"./Text-fvXBaVCt.js";import"./IconApp-RPV2UACM.js";import"./IconWarning-D1gyLIYa.js";import"./index-C0raSsgL.js";import"./Text-phIOO8u9.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-JGHWlUAu.js";import"./Button-D5gdTRso.js";const ne={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
