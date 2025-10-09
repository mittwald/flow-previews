import{j as r,R as P}from"./iframe-DwZ8STeX.js";import{P as i}from"./Popover-CfCMVMRC.js";import{B as h}from"./Button-DviFkjeq.js";import{P as R}from"./PopoverTrigger-DWu5PiBC.js";import{u as x}from"./useOverlayController-D87w5C3N.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./index-DRXVqLbm.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./context-DCjwncLb.js";import"./useStatic-BQF2lsen.js";import"./Dialog-2PCEZ6kq.js";import"./Button-CkDO_RvR.js";import"./utils-7Pnsuj4A.js";import"./ProgressBar-CsC-_1Kt.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./filterDOMProps-CghfNOdR.js";import"./context-B00wSq60.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./Text-BcrniBgV.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./VisuallyHidden-VLSV2bjz.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./IconWarning-dtP1FcGg.js";import"./Text-O3JAN1OQ.js";import"./browser-DDdNHtRK.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./OverlayTrigger-DRZrZrYn.js";import"./ControlledNotification-D5rYnObm.js";import"./DialogTriggerView-CM6tCBPY.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
