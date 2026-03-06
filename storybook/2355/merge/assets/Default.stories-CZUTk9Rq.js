import{j as r,R as a}from"./iframe-BgKMnsqP.js";import{P as i}from"./Popover-DwOIDTsd.js";import{B as n}from"./Button-BtfzhoC2.js";import{P as c}from"./PopoverTrigger-Btw7sKJs.js";import"./flowComponent-K5lY2cwd.js";import{u as l}from"./useOverlayController-D55f6wXT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./Dialog-BWmXoaKF.js";import"./Button-CpsY86Gq.js";import"./utils-DF7rIzyn.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./context-bU_PoVUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./Text-DxRa_Q_m.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./VisuallyHidden-CtgyRlvv.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Text-C3i_8DOD.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./OverlayTrigger-B2K0MccU.js";import"./DialogTriggerView-DWZYR3R2.js";import"./useStatic-BGwbdR9P.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
