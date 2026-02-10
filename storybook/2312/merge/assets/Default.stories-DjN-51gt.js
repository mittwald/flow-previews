import{j as r,R as a}from"./iframe-CLDMeli7.js";import{P as i}from"./Popover-PjJ853r6.js";import{B as n}from"./Button-BzVheXKP.js";import{P as c}from"./PopoverTrigger-CiCWv3b2.js";import{u as l}from"./useOverlayController-CfvFaHFD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./OverlayContextProvider-D58HtU5y.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./Dialog-BqnORwX4.js";import"./Button-DkOX4zii.js";import"./utils-CeJP1xg2.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./context-CJeO-2nS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-5-cRdm9R.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./Text-Doo8ujkC.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./VisuallyHidden--NZ_Ses-.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./Text-CP7Ip6pC.js";import"./browser-DchrXhwC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./LoadingSpinner-DoDeCRPK.js";import"./OverlayTrigger-BIW3wf-9.js";import"./DialogTriggerView-C5-Lvp2U.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
