import{j as r,R as a}from"./iframe-B2CTi6cm.js";import{P as i}from"./Popover-Dz64XD_e.js";import{B as n}from"./Button-_yLWek3e.js";import{P as c}from"./PopoverTrigger-DHsSJuLm.js";import"./flowComponent-C7mc_ao_.js";import{u as l}from"./useOverlayController-D1PufBkN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./Dialog-D2pl7IFn.js";import"./Button-0k2tyOZn.js";import"./utils-CFhs-kxq.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./context-DlyTwf6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./RSPContexts-BnlNRtVT.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./Text-CtUv1EPC.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./VisuallyHidden-D844FGjJ.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./LoadingSpinner-DnfUZyUE.js";import"./OverlayTrigger-C18xY8mJ.js";import"./DialogTriggerView-BhFyvgvQ.js";import"./useStatic-gDNiy6Z_.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
