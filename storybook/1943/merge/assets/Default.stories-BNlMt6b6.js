import{j as r,R}from"./iframe-Bi2SfRmV.js";import{P as i,a as x}from"./Popover-Db6Hc3ib.js";import{B as h}from"./Button-D5Xd0LEq.js";import{u as P}from"./DialogTriggerView-CRsA35wH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./Dialog-MyAkaQuV.js";import"./Button-D6XrWsvH.js";import"./utils-Dxcmwd9a.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-A5VLCzVG.js";import"./context-BhsUJEB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BC_RRwfM.js";import"./useFocus-C-Ng-ghT.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./RSPContexts-SSRv2tEc.js";import"./OverlayArrow-B-xht0if.js";import"./useControlledState-CIKoypYK.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./Text-CkSKd-Z_.js";import"./Group-CNmX4nS8.js";import"./SearchField-BM55Blft.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./TextField-Cs62mBed.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./useCollator-nLcbAmPr.js";import"./FocusScope-lVODcCJ_.js";import"./VisuallyHidden-DCu-7XPb.js";import"./IconWarning-Bplgov_i.js";import"./Text-BBB4yGC-.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./LoadingSpinner-ClEMvWD9.js";import"./context-BL-ZIP9s.js";import"./useStatic-DCDW6go-.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
