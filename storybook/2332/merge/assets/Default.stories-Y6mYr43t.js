import{j as r,R as a}from"./iframe-CFTqgbub.js";import{P as i}from"./Popover-CFUr0FGw.js";import{B as n}from"./Button-DYo4uywI.js";import{P as c}from"./PopoverTrigger-MpTydIeP.js";import"./flowComponent-CsvuKB41.js";import{u as l}from"./useOverlayController-DR05g40f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./Dialog-BnZ8dnOj.js";import"./Button-BKBgz7xZ.js";import"./utils-B4tY5r2S.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./context-DrUKb0cF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./RSPContexts-CFURB7yy.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./Text-Djzy7Vo0.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./VisuallyHidden-CB7azLHp.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./Text-DGb4Yj-N.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./DialogTriggerView-DsPuVW4T.js";import"./useStatic-BFPJMVns.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
