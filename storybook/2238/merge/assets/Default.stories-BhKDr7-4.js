import{j as r,R as a}from"./iframe-B6FtZzVw.js";import{P as i}from"./Popover-CXHYUzbK.js";import{B as n}from"./Button-HJgKWCOC.js";import{P as c}from"./PopoverTrigger-mp3LEmVZ.js";import{u as l}from"./useOverlayController-B2SRK6I3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./Dialog-CxhUJg_S.js";import"./Button-DJB2g2P-.js";import"./utils-B053wNrY.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./context-D8VymAHE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bff_bCDv.js";import"./useFocus-DnpGAVhn.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./Text-Dn3IEVOe.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./VisuallyHidden-kv_mk74c.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./Text-DPYEhwNL.js";import"./browser-D2cTR9e8.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./LoadingSpinner-DXuLs3WE.js";import"./OverlayTrigger-DubAi8QM.js";import"./DialogTriggerView-D3K2Z-3A.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
