import{j as r}from"./iframe-DpNCYkDX.js";import{C as n,M as e}from"./ContextMenu-OcuJV2Fv.js";import{C as s}from"./ContextMenuTrigger-yAw9v6sT.js";import"./ContextMenuSection-BWIiCJCm.js";import{B as u}from"./Button-CB8TQqfw.js";import a from"./Default.stories-BA8wyENA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./IconWarning-CcmUiij-.js";import"./remote-FHZXAXl3.js";import"./Switch-BT_hjZHG.js";import"./useFieldComponent-CtyBuaGz.js";import"./Label.module-CUYTf9Jc.js";import"./utils-YaT_C2bO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useToggleState-CyQnmxcJ.js";import"./useFormReset-BsRaFjct.js";import"./usePress-OMCV4DY8.js";import"./useFocus-CLy8_GQ0.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./useControlledState-CFzFCELG.js";import"./VisuallyHidden-BhiVW_d3.js";import"./Dialog-DtZU9YT9.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./useLabel-DtioSroH.js";import"./context-Df7wrknH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-_XCAh6rU.js";import"./OverlayArrow-DaAbsuct.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./Text-B4MgbG6f.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./useStatic-C-pVfuV7.js";import"./browser-BfCz5g6M.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./dynamic-DOXkjdco.js";import"./Popover-DuuviGb9.js";import"./useOverlayController-B8UZSZKi.js";import"./OverlayContextProvider-Cg977AbI.js";import"./OverlayTrigger-BclobJ22.js";import"./Text-Bp6u83O8.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./LoadingSpinner-mT2tjpr6.js";import"./Separator-Cf0C9sSO.js";import"./Heading-CdQ6Kdnh.js";import"./Heading-Cba33pi1.js";import"./Avatar-CIZEvz05.js";import"./AlertIcon-CnmOZB_U.js";import"./Initials-dCiA-7ut.js";import"./index-SBtdq8jY.js";const Ar={...a,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsxs(n,{...m,children:[r.jsx(e,{children:p.medium}),r.jsx(e,{children:p.medium})]})]})},o={render:m=>r.jsxs(s,{children:[r.jsx(u,{children:"Trigger"}),r.jsx(n,{...m,children:Array(20).fill("").map((d,i)=>r.jsxs(e,{children:["Item ",i+1]},i))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
