import{r as g,j as r}from"./iframe-BuRyV86k.js";import{R as t}from"./Rating-CeAyZ5dp.js";import{L as l}from"./Label-D5Mh9PbX.js";import{F as R}from"./FieldError-CyZxViQf.js";import{u as h,F as b,t as F}from"./ResetButton-1DNuWBXl.js";import{B as f}from"./Button-CyndH9Xm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DAJxMizk.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./remote-Cg9OAbJn.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./RadioGroup-Uk_tYeoD.js";import"./utils-DCjU3VYp.js";import"./FieldError-BEkkBW9r.js";import"./Text-D3tRocSh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C4eLdnUU.js";import"./useLabel-9drM0Q_0.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./SelectionIndicator-r0KfSIub.js";import"./useFormValidation-DZRdJrD7.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useControlledState-DYwoO1wA.js";import"./FocusScope-DBYeUwg2.js";import"./useFormReset-BkHfz2ea.js";import"./usePress-B_1LlkAk.js";import"./useFocusable-CtKU_QIU.js";import"./VisuallyHidden-BxxKUxYt.js";import"./useFieldComponent-Duyh6ShH.js";import"./useMakeFocusable-WaDJMBhq.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./dynamic-clmxwr04.js";import"./useRef-dnDUVyEs.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./browser-DvnOBVed.js";import"./getActionGroupSlot-BzS6Espk.js";import"./ButtonView-CxrixtJG.js";import"./Text-DPwKDAaR.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
