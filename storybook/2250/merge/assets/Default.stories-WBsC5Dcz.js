import{j as r,R as a}from"./iframe-CF9WEugj.js";import{P as i}from"./Popover-Cnq1gXmI.js";import{B as n}from"./Button-Dt7_Feft.js";import{P as c}from"./PopoverTrigger-CGPw0wGY.js";import{u as l}from"./useOverlayController-CbGkJu3W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./OverlayContextProvider-BjE0srji.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./Dialog-Dbq5Vprd.js";import"./Button--TTYmuFt.js";import"./utils-B4BZttt0.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./context-Bi2P07EN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./Text-wlSF0gym.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./VisuallyHidden-C66z9jQL.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Text-Czdsn8RZ.js";import"./browser-CV2qUG2E.js";import"./EmulatedBoldText--WvdXsxT.js";import"./LoadingSpinner-CdxOiWQd.js";import"./OverlayTrigger-ZNA0xvDx.js";import"./DialogTriggerView-BK5QB_3_.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
