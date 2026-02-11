import{j as r}from"./iframe-BRGIT6aC.js";import{C as n,M as e}from"./MenuItem-CM9GbnOj.js";import{C as s}from"./ContextMenuTrigger-B5OChGBh.js";import"./ContextMenuSection-a8sl_NQx.js";import{B as u}from"./Button-CQ_f9ZVl.js";import a from"./Default.stories-iQkHVmI9.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./useStatic-3STTURCL.js";import"./browser-BYxlW31W.js";import"./dynamic-DJEA9S0A.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./Popover-D5tJ855F.js";import"./useOverlayController-BV2mbNRJ.js";import"./OverlayContextProvider-BehX_G0U.js";import"./Dialog-Bn341bnD.js";import"./Button-BCc16_FM.js";import"./utils-D-ssFu49.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./context-C5al0DRJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CGLZGzkl.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./Text-CBpyQBbE.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./Switch-CKKz4OC7.js";import"./useFieldComponent-CMRD4Pyo.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-dIE2ZRmt.js";import"./useFormReset-CXZmek7W.js";import"./LoadingSpinner-BjEAsOxv.js";import"./OverlayTrigger-DrqrLZow.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Separator-CIGAHjUL.js";import"./Heading-CNwpEC1p.js";import"./Heading-er7MPh1O.js";import"./Avatar-DzpKHkA7.js";import"./AlertIcon-DeOHvzVA.js";import"./Initials-Bfq-ed7j.js";import"./index-BcxSEo57.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...o.parameters?.docs?.source}}};const Er=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Er as __namedExportsOrder,Ar as default};
