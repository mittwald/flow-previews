import{j as r,R as a}from"./iframe-BWhqP90_.js";import{P as i}from"./Popover-S34byCU4.js";import{B as n}from"./Button-BciJVpgP.js";import{P as c}from"./PopoverTrigger-De7KUmFT.js";import{u as l}from"./useOverlayController-BDJ6Yr_G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./OverlayContextProvider-G1DVyXwK.js";import"./context-Bdh27yQP.js";import"./useStatic-Dg52ehJ-.js";import"./Dialog-CL817TCu.js";import"./Button-cDeaYk1j.js";import"./utils-DDxNv25V.js";import"./ProgressBar-CDLRkEMS.js";import"./Label-CvmhHdNV.js";import"./Hidden-40YeYLOA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./context-D1O-Xc3I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./useControlledState-hpfIa3L8.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./Text-CjPzL55g.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./VisuallyHidden-DRs-AG4l.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./Text-ClKyFsNf.js";import"./browser-XxEUm-0T.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./LoadingSpinner-CBZxi8OD.js";import"./OverlayTrigger-CGA0SI1j.js";import"./DialogTriggerView-ByiatIwy.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
