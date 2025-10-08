import{j as r,R as P}from"./iframe-F0_qnNmG.js";import{P as i}from"./Popover-BDIZl1Ib.js";import{B as h}from"./Button-6GY0aJmr.js";import{P as R}from"./PopoverTrigger-BXWRhZ11.js";import{u as x}from"./useOverlayController-vUnIin05.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./index-Bz7U0goG.js";import"./OverlayContextProvider-CAsE20_c.js";import"./context-BzKhkjPO.js";import"./useStatic-B-ONLx4H.js";import"./Dialog-DaSdBBae.js";import"./Button-vo1xOT6L.js";import"./utils-sDrdBfYO.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BBFKgyN5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./Text-aPdZ_B4g.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./VisuallyHidden-BlAFGTlT.js";import"./ClearPropsContextView-CdemR_HK.js";import"./IconWarning-uipPPHio.js";import"./Text-DO7iLNcc.js";import"./browser-Cnb-FwPQ.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./OverlayTrigger-12_kL5Te.js";import"./ControlledNotification-Cm5zY1ql.js";import"./DialogTriggerView-DpWtRJQq.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Pr as __namedExportsOrder,hr as default};
