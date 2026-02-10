import{r as g,j as r}from"./iframe-CnD5cTjE.js";import{R as t}from"./Rating-CnmqoWkB.js";import{L as l}from"./Label-BZkRYtAq.js";import{F as R}from"./FieldError-D8deZX0S.js";import{u as h,F as b,t as F}from"./ResetButton-DR2uAWq7.js";import{B as f}from"./Button-CxHLWJvy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-K8fT7_bQ.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./remote-CRObq-IF.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./RadioGroup-CTjrWTRc.js";import"./utils-BYl_EWK3.js";import"./FieldError-CkgMvR4A.js";import"./Text-Bz5hHxMj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bj2UuDao.js";import"./useLabel-BEvZESWX.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./useFormValidation-0N4lg69R.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./FocusScope-q9RNJ1I3.js";import"./useFormReset-DzGHPNTd.js";import"./usePress-DgDG_638.js";import"./useFocusable-DUJmCsdq.js";import"./VisuallyHidden-D2K60xua.js";import"./useFieldComponent-D1uM9aif.js";import"./useMakeFocusable-DGsR1R_2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./dynamic-DmWwIwdY.js";import"./useRef-DVW0JPmG.js";import"./Action-DYL0-s8C.js";import"./context-CRbXRYLt.js";import"./useStatic-CR0dXYGS.js";import"./browser-DH0afsgD.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./ButtonView-Dbti4Nd6.js";import"./Text-Bqsx-GQX.js";import"./EmulatedBoldText-czAo41Rl.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
