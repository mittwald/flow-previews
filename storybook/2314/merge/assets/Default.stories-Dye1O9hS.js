import{r as g,j as r}from"./iframe-DM7qDJWN.js";import{R as t}from"./Rating-BaoY2Pyo.js";import{L as l}from"./Label-BIhRdzJz.js";import{F as R}from"./FieldError-yptSAddh.js";import{u as h,F as b,t as F}from"./ResetButton-p-4WPZNu.js";import{B as f}from"./Button-Dc6TEAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Ck-PBl-h.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./remote-CkIQ4maL.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./context-Bdkwq7qF.js";import"./RadioGroup-C6rGNhvx.js";import"./utils-DCh3KcEQ.js";import"./FieldError-CDF7zCEW.js";import"./Text-CqLEY5m0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DD0plB0K.js";import"./useLabel-d_6Xjsvm.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./SelectionIndicator-DhuP4hb9.js";import"./useFormValidation-BjtvC6sH.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./useControlledState-CGBhCpgz.js";import"./FocusScope-DcmRl2I0.js";import"./useFormReset-DEHhMcAF.js";import"./usePress-DcE1V40F.js";import"./useFocusable-jnMsXBmm.js";import"./VisuallyHidden-Djcrj7d_.js";import"./useFieldComponent-DWfL7CEw.js";import"./useMakeFocusable-CP3MgQIe.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";import"./dynamic-Bo6M-mWb.js";import"./useRef-DOoXSahq.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./browser-GV4Evxlh.js";import"./getActionGroupSlot-ChSghX-d.js";import"./ButtonView-7nAQL8-V.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
