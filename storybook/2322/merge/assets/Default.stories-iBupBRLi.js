import{j as r,R as a}from"./iframe-DeaTJDua.js";import{P as i}from"./Popover-Bx3CBkxo.js";import{B as n}from"./Button-Cbxy7DVV.js";import{P as c}from"./PopoverTrigger-B94hN0fq.js";import"./flowComponent-De56C_b5.js";import{u as l}from"./useOverlayController-DRqv1s8t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./utils-DAn_19Le.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./context-DpHy2B7Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./RSPContexts-n2YtmRLP.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./Text-D55T9z4A.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./VisuallyHidden-BMpCP5yc.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./Text-DmX-Z1ax.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./LoadingSpinner-tY2JT6X0.js";import"./OverlayTrigger-Cd2hfWuE.js";import"./DialogTriggerView-r_lbluoU.js";import"./useStatic-Die7f9lk.js";const sr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
