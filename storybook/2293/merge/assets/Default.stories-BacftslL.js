import{j as r,r as g}from"./iframe-bYrN4iqU.js";import{R as t}from"./Rating-BFU-bZhH.js";import{L as l}from"./Label-CPmhF0es.js";import{F as R}from"./FieldError-DELvRCSS.js";import{u as h,F as b,t as F}from"./ResetButton-DRmRwOi9.js";import{B as f}from"./Button-BXFpqU-p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-m_DFVeXI.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./remote-zHy9wvpL.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./RadioGroup-C-ZU4Uqm.js";import"./utils-B3voqzat.js";import"./FieldError-BBcT2nDa.js";import"./Text-Dj7c1Gq2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-RNfZ8NGW.js";import"./useLabel-xelku7uN.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./useFormValidation-CAwH-_ip.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useControlledState-hBcxnaS2.js";import"./FocusScope-DaLeJatZ.js";import"./useFormReset-Cb31B_gj.js";import"./usePress-CHP3pRkH.js";import"./useFocusable-fXM7Y9pN.js";import"./VisuallyHidden-DAWjrZx-.js";import"./useFieldComponent-CM1iSrAB.js";import"./useMakeFocusable-DUScPtCl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";import"./dynamic-CHbvz_qx.js";import"./useRef-2-y0_1ka.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./browser-CHbB-bBA.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./ButtonView-Dq6BfzVS.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
