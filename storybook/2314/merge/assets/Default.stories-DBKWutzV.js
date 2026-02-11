import{r as g,j as r}from"./iframe-BnHQGzj-.js";import{R as t}from"./Rating-B-SkRlBO.js";import{L as l}from"./Label-u3CIBBS-.js";import{F as R}from"./FieldError-hA7hA6sK.js";import{u as h,F as b,t as F}from"./ResetButton-fNAdGvYj.js";import{B as f}from"./Button-kOzdzwoL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BD5ZgLZv.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./index-CR3_Geu_.js";import"./remote-DzOTiMGq.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./context-oT0KmQcZ.js";import"./RadioGroup-YVtRIfBB.js";import"./utils-B_drgFmA.js";import"./FieldError-CfhVGgFS.js";import"./Text-CP9lFNhL.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B5QWBDfx.js";import"./useLabel-DpMFroVF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./SelectionIndicator-Bje3agQK.js";import"./useFormValidation-CJa5Pm36.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useControlledState-ARGAgX5I.js";import"./FocusScope-BV-dArZv.js";import"./useFormReset-C2cP98Fi.js";import"./usePress-DW43gzrd.js";import"./useFocusable-CpiznpYH.js";import"./VisuallyHidden-DN_pHWhj.js";import"./useFieldComponent-BKOZgMTQ.js";import"./useMakeFocusable-BYAczGGo.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";import"./dynamic-Dg_y_eXk.js";import"./useRef-DC89URQK.js";import"./Action-D5FY68jf.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./browser-Byd_T3zS.js";import"./getActionGroupSlot-DFydpqIy.js";import"./ButtonView-CPuOwsd2.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./LoadingSpinner-DoB6VVvS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7nIxjvHJ.js";import"./ProgressBar-V752D4mF.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
