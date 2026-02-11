import{r as g,j as r}from"./iframe-BRGIT6aC.js";import{R as t}from"./Rating-CiO7WgOP.js";import{L as l}from"./Label-DYHgdjdj.js";import{F as R}from"./FieldError-BPfKA2u4.js";import{u as h,F as b,t as F}from"./ResetButton-Q24A8VNC.js";import{B as f}from"./Button-CQ_f9ZVl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-7xibGY50.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./remote-B0Hk_38y.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./RadioGroup-Bxa6CcFt.js";import"./utils-D-ssFu49.js";import"./FieldError-f7o5-LTX.js";import"./Text-CBpyQBbE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-97YOGsKi.js";import"./useLabel-CWpJX9lW.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./SelectionIndicator-BbWx7qoh.js";import"./useFormValidation-D-IfNlYy.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useControlledState-C2xaeP2Y.js";import"./FocusScope-D2KgIyLw.js";import"./useFormReset-CXZmek7W.js";import"./usePress-CGLZGzkl.js";import"./useFocusable-Bmr3Drft.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./useFieldComponent-CMRD4Pyo.js";import"./useMakeFocusable-cUXh9Ssu.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";import"./dynamic-DJEA9S0A.js";import"./useRef-BP6FbjN4.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./browser-BYxlW31W.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./ButtonView-Cu_PLq3T.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
