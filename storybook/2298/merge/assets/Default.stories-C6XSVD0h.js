import{j as r,r as g}from"./iframe-CJFOFCad.js";import{R as t}from"./Rating-BS1scO3N.js";import{L as l}from"./Label-DpG9gbVN.js";import{F as R}from"./FieldError-Dc2Z54jn.js";import{u as h,F as b,t as F}from"./ResetButton-BkgcDrX7.js";import{B as f}from"./Button-D5kumnA4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-1TKJLzWG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./index-Cu9s0VFH.js";import"./remote-BxHvJS68.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./RadioGroup-BFnxOhkd.js";import"./utils-CsQ8IQtm.js";import"./FieldError-B3-rgjm7.js";import"./Text-8vym_gVd.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B3lCmY-S.js";import"./useLabel-Cb3KoAb3.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./SelectionIndicator-BI4debiO.js";import"./useFormValidation-DcThlYcg.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useControlledState-DvHOpAD3.js";import"./FocusScope-BYRCsx--.js";import"./useFormReset-DXleDB5s.js";import"./usePress-NyliDXf7.js";import"./useFocusable-13L7602I.js";import"./VisuallyHidden-CZLhXAB_.js";import"./useFieldComponent-CVIwC-Yy.js";import"./useMakeFocusable-gLc_Rp5H.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";import"./dynamic-CfulQ7wG.js";import"./useRef-B-LbwbXp.js";import"./Action-Vq-tbHvg.js";import"./context-DTASnmZz.js";import"./useStatic-C0hf5llT.js";import"./browser-C8kWAWSZ.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./ButtonView-BS0xOJCI.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
