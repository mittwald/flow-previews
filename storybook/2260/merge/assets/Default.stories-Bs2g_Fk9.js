import{j as r,R as a}from"./iframe-Q1VSciNm.js";import{P as i}from"./Popover-D68emFpc.js";import{B as n}from"./Button-BkL5LUHK.js";import{P as c}from"./PopoverTrigger-D1e9najF.js";import{u as l}from"./useOverlayController-CoiqP3F-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./OverlayContextProvider-y6JRCx08.js";import"./context-xTt93I09.js";import"./useStatic-DcS9SWFS.js";import"./Dialog-ib05FTRH.js";import"./Button-42pr8eMu.js";import"./utils-Cfx54F97.js";import"./ProgressBar-BibYjS7R.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./context-BLO98TmC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./useControlledState-Cr50bzxN.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./Text-FwHfWGj4.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./VisuallyHidden-btJzxMJm.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./Text-1lLVDQct.js";import"./browser-DUAAaQNQ.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./OverlayTrigger-DzAIUhz9.js";import"./DialogTriggerView-BrsBC3sY.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
