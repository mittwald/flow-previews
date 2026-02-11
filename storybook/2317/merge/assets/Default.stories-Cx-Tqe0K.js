import{j as r,R as a}from"./iframe-C_YE0yRE.js";import{P as i}from"./Popover-BcERq8Yi.js";import{B as n}from"./Button-D40FTP7t.js";import{P as c}from"./PopoverTrigger-B94BrAJa.js";import{u as l}from"./useOverlayController-DmoYfzmu.js";import"./flowComponent-BmGOFz_C.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./Dialog-BXH836dM.js";import"./Button-DRed6E24.js";import"./utils-DHqPz2V6.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./context-BsGh4Cu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNy1k_Tf.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./Text-BXWHLDC_.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./VisuallyHidden-DZpEB13Q.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./Text-DHPE0I2s.js";import"./browser-BLJ3u5oR.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./LoadingSpinner-CWKEQFJy.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./DialogTriggerView-BiUKHl-a.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
