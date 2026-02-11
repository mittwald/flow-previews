import{r as g,j as r}from"./iframe-DN5oj4yX.js";import{R as t}from"./Rating-DbYxBP7y.js";import{L as l}from"./Label-DdsftIej.js";import{F as R}from"./FieldError-CqFPhrQB.js";import{u as h,F as b,t as F}from"./ResetButton-B5ThXBL6.js";import{B as f}from"./Button-CF7BcIrS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C1DuEctF.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./remote-CDfMg8I2.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./RadioGroup-Dccya1ij.js";import"./utils-u73lU7bl.js";import"./FieldError-lE_N68JV.js";import"./Text-mAHBNKmk.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cz7a81_t.js";import"./useLabel-52-JVqkW.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./SelectionIndicator-BsSExIou.js";import"./useFormValidation-pAg62KPr.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useControlledState-Dl4qb5FM.js";import"./FocusScope-BtxR-tB9.js";import"./useFormReset-B44cc5VH.js";import"./usePress-dDK8KT2l.js";import"./useFocusable-6yyx7e1u.js";import"./VisuallyHidden-BipIpOcd.js";import"./useFieldComponent-DVOrWc0y.js";import"./useMakeFocusable-BaQv25Nr.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";import"./dynamic-D_PfG4t1.js";import"./useRef-C2EU3C7-.js";import"./Action-GYKv85ul.js";import"./context-BOqeUKEn.js";import"./useStatic-D8kDoy_M.js";import"./browser-t02O3gv-.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./ButtonView-yRoRDfha.js";import"./Text-B6wg_w_v.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
