import{j as r,r as g}from"./iframe-DCk1dltx.js";import{R as t}from"./Rating-kMND8xw-.js";import{L as l}from"./Label-CoyrnT1D.js";import{F as R}from"./FieldError-CH94tTsu.js";import{u as h,F as b,t as F}from"./ResetButton-BskZzvDk.js";import{B as f}from"./Button-DZuynozn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Dty0OPVS.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./remote-DvlevvD7.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./RadioGroup-CUPYk5tY.js";import"./utils-dLBbTpD9.js";import"./FieldError-BprKDa8q.js";import"./Text-PmoJdoY5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DaC80i58.js";import"./useLabel-DUKklMlK.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./useFormValidation-BQhs4ME7.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useControlledState-8RsR_43b.js";import"./FocusScope-5MRFtdj_.js";import"./useFormReset-BYlFqKoc.js";import"./usePress-BwKHWgOu.js";import"./useFocusable-CjQRw48Z.js";import"./VisuallyHidden-DsX3-BDW.js";import"./useFieldComponent-DRONwAvB.js";import"./useMakeFocusable-2sTaiVrN.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";import"./dynamic-BisWu7fc.js";import"./useRef-AiAHEOJG.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./browser-CviVsCbd.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./ButtonView-mTtK9nwk.js";import"./Text-BrHbgyhX.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
