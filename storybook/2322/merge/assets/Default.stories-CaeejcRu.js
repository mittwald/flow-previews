import{j as r,R as a}from"./iframe-jPI25t47.js";import{P as i}from"./Popover-BMY2UlYP.js";import{B as n}from"./Button-CMdL10Ys.js";import{P as c}from"./PopoverTrigger-B0S_Bou0.js";import"./flowComponent-NWkTmrxz.js";import{u as l}from"./useOverlayController-Cy5LcSUF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./utils-DssEHlsW.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./context-yJg27e0-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./Text-BUiBuDRU.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./VisuallyHidden-vrC_Lu36.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./LoadingSpinner-DhHtGG23.js";import"./OverlayTrigger-DoiiNK8E.js";import"./DialogTriggerView-DT88Z-vz.js";import"./useStatic-Be080qZz.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
