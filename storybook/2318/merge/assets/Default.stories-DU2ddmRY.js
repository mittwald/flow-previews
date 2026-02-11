import{j as r,R as a}from"./iframe-CNIcTJYh.js";import{P as i}from"./Popover-DmppkICQ.js";import{B as n}from"./Button-DAjUCwya.js";import{P as c}from"./PopoverTrigger-BCzRQS6h.js";import{u as l}from"./useOverlayController-DAzTf57J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./OverlayContextProvider-DLVotmKz.js";import"./context-CHGIk6I_.js";import"./useStatic-J4GDP0vf.js";import"./Dialog-C8--keRD.js";import"./Button-BxwMmJez.js";import"./utils-BMrW0rs-.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./context-C-_0n7Mf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./Text-D2vn8IUC.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./VisuallyHidden-BJLw9ne3.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Text-6t0QtAeQ.js";import"./browser-e5gpn1Ib.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./LoadingSpinner-D1M8B3tV.js";import"./OverlayTrigger-DLlBnUgI.js";import"./DialogTriggerView-CnGjrfl_.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
