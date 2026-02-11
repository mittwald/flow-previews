import{r as g,j as r}from"./iframe-DFKQ2QsC.js";import{R as t}from"./Rating-CNdlewga.js";import{L as l}from"./Label-DluzxSj2.js";import{F as R}from"./FieldError-DdERfCze.js";import{u as h,F as b,t as F}from"./ResetButton-TRifYodf.js";import{B as f}from"./Button-CumhvKwr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BuA9AHid.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./remote-BP8uJVcU.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./context-m8OE0ddO.js";import"./RadioGroup-DXfoxxvZ.js";import"./utils-BJXdD5he.js";import"./FieldError-Bmf3SAas.js";import"./Text-D27_pVCF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DKz1zkHn.js";import"./useLabel-CurstbwI.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./SelectionIndicator-BFMZIIpU.js";import"./useFormValidation-BX6OQ_jJ.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useControlledState-DUrZ8j4h.js";import"./FocusScope-B8-7lMpW.js";import"./useFormReset-DwR8gwPw.js";import"./usePress-CE-sEEB4.js";import"./useFocusable-C6PlbLtm.js";import"./VisuallyHidden-CKDTSDk1.js";import"./useFieldComponent-R5E6D8Ic.js";import"./useMakeFocusable-C2WUydZC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";import"./dynamic-8YXtFeDo.js";import"./useRef-Bx3esIJs.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./useStatic-BfD-d5xb.js";import"./browser-C3pjfYL0.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./ButtonView-AQo5jRtJ.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBkz1b5H.js";import"./ProgressBar-DQlWH-Q4.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
