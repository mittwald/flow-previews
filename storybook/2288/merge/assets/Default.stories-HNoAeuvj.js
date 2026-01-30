import{j as r,R as a}from"./iframe-K4Kgzs5d.js";import{P as i}from"./Popover-B6jJOXre.js";import{B as n}from"./Button-CLdF1xvY.js";import{P as c}from"./PopoverTrigger-CfX0DYJG.js";import{u as l}from"./useOverlayController-lRtmjR_K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./Dialog-D9y6Gm5p.js";import"./Button-B9p48ORM.js";import"./utils--XC5cWbY.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./context-BHsz5d3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./Text-DhK76AHe.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./VisuallyHidden-DOfAC-AS.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Text-BPEkrilU.js";import"./browser-9MG5lDdh.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./OverlayTrigger-B8uZhBMV.js";import"./DialogTriggerView-Bj6KaMuw.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
