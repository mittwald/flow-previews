import{j as r,R as a}from"./iframe-DlWpeVbs.js";import{P as i}from"./Popover-C0He_Yr4.js";import{B as n}from"./Button-OB72uiKS.js";import{P as c}from"./PopoverTrigger-CraitS4K.js";import"./flowComponent-e7OfeKLs.js";import{u as l}from"./useOverlayController-BQMakZl8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./utils-BWqiCJWQ.js";import"./index-CKa2CbgH.js";import"./index-Ci0KQ92C.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./context-w6Z3dllt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./RSPContexts-8MG42HPe.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./Text-BEVTNZ1h.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./VisuallyHidden-tMd7tplK.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Text-BjwiRmws.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./LoadingSpinner-C6D9eT_m.js";import"./OverlayTrigger-hKGFSF4k.js";import"./DialogTriggerView-BzKacm2d.js";import"./useStatic-JbSR48w4.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
