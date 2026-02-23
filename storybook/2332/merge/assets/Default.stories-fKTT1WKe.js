import{r as g,j as r}from"./iframe-DunzINT4.js";import{R as t}from"./Rating-DHNo79Jr.js";import{L as l}from"./Label-CAkB50pb.js";import{F as R}from"./FieldError-CxTapnNI.js";import{u as h,F as b,t as F}from"./ResetButton-74oeQDLV.js";import{B as f}from"./Button-D4ye7DRq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-kFcnfyhN.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./remote-BHsosJBg.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./RadioGroup-N7hXT6Pi.js";import"./utils-B66WPIWK.js";import"./FieldError-MxPTKBhw.js";import"./Text-CMXpTIb-.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dp-IAcVR.js";import"./useLabel-ClizNTl4.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./useFormValidation-CAKGNU-r.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useControlledState-BzLfbFoS.js";import"./FocusScope-9vf2uR4m.js";import"./useFormReset-BCoUHfvE.js";import"./usePress-VDpDAbVy.js";import"./useFocusable-BqXitQDl.js";import"./VisuallyHidden-C85ONzQn.js";import"./useFieldComponent-mGz2JkQm.js";import"./useMakeFocusable-Du4il9hY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";import"./dynamic--RH-hhxe.js";import"./ActionGroupView-xmbZNfvW.js";import"./Content-C85uPduS.js";import"./Heading-ClXpNfz0.js";import"./Heading-B3Dcho9D.js";import"./RSPContexts-DYG4soUM.js";import"./Text-DTHO_DRR.js";import"./browser-CUqULdV9.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./ActionGroup-CU6CeMc_.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./useStatic-CPAaCdO2.js";import"./Modal-BoYgkIb6.js";import"./useOverlayController-CeSeYZW0.js";import"./Overlay-DI6L0QBM.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./LoadingSpinner-CzZyxAnt.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DJczCQVT.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./ActionBatch-CdGiFur7.js";import"./ButtonView-Db2YbPTU.js";import"./Flex-D0W34hyw.js";import"./useRef-GWWqzfEo.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
