import{r as g,j as r}from"./iframe-BOfxQ126.js";import{R as t}from"./Rating-CXlt3rnJ.js";import{L as l}from"./Label-CqRpIaXO.js";import{F as R}from"./FieldError-DCo5F_nc.js";import{u as h,F as b,t as F}from"./ResetButton-4yrHDRhQ.js";import{B as f}from"./Button-y6FeYCBC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BoBPkWIf.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./remote-DjEyU7NV.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./RadioGroup-9HjWLEea.js";import"./utils-Ca0-H8MP.js";import"./FieldError-GcSEBXG9.js";import"./Text-OoL-eb0_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CRtfSpWI.js";import"./useLabel-5EK40Aa-.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./useFormValidation-CxieGJiT.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useControlledState-DE1u8yHr.js";import"./FocusScope-CCHjHw-t.js";import"./useFormReset-B-rsDa9Z.js";import"./usePress-up0eurfY.js";import"./useFocusable-C918yQby.js";import"./VisuallyHidden-DfBCvB4u.js";import"./useFieldComponent-D5YpTCds.js";import"./useMakeFocusable-BtYLegqF.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";import"./dynamic-BEImSkKK.js";import"./ActionGroupView-x-6e1Fyk.js";import"./Content-C0CTBJnI.js";import"./Heading-XWK9z325.js";import"./Heading-t8wVFZ6a.js";import"./RSPContexts-8t9TLuqJ.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./ActionGroup-BJX7-2AL.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./useStatic-DMadDPeg.js";import"./Modal-DHfoMw3X.js";import"./useOverlayController-NqoHBo9l.js";import"./Overlay-D-1f0Sj_.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./LoadingSpinner-BjosoRSs.js";import"./Dialog-CCDN7DJz.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DOAKdHdF.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./ActionBatch-B3OckZQJ.js";import"./ButtonView-CgihUfDk.js";import"./Flex-ClQXTQke.js";import"./useRef-ChX_wJCz.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
