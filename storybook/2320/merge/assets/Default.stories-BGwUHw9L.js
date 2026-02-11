import{r as g,j as r}from"./iframe-l3dQPg2D.js";import{R as t}from"./Rating-CimnynZb.js";import{L as l}from"./Label-DxyvMbSs.js";import{F as R}from"./FieldError-Q6bz3Uf7.js";import{u as h,F as b,t as F}from"./ResetButton-DLfZ0hQG.js";import{B as f}from"./Button-CVhESpos.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C2C4Ye1P.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./index-BnwDl3XO.js";import"./remote-VRbYHHBV.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./RadioGroup-Dm_zvR-S.js";import"./utils-BpR6PJXM.js";import"./FieldError-DNTSOotb.js";import"./Text-CND2PMao.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-bbOcDT_r.js";import"./useLabel-Bgm61Ocu.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./useFormValidation-D7taYq4g.js";import"./useFocus-BoIaqFAK.js";import"./useFocusRing-Sg4LsORI.js";import"./useControlledState-DV6ufSFw.js";import"./FocusScope-Cs1Wy-O3.js";import"./useFormReset-mKOiKuYb.js";import"./usePress-CLrRc3iw.js";import"./useFocusable-CewhyE_c.js";import"./VisuallyHidden-D5CUP-QC.js";import"./useFieldComponent-CTh-2D00.js";import"./useMakeFocusable-Cr7saEEd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";import"./dynamic-CCyGrJK3.js";import"./useRef-FIk_DJsE.js";import"./Action-BglyJGiG.js";import"./context-BBlsigfO.js";import"./useStatic-BdWyaTNp.js";import"./browser-vgtThTGE.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./ButtonView-DNKUy4ei.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
