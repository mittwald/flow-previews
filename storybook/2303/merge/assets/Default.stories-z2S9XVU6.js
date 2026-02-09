import{j as r,r as g}from"./iframe-BTP_Z9Sf.js";import{R as t}from"./Rating-C11ugc8y.js";import{L as l}from"./Label-Cu7NRaqa.js";import{F as R}from"./FieldError-DnUQcxCL.js";import{u as h,F as b,t as F}from"./ResetButton-D_dyfali.js";import{B as f}from"./Button-er0RkDrE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CwZb39At.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./remote-BmAp8UvO.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./RadioGroup-B5CcaDWY.js";import"./utils-DP1LA6WE.js";import"./FieldError-BvNBTK6b.js";import"./Text-CZ1YR4oj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BB65cxFE.js";import"./useLabel-Cpmi3JfU.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./SelectionIndicator-Dze6faSJ.js";import"./useFormValidation-HNZmieSP.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useControlledState-B5h2rUtG.js";import"./FocusScope-B2nLTMyD.js";import"./useFormReset-Bo1Ib9da.js";import"./usePress-BnZLj0Nc.js";import"./useFocusable-Hlf8Yc9h.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./useFieldComponent-Da-vFXDP.js";import"./useMakeFocusable-Cta3vNsb.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";import"./dynamic-LcJrXyvC.js";import"./useRef-Fcqlcr2u.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./browser-eyJ8FPIK.js";import"./getActionGroupSlot-V7kcySO7.js";import"./ButtonView-B2TbsKhv.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
