import{j as r,R as a}from"./iframe-1Z6hWL0q.js";import{P as i}from"./Popover-CCF5Rtw1.js";import{B as n}from"./Button-Up8_TRdV.js";import{P as c}from"./PopoverTrigger-DgOsblZN.js";import"./flowComponent-CQSqsFz-.js";import{u as l}from"./useOverlayController-zDyCyx1O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./utils-B0Ub4KXD.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./context-DCww6zBl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./RSPContexts-BZtvqclp.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./Text-DPhytgE2.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./VisuallyHidden-CCJLIB7u.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./LoadingSpinner-B9ElqUFv.js";import"./OverlayTrigger-RBcMGmOK.js";import"./DialogTriggerView-DI898Azx.js";import"./useStatic-BMrg-KZz.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...e.parameters?.docs?.source}}};const nr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,nr as __namedExportsOrder,sr as default};
