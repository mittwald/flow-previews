import{j as r,R as a}from"./iframe-BoiTaxGN.js";import{P as i}from"./Popover-CKTt2h1_.js";import{B as n}from"./Button-MYsVPgLO.js";import{P as c}from"./PopoverTrigger-BHyPDJ5x.js";import"./flowComponent-5SfKf5nB.js";import{u as l}from"./useOverlayController-BbkltkAX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./Dialog-BL8T3CnU.js";import"./Button-BZbFxF4O.js";import"./utils-RetFhwyR.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./context-hlBZKj-7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./Text-DnUg5-aR.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./VisuallyHidden-CML_0Z6P.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Text-ClfpXeTF.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./LoadingSpinner-BBdroSRA.js";import"./OverlayTrigger-Db6so5Mf.js";import"./DialogTriggerView-C5uIlAdd.js";import"./useStatic-bFyj34a0.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
