import{j as r,R as a}from"./iframe-C_XCETJ4.js";import{P as i}from"./Popover-Cr2hibE5.js";import{B as n}from"./Button-BRKehz01.js";import{P as c}from"./PopoverTrigger-BNg2op09.js";import{u as l}from"./useOverlayController-C6c2wWeg.js";import"./flowComponent-Dc7MSmoT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-Ben69tTv.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./Dialog-BbJdb0zX.js";import"./Button-DIlWiE4j.js";import"./utils-Bso2FrGw.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./context-CpOW4Kl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./Text-CpxVEUdG.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Text-l7AxHvJY.js";import"./browser-BQl26QHV.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./LoadingSpinner-dY4_o8YP.js";import"./OverlayTrigger-lTtRcte7.js";import"./DialogTriggerView-DExfLcnX.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
