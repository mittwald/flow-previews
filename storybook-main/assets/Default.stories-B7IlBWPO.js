import{j as r,R as a}from"./iframe-CCG9iH9q.js";import{P as i}from"./Popover-B7zmrX8_.js";import{B as n}from"./Button-DszeRQWk.js";import{P as c}from"./PopoverTrigger-CekFBqQ_.js";import"./flowComponent-DtMp-09u.js";import{u as l}from"./useOverlayController-B8ExGaeg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./utils-BqjYSsY0.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./context-BOE3Zx9s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useFocusable-C9iBP5e4.js";import"./RSPContexts-Cj7-Wn-7.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./Text-CsZp0s5y.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./VisuallyHidden-B8BDvwZm.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Text-CqiRKP9V.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./LoadingSpinner-GybBfiLr.js";import"./OverlayTrigger-BffquD90.js";import"./DialogTriggerView-D0rnzhg8.js";import"./useStatic-DZaf9Eli.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
