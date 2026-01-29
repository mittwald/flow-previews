import{j as r,R as a}from"./iframe-CgeYxcj8.js";import{P as i}from"./Popover-DyDWo3ld.js";import{B as n}from"./Button-DR_1qYQ2.js";import{P as c}from"./PopoverTrigger-DwvtvS_T.js";import{u as l}from"./useOverlayController-Dm4XBIwK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./OverlayContextProvider-DFDHe7pa.js";import"./context-x8law5mp.js";import"./useStatic-BH0JS_W8.js";import"./Dialog-LUBljj5i.js";import"./Button-x-eiCRcG.js";import"./utils-BH6Z59zo.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./context-CYaZBhkg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DX014ZyL.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./Text-D1ETBO0D.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./VisuallyHidden-ty8jLyKB.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./Text-fEw-hlGn.js";import"./browser-DJjrqqpQ.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./LoadingSpinner-Czq10wCK.js";import"./OverlayTrigger-B5SAmsfY.js";import"./DialogTriggerView-AOnHbWIf.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
