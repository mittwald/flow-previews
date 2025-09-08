import{j as r,R}from"./iframe-xv1hkYrp.js";import{P as i,a as x}from"./Popover-CkIiCyP4.js";import{B as h}from"./Button-CxiqmFwG.js";import{u as P}from"./DialogTriggerView-a7wYn1Yu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./Dialog-Xvd99Udq.js";import"./Button-BusXuZI0.js";import"./utils-CpTHh5rs.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BR4zi6f8.js";import"./context-D4r7bTNU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-o1s-vRpH.js";import"./useFocus-CfLpRQBT.js";import"./useFocusRing-CU0aNGGs.js";import"./useFocusable-CwWDG3DW.js";import"./RSPContexts-DH2vWQTy.js";import"./OverlayArrow-CUApfZDY.js";import"./useControlledState-BbRhH2Ee.js";import"./Collection-DSqVCN8E.js";import"./CollectionBuilder-Dvvc79MD.js";import"./Separator-qRXs74hc.js";import"./Text-B_3Y_Nze.js";import"./Group-B3GwFloQ.js";import"./SearchField-BwU0-hd2.js";import"./FieldError-wrM_YjD9.js";import"./Form-B-L3i4zG.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./TextField-D3hWr_Bw.js";import"./useEvent-CaWXSKpr.js";import"./SelectionManager-DH9lj--q.js";import"./useCollator-IG_dykuZ.js";import"./FocusScope-BxH26lbn.js";import"./VisuallyHidden-CfqgoXLS.js";import"./IconWarning-0FGrLhxS.js";import"./Text-DbY3Cuep.js";import"./browser-lwEiR5fW.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./LoadingSpinner-DFWWTIAT.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
