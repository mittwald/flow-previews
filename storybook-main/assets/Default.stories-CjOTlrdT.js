import{j as r,r as g}from"./iframe-agbTJ2rk.js";import{R as t}from"./Rating-Dz0dbyCL.js";import{L as l}from"./Label-BNNjDH32.js";import{F as R}from"./FieldError-BH2blnd1.js";import{u as h,F as b,t as F}from"./ResetButton-Cq6Eoa5n.js";import{B as f}from"./Button-Br9Yc6cY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DBJeVzaP.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./remote-zpHok2y4.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./RadioGroup-Dfih21OT.js";import"./utils-Cg5Rmuuc.js";import"./FieldError-D6XTyUhB.js";import"./Text-B3pB98UM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-6HUwn4n1.js";import"./useLabel-COQ7NCDT.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./SelectionIndicator-DWRc_aAr.js";import"./useFormValidation-DxAxZRFR.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useControlledState-JGLxFfPu.js";import"./FocusScope-COCAXuyM.js";import"./useFormReset-DoFpeMzh.js";import"./usePress-DrXmkjxU.js";import"./useFocusable-Dcrl6Kh-.js";import"./VisuallyHidden-C-SP4JvM.js";import"./useFieldComponent-Bdg-2oVH.js";import"./useMakeFocusable-BdwcOc_T.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";import"./dynamic-9PkN5S4U.js";import"./useRef-HSIchM6J.js";import"./Action-KXOin-yd.js";import"./context-Dm2xLzXZ.js";import"./useStatic-C0pFV-a-.js";import"./browser-DcYn1DNE.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./ButtonView-C09bK-pd.js";import"./Text-DmtEYLwi.js";import"./EmulatedBoldText-_6M-JboB.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
