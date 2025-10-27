import{j as r,R as a}from"./iframe-DoVgBQr5.js";import{P as i}from"./Popover-23BYXG6-.js";import{B as n}from"./Button-2cUDiMZd.js";import{P as c}from"./PopoverTrigger-BueD0iGX.js";import{u as l}from"./useOverlayController-CaB8twj3.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./OverlayContextProvider-D10wv2mp.js";import"./context-C0oFmp5D.js";import"./useStatic-DVOn0oZR.js";import"./Dialog-BOL4Q97z.js";import"./Button-Cf2Tt4tQ.js";import"./utils-BUNxWnYj.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./context-DKZO50eL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./Text-BnwT6LTw.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./VisuallyHidden-BzJhkBGh.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./IconWarning-BITNguYJ.js";import"./Text-DarT3iBq.js";import"./browser-CTr_Jj6j.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./LoadingSpinner-BjGFLica.js";import"./OverlayTrigger-CMoG14I4.js";import"./ControlledNotification-zc0ciOkv.js";import"./DialogTriggerView-CSun2YfI.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
