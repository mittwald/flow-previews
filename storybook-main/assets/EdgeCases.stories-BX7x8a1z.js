import{j as r}from"./iframe-rOlqB43H.js";import{C as n,M as e}from"./ContextMenu-HrfjPqig.js";import{C as s}from"./ContextMenuTrigger-BMCwulIV.js";import"./ContextMenuSection-Djibs7wW.js";import{B as u}from"./Button-Bjmah8F5.js";import a from"./Default.stories-BQhdj4mM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./Switch-pLggOsyN.js";import"./useFieldComponent-sAEQMV1g.js";import"./Label.module-CUYTf9Jc.js";import"./utils-Ccj3VlSZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-C6aWJL1l.js";import"./useFormReset-BZ2QXIUx.js";import"./usePress-D4qdaxsz.js";import"./useFocus-B5EXjvsK.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./useControlledState-BGrTDRws.js";import"./VisuallyHidden-CY9UiAKH.js";import"./Dialog-B6AZQFUz.js";import"./Button-CW-dJdjv.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./useLabel-CbRIwZrE.js";import"./context-C0IlT2TZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-D_fvST6z.js";import"./OverlayArrow-OpojsIn2.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./Text-CjxKuecI.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./Action-CHaj31Fl.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./browser-DeRtoS4T.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./dynamic-DIoaqwvI.js";import"./Popover-BlI-7oje.js";import"./useOverlayController-Dp5_YYyg.js";import"./OverlayContextProvider-D43YjdGu.js";import"./OverlayTrigger-BdoRRXtX.js";import"./Text-CXuVairg.js";import"./EmulatedBoldText-td0NnrMW.js";import"./LoadingSpinner-BbLFRhi0.js";import"./Separator-DZpjJ0Vm.js";import"./Heading-D93Lplv4.js";import"./Heading-Ds9JRynb.js";import"./Avatar-BYRj_Af1.js";import"./AlertIcon-BISUoRMj.js";import"./Initials-DSSBySYx.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
