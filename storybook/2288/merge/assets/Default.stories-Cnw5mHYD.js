import{j as r,r as g}from"./iframe-BipmDVic.js";import{R as t}from"./Rating-CZSzXHEa.js";import{L as l}from"./Label-D7pFsU69.js";import{F as R}from"./FieldError-CHo9rwLP.js";import{u as h,F as b,t as F}from"./ResetButton-C87-O7lX.js";import{B as f}from"./Button-BuQAY4x2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CGnZi41_.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./remote-Bx5-otuG.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./RadioGroup-xWDm92Xz.js";import"./utils-BmvAbY6y.js";import"./FieldError-BYM5jSaa.js";import"./Text-Bx_sJIF1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQ1NzRsL.js";import"./useLabel-DZFs0BX7.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./SelectionIndicator-DQakRxMT.js";import"./useFormValidation-DUx2L2VN.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useControlledState-CTBxctZq.js";import"./FocusScope-BUuvBHJx.js";import"./useFormReset-Bn-cpXjq.js";import"./usePress-BGUPUAq5.js";import"./useFocusable-CoJ_GBdx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./useFieldComponent-VycST_vs.js";import"./useMakeFocusable-C2p-RMmT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";import"./dynamic-5Me7t2_P.js";import"./useRef-DY72xU_4.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./browser-CR-oUB3P.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./ButtonView-B8lRgn0T.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
