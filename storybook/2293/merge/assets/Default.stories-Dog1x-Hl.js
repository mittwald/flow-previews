import{j as r,r as g}from"./iframe-CZIIjdGx.js";import{R as t}from"./Rating-CWG1nIFY.js";import{L as l}from"./Label-BCeZc6nh.js";import{F as R}from"./FieldError-BwbB6Ytj.js";import{u as h,F as b,t as F}from"./ResetButton-DxytxUCJ.js";import{B as f}from"./Button-ECMB5KMY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CoTQUaDh.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./remote-BLk-VuSO.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./RadioGroup-CBxgiyPO.js";import"./utils-CzlwFdSi.js";import"./FieldError-Cm712Nbp.js";import"./Text-B_tooMjG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dyc6bd1B.js";import"./useLabel-CmRl_D3U.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./useFormValidation-Bw0zMO4k.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useControlledState-DqlM9bHJ.js";import"./FocusScope-Biunv2Bw.js";import"./useFormReset-DwvZDjIx.js";import"./usePress-DFDeIEOr.js";import"./useFocusable-deUO30SV.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./useFieldComponent-DWG920Yi.js";import"./useMakeFocusable-CCnYf6xU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";import"./dynamic-gRVBa7iD.js";import"./useRef-DQnLGkfA.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./useStatic-BkmFYiV8.js";import"./browser-Cl51s5Ql.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./ButtonView-H4guPIkA.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
