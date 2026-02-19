import{j as r,R as a}from"./iframe-DYssR0ZO.js";import{P as i}from"./Popover-BQzuMW4U.js";import{B as n}from"./Button-DWrm_dbc.js";import{P as c}from"./PopoverTrigger-Mx_-zXY7.js";import"./flowComponent-DsQfvZ8R.js";import{u as l}from"./useOverlayController-BfbCDLsY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-C4hsr81s.js";import"./Dialog-DF_yv1N5.js";import"./Button-Dmp7BHEZ.js";import"./utils-C3q1cDFY.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./context-CUXiPoRo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-xSc99ptM.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useFocusable-CmCmEjiW.js";import"./RSPContexts-CDW_96-t.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./Text-C48KhL8P.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./VisuallyHidden-B8I9N7kv.js";import"./IconWarning-BhLXBIfL.js";import"./remote-cHYIdIzb.js";import"./Text-S9F4vE2H.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";import"./LoadingSpinner-lL7MHRW7.js";import"./OverlayTrigger-BzADejGr.js";import"./DialogTriggerView-CeCW_e9m.js";import"./useStatic-BJkvCPdg.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
