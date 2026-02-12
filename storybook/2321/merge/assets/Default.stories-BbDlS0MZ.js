import{r as g,j as r}from"./iframe-C_XCETJ4.js";import{R as t}from"./Rating-CnNgVz_w.js";import{L as l}from"./Label-C05Lio9F.js";import{F as R}from"./FieldError-Cv_CJ9jj.js";import{u as h,F as b,t as F}from"./ResetButton-DlCnoRdL.js";import{B as f}from"./Button-BRKehz01.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D8ZYq2sU.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./index-BzhLFU3i.js";import"./remote-BBIBCAlv.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./RadioGroup-D9jZi1Iu.js";import"./utils-Bso2FrGw.js";import"./FieldError-5QFQIGqn.js";import"./Text-CpxVEUdG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bpra3FZF.js";import"./useLabel-DQxA1BA6.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./SelectionIndicator-CpgeLwVt.js";import"./useFormValidation-CsbIfaDX.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useControlledState-CeDypDyB.js";import"./FocusScope-f515rn4z.js";import"./useFormReset-CmrFi5aC.js";import"./usePress-B-xR971w.js";import"./useFocusable-CMVXl80p.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./useFieldComponent-K9rhjMxn.js";import"./useMakeFocusable-X7BVYo0o.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";import"./dynamic-DjbOT4dP.js";import"./useRef-DPssy75n.js";import"./ButtonView-CkPSl8Kd.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./browser-BQl26QHV.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
