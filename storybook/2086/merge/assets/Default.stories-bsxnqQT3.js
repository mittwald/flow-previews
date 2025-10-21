import{j as r,R as a}from"./iframe-DOYRhvKw.js";import{P as i}from"./Popover-C_Lqylf0.js";import{B as n}from"./Button-C2r2j3I4.js";import{P as c}from"./PopoverTrigger-ZBGVLYlz.js";import{u as l}from"./useOverlayController-7tlEbJro.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./Dialog-QPXJS7lu.js";import"./Button-DqQnue56.js";import"./utils-Bgpcx055.js";import"./ProgressBar-DECQ-pQm.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./context-NzKNm45Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./Text-ChShlFeN.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./VisuallyHidden-DLTCEUwm.js";import"./ClearPropsContextView-HZAP9uO_.js";import"./ClearPropsContext-BqcXprie.js";import"./IconWarning-CT2mn3WV.js";import"./Text-uG3ng9U4.js";import"./browser-BfmJHaZX.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./ControlledNotification-DTnIJfc-.js";import"./DialogTriggerView-DchH2u7O.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,lr as __namedExportsOrder,cr as default};
