import{R as e}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-ClDi3PZ1.js";import{B as x}from"./Button-ETWxWgqR.js";import M from"./Default.stories-DneldvvT.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-BqZrLudx.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./index-BMdlDBjA.js";import"./PopoverTrigger-CPc_PWRs.js";import"./OverlayTrigger-05SHITif.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BxlO7pa5.js";import"./useFocusable-OJvPCLGe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-D6OB3BUw.js";import"./useSelector-D7b7Gg7N.js";import"./Action-CQarenSX.js";import"./Text-DrKyKMJq.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-DkFxhH4d.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-COwJ0ZRR.js";import"./IconWarning-CBdDJmJC.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./useMenuTrigger-Cyu8UOWg.js";import"./SelectionManager-CTPoXmGv.js";import"./useEvent-Be9f7BQw.js";import"./LoadingSpinner-BB5hHLYh.js";import"./Button-DB69cHYY.js";import"./Separator-Bt9b8szy.js";import"./Heading-BOKzrxeE.js";import"./Section-C5Edz-Xg.js";import"./Activity-CPnWONG0.js";const xe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Me=["LongTexts","LongList"];export{r as LongList,t as LongTexts,Me as __namedExportsOrder,xe as default};
