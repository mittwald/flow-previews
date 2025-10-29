import{j as r,R as a}from"./iframe-qTztDmQ9.js";import{P as i,u as c}from"./Popover-Cs9RVKWs.js";import{B as n}from"./Button-B4S912ZH.js";import{P as l}from"./PopoverTrigger-BES5NeAa.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-Cf3mID_7.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./index-_9O3yG_2.js";import"./useStatic-CJuuYRzf.js";import"./OverlayContextProvider-g6FpQG7e.js";import"./Dialog-a9xsPkPz.js";import"./Button-BJWArbVY.js";import"./utils-CdWUsvaa.js";import"./ProgressBar-BBefMTke.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./context-bFJEZtp8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./Text-B9fEov2V.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./ClearPropsContextView-UvqASDld.js";import"./ClearPropsContext-CkWIpOjD.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./browser-D-RoGxAl.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./LoadingSpinner-C5H0hepe.js";import"./OverlayTrigger-Bw3qBN6u.js";import"./ControlledNotification-BCXQpFCZ.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
