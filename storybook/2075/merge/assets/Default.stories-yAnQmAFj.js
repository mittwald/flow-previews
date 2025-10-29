import{j as r,R as a}from"./iframe-C9dYfgSf.js";import{P as i,u as c}from"./Popover-JI_LEAD1.js";import{B as n}from"./Button-RNpKkVK8.js";import{P as l}from"./PopoverTrigger-BISQUibG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BXzGXLkM.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./index-DbMX5jmM.js";import"./useStatic-BaiCJrRH.js";import"./OverlayContextProvider-CZ-NaAce.js";import"./Dialog-W7ChNaVu.js";import"./Button-CD1zJvoj.js";import"./utils-CO6LnGLR.js";import"./ProgressBar-BM6quT-y.js";import"./Label-HJzRYjqm.js";import"./Hidden-C5ZQOCSQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./context-iM_q7ty8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./Text-CQ7Fwsu6.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./ClearPropsContextView-DPeL6MiY.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./browser-CNYhznL3.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./LoadingSpinner-DDIQ3dza.js";import"./OverlayTrigger-CgW4dBKa.js";import"./ControlledNotification-CQYIBWNV.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
