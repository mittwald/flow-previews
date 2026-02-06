import{j as r,r as g}from"./iframe-CTX0Bv2_.js";import{R as t}from"./Rating-Z22yZ2Q3.js";import{L as l}from"./Label-Dhp6BO4i.js";import{F as R}from"./FieldError-BCaKsj_Z.js";import{u as h,F as b,t as F}from"./ResetButton-BBbbRB2z.js";import{B as f}from"./Button--JyduJMj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-nHMyX661.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./remote-Dp_KpE6s.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./context-BlMA_qTH.js";import"./RadioGroup-BC8S0Ier.js";import"./utils-DEP6wxfF.js";import"./FieldError-DPNf_GCP.js";import"./Text-CfE4Vxx5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CEQjTe99.js";import"./useLabel-CflB3N3A.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./SelectionIndicator-BIEwPYk3.js";import"./useFormValidation-CLweFpah.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useControlledState-BSzbNF-6.js";import"./FocusScope-Dney2d0V.js";import"./useFormReset-CFaexdLs.js";import"./usePress-BBVfaVqb.js";import"./useFocusable-C46UWCUq.js";import"./VisuallyHidden-DBqpLolF.js";import"./useFieldComponent-mADlv6K1.js";import"./useMakeFocusable-DqRzBHJp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";import"./dynamic-izZr6sj3.js";import"./useRef-CPlhEGUf.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./browser-NwcAgtgI.js";import"./getActionGroupSlot-CcrxUumb.js";import"./ButtonView-Dt-QAv61.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6E7IXzn.js";import"./ProgressBar-KcEl-cak.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
