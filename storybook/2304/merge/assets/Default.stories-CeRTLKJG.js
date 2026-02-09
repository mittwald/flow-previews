import{r as g,j as r}from"./iframe-DsvUdpXw.js";import{R as t}from"./Rating-DIvSjnO3.js";import{L as l}from"./Label-V0M08dzp.js";import{F as R}from"./FieldError-DMawyIiV.js";import{u as h,F as b,t as F}from"./ResetButton-BMOT3GH_.js";import{B as f}from"./Button-Bh17vETd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DeQxeoQB.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./remote-Bzinmuoi.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./RadioGroup-CTpjzMEl.js";import"./utils-elFy1-Tx.js";import"./FieldError-S3zhgpi7.js";import"./Text-qH9eQPgP.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-_ij7bXRe.js";import"./useLabel-CEPtaVyT.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./SelectionIndicator-CDySPjGG.js";import"./useFormValidation-B3UJ98ri.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useControlledState-HbpZAl0m.js";import"./FocusScope-eXu984DB.js";import"./useFormReset-BZPoHMi4.js";import"./usePress-BFT-1ljl.js";import"./useFocusable-CD1pLlOX.js";import"./VisuallyHidden-Ds80HbqR.js";import"./useFieldComponent-CWVnpPPS.js";import"./useMakeFocusable-CZXjAvHJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./dynamic-B-6cr1cE.js";import"./useRef-Cuy_dzRn.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./useStatic-B4i3epQD.js";import"./browser-BtOTkQbR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./ButtonView-ngwm-oT3.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
