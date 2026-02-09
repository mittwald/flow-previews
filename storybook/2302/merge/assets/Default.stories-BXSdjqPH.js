import{j as r,r as g}from"./iframe-C-IsL8qN.js";import{R as t}from"./Rating-B3p-BeTE.js";import{L as l}from"./Label-DkhLxI5s.js";import{F as R}from"./FieldError-B5Qpz102.js";import{u as h,F as b,t as F}from"./ResetButton-l28aitNS.js";import{B as f}from"./Button-CjTDs8dt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Dgpqm1wd.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./index-foeybvdq.js";import"./remote-HwzzztjA.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./context-D_ogfP81.js";import"./RadioGroup-BMZ9nNoQ.js";import"./utils-CdIT7ixS.js";import"./FieldError-CqpMndtu.js";import"./Text-CQAUJHD3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-4JRPVmTA.js";import"./useLabel-C05pQW9y.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./useFormValidation-CE50eLV8.js";import"./useFocus-NxQ40LWx.js";import"./useFocusRing-DAQnos8V.js";import"./useControlledState-D6WUL5XM.js";import"./FocusScope-DMp-Wrqn.js";import"./useFormReset-ovy8PPed.js";import"./usePress-Bg3iVugG.js";import"./useFocusable-9aQ0aONO.js";import"./VisuallyHidden-B09yhrQ-.js";import"./useFieldComponent-neJhoipE.js";import"./useMakeFocusable-IVMrk_PQ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DKiC9lQT.js";import"./AlertIcon-Dd6PrMrE.js";import"./dynamic-Bim1MLHd.js";import"./useRef-D2U0Fbj7.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./browser-Dh90zeJL.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./ButtonView-B6yYdM6G.js";import"./Text-zEwe4Yc5.js";import"./EmulatedBoldText-CbJEOPDL.js";import"./LoadingSpinner-DNWLy5dx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dm6X_wGa.js";import"./ProgressBar-ZcSeAule.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const jr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,s as ReadOnly,a as Small,m as WithControlledValue,i as WithFieldError,p as WithForm,n as WithLabel,jr as __namedExportsOrder,xr as default};
