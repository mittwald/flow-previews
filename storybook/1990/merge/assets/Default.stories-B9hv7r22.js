import{j as r,R as P}from"./iframe-Dmf5T25c.js";import{P as i}from"./Popover-BaPL_3pu.js";import{B as h}from"./Button-DJAJQ6nX.js";import{P as R}from"./PopoverTrigger-Blj_NNQP.js";import{u as x}from"./useOverlayController-BP8yeNHr.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./index-C0-6kTd0.js";import"./OverlayContextProvider-ryh_mCsN.js";import"./context-DfHcYJaf.js";import"./useStatic-B7bUROdd.js";import"./Dialog-BPlr3UWC.js";import"./Button--dPgG3q3.js";import"./utils-DsML-bt_.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CfglF3Ge.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./Text-DgEV6luH.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./VisuallyHidden-CtSvbpyT.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./IconWarning-1UlzAmnA.js";import"./Text-DLrkajvz.js";import"./browser-DrFxiFmb.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./LoadingSpinner-CneC6UV3.js";import"./OverlayTrigger-CaTON9Cj.js";import"./ControlledNotification-C8UUqqPz.js";import"./DialogTriggerView-D2qtOj2v.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
