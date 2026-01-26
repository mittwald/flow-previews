import{j as r}from"./iframe-DqoQz6HB.js";import{C as n,M as e}from"./ContextMenu-COPqvDsm.js";import{C as s}from"./ContextMenuTrigger-Cde5B6R6.js";import"./ContextMenuSection-Bjk6b3v9.js";import{B as u}from"./Button-TzxOXnkY.js";import a from"./Default.stories-DgJYlxgh.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./index-BvQFjuk4.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./Switch-Cdvr7Xo1.js";import"./useFieldComponent-X8YFoMoP.js";import"./Label.module-CUYTf9Jc.js";import"./utils-OqNg9teq.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-ovMXZ6WD.js";import"./useFormReset-BpNr6OOM.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./useControlledState-CN54iNBt.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./Dialog-D_XSL9SB.js";import"./Button-CY3jZXsw.js";import"./ProgressBar-C57Cfwin.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./useLabel-CCbYr5fG.js";import"./context-BlYILeGE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./Text-78LD2Kdh.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./Action-DgtVbOuJ.js";import"./context-DlAFKpyv.js";import"./useStatic-DhkP1cmF.js";import"./browser-CwaVi4T-.js";import"./getActionGroupSlot-6JauDhjj.js";import"./dynamic-uyvUxMs1.js";import"./Popover-Cy3iouQi.js";import"./useOverlayController-rufURv7M.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./OverlayTrigger-DI9kGsc2.js";import"./Text-CYiIq5CT.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./LoadingSpinner-DERXhFNJ.js";import"./Separator-Jd68VUlv.js";import"./Heading-BXT238vs.js";import"./Heading-BOKCcgdn.js";import"./Avatar-DKbKlnkL.js";import"./AlertIcon-DE1EJRfD.js";import"./Initials-C8i7_UZ4.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
