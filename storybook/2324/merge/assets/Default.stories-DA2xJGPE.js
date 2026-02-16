import{j as r,R as a}from"./iframe-CdHyQgwh.js";import{P as i}from"./Popover-DRYK2Zvg.js";import{B as n}from"./Button-B83uT_W5.js";import{P as c}from"./PopoverTrigger-CGLUB3K8.js";import"./flowComponent-C7-oBhxO.js";import{u as l}from"./useOverlayController-Cw4NEVT3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-CjArtki4.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./utils-B0AChKxF.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./context--lHaHpmz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useFocusable-CIZyv2_u.js";import"./RSPContexts-DthjkPm0.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useControlledState-D2jLiTCX.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./Text-CFtcNM5e.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./VisuallyHidden-U7btBlyO.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./LoadingSpinner-DJPu7RL-.js";import"./OverlayTrigger-A2pu6fZJ.js";import"./DialogTriggerView-7TZiVE2j.js";import"./useStatic-BBvdmwt_.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
