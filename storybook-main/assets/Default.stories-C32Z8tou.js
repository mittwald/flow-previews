import{j as r,r as g}from"./iframe-BwTc9KkQ.js";import{R as t}from"./Rating-CaWMuAD3.js";import{L as l}from"./Label-BbbV6hPu.js";import{F as R}from"./FieldError-BhKB-hqh.js";import{u as h,F as b,t as F}from"./ResetButton-DnBeQq07.js";import{B as f}from"./Button-Ckvz-MCb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CuEgZ9GS.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./remote-B0txjFXx.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./RadioGroup-CJmYWAzi.js";import"./utils-CBQcEIVx.js";import"./FieldError-B40__s1G.js";import"./Text-DngMYAZH.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CXxVDbS0.js";import"./useLabel-BSSuBv8C.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./SelectionIndicator-CWwUcpBG.js";import"./useFormValidation-BAeTIVc2.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useControlledState-DJoARPq6.js";import"./FocusScope-D13mvD2r.js";import"./useFormReset-38634gnl.js";import"./usePress-CJeMKVhz.js";import"./useFocusable-B00zaX18.js";import"./VisuallyHidden-BgOZVVaM.js";import"./useFieldComponent-D1bp3yFp.js";import"./useMakeFocusable-DEwr5FBt.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";import"./dynamic-BE4DvzFx.js";import"./useRef-sbMflI1L.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./useStatic-D7wzuZGA.js";import"./browser-vKZ8hCbx.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./ButtonView-BIDw_mr1.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
