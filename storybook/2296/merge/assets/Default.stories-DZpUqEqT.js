import{j as r,r as g}from"./iframe-ByQojKkA.js";import{R as t}from"./Rating-DyQAgrle.js";import{L as l}from"./Label-zx0kmle1.js";import{F as R}from"./FieldError-Dl1gROKX.js";import{u as h,F as b,t as F}from"./ResetButton-Cu7HTX9i.js";import{B as f}from"./Button-DG0b__xZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-tVGTIzEo.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./remote-CpbK9d4g.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./RadioGroup-C5EFmQ6c.js";import"./utils-D3Fm7Ut8.js";import"./FieldError-DskIGmIg.js";import"./Text-BjqL4T8G.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cffumk9C.js";import"./useLabel-BZ22SDLr.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./SelectionIndicator-Bd5_QITD.js";import"./useFormValidation-DiyC9X3o.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useControlledState-CdOFY_9U.js";import"./FocusScope-Df45VKi0.js";import"./useFormReset-CjuTJ3ym.js";import"./usePress-BwnADfjY.js";import"./useFocusable-BRqzZMJF.js";import"./VisuallyHidden-Bik_STlT.js";import"./useFieldComponent-Blt-XhY9.js";import"./useMakeFocusable-DnZdr2vs.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./dynamic-G0P_JzfN.js";import"./useRef-hk2_5oTi.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./useStatic-ClNGpIKI.js";import"./browser-BgQK0KeO.js";import"./getActionGroupSlot-D7PQruO1.js";import"./ButtonView-B55WSwFj.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
