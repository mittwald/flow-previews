import{j as r,R as a}from"./iframe-DCa_XPw0.js";import{P as i}from"./Popover-BUV2jDV7.js";import{B as n}from"./Button-5vT2-_W4.js";import{P as c}from"./PopoverTrigger-lu5aHy_z.js";import{u as l}from"./useOverlayController-Dv456Rq0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./OverlayContextProvider-BgGVuEZb.js";import"./context-Dlf3CpRu.js";import"./useStatic-CrVdgLYB.js";import"./Dialog-jvkUQzt2.js";import"./Button-8oNj6zWV.js";import"./utils-CHsRUe2b.js";import"./ProgressBar-D1oSpt7t.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./context-CFo6-Xo4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useControlledState-CRVJv1rD.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./Text-I5qgKc0V.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./VisuallyHidden-D3RYJYP2.js";import"./ClearPropsContextView-CquQV2OH.js";import"./ClearPropsContext-D7TWL38i.js";import"./IconWarning-Q2oX1eiS.js";import"./Text-DnODaVEe.js";import"./browser-2ZL6lgPg.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./OverlayTrigger-tJ_bpd3Z.js";import"./ControlledNotification-CwfTViCh.js";import"./DialogTriggerView-CoeqKf1B.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,lr as __namedExportsOrder,cr as default};
