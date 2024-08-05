import{R as e}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-DuijmYxb.js";import{B as x}from"./Button-D-KqNHp8.js";import M from"./Default.stories-LAWBfAzA.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-BePwBSVK.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./index-BMdlDBjA.js";import"./PopoverTrigger-BiL7SFFQ.js";import"./OverlayTrigger-CwMTi2gX.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-qwcow8p4.js";import"./useFocusable-OJvPCLGe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-bVfXLi_S.js";import"./useSelector-U15DiHqH.js";import"./Action-eCY82j2_.js";import"./Text-bxh09eJ5.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bu-3W4UG.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-4m04zbQ2.js";import"./IconWarning-CTWky_Q0.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./useMenuTrigger-BvBxGpyF.js";import"./SelectionManager-CDhpFlBD.js";import"./useEvent-Be9f7BQw.js";import"./LoadingSpinner-BHLzaSO_.js";import"./Button-DB69cHYY.js";import"./Separator-Bt9b8szy.js";import"./Heading-BCPLx9jC.js";import"./Section-D0rNhwJY.js";import"./Activity-CPnWONG0.js";const xe={...M,title:"Actions/ContextMenu/Edge Cases"},t={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},e.createElement(o,null,i.medium),e.createElement(o,null,i.medium)))},r={render:m=>e.createElement(g,null,e.createElement(x,null,"Trigger"),e.createElement(d,{...m},Array(20).fill("").map((T,n)=>e.createElement(o,{key:n},"Item ",n+1))))};var p,a,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
