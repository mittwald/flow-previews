import{R as e}from"./index-BwDkhjyp.js";import{$ as d,C as g,M as o}from"./index-Cn-1BwI3.js";import"./index-Cc1SKcvR.js";import M from"./Default.stories-CDjGdFtQ.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import{B as x}from"./Button-C62AkZmc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BLFgELHw.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-D-AgJkDe.js";import"./useFocusable-D_aGyKeu.js";import"./utils-XD1Mdlza.js";import"./usePress-z0VJBnEb.js";import"./FocusScope-De_7glvQ.js";import"./useEvent-G_vqJ8Z6.js";import"./Dialog-CR-xtpFq.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CbNQgDoo.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CmZ4cjgJ.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DyJW6laa.js";import"./VisuallyHidden-Jdk5bsYG.js";import"./Collection-CGt-Hk0C.js";import"./Popover-BrzTAAvE.js";import"./Text-C9sPPhMf.js";import"./IconApp-iqYUtoxJ.js";import"./IconWarning-jqA-R3DE.js";import"./index-DxJw5mhE.js";import"./Text-Cl0wCOtv.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-4VZ_XG4P.js";import"./Button-CTl9mfdD.js";const te={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(d,null,e.createElement(x,null,"Trigger"),e.createElement(g,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
