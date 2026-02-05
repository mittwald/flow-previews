import{j as r,r as g}from"./iframe-BL1IY_6V.js";import{R as t}from"./Rating-Cwiq8PVz.js";import{L as l}from"./Label-8Io_X3px.js";import{F as R}from"./FieldError-D0yWaYHs.js";import{u as h,F as b,t as F}from"./ResetButton-BRxvWv3x.js";import{B as f}from"./Button-B7zQBVb0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BTI7YBWG.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./remote-BuZW91cH.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./RadioGroup-BeDUCU2r.js";import"./utils-GyL2rjZN.js";import"./FieldError-CCCCRqJ9.js";import"./Text-B4yGITBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ca3ASx7C.js";import"./useLabel-CyH2amP0.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./SelectionIndicator-Dec13xxT.js";import"./useFormValidation-DCrH4OQY.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useControlledState-CA6yhcg7.js";import"./FocusScope-B7aMt2fO.js";import"./useFormReset-C4J5P-lS.js";import"./usePress-CxRwZ9-L.js";import"./useFocusable-CUtc6O_Q.js";import"./VisuallyHidden-CgqIxBlU.js";import"./useFieldComponent-oZ5IqIdY.js";import"./useMakeFocusable-Dv_qirCt.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./dynamic-Dn3YQ50F.js";import"./useRef-wA2SAyNt.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./browser-DogRo3Wh.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./ButtonView-DNg_Qy4d.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
