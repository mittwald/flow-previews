import{r as g,j as r}from"./iframe-CXQlTNqj.js";import{R as t}from"./Rating-CBt0xyIB.js";import{L as l}from"./Label-Dp8rzwUw.js";import{F as R}from"./FieldError-BB5Q0mgv.js";import{u as h,F as b,t as F}from"./ResetButton-CuQl0VZE.js";import{B as f}from"./Button-BlafpMbq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-qWu7I_Pu.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./remote-aElBUAr6.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./context-CCBj18N5.js";import"./RadioGroup-Ka94CWmb.js";import"./utils-DV_byzth.js";import"./FieldError-CtbrQfSs.js";import"./Text-QCBVP_aW.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CN1ucAgL.js";import"./useLabel-DrjDs4EL.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./SelectionIndicator-DQZUhYCh.js";import"./useFormValidation-CRz2e402.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./useControlledState-CC0ueLns.js";import"./FocusScope-Dqueyleg.js";import"./useFormReset-BDdgSN6q.js";import"./usePress-C3E8Ss2p.js";import"./useFocusable-D7YkDf-E.js";import"./VisuallyHidden-bRUw4X6B.js";import"./useFieldComponent-Cn71_kOc.js";import"./useMakeFocusable-C6OWu-ci.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";import"./dynamic-UE7lg7x0.js";import"./ActionGroupView-DaaNBgYo.js";import"./Content-DYKIsFxH.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./RSPContexts-CaXq0cAk.js";import"./Text-B3somVi7.js";import"./browser-C0g7jXxm.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./ActionGroup-DpfWBi-0.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./useStatic-D-kx8TMY.js";import"./Modal-yrBxLTE3.js";import"./useOverlayController-E6hXP07l.js";import"./Overlay-DpNQvUDC.js";import"./OverlayContextProvider-97FigBld.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-sIEanX_d.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./ActionBatch-CqBtrpsE.js";import"./ButtonView-CW0bd9Hv.js";import"./Flex-BrEPexUM.js";import"./useRef-PDOIY6yC.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
