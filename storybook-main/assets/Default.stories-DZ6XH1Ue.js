import{r as g,j as r}from"./iframe-DzjGvN4s.js";import{R as t}from"./Rating-D50Tew0s.js";import{L as l}from"./Label-B3AoafTb.js";import{F as R}from"./FieldError-wOx9kOaR.js";import{u as h,F as b,t as F}from"./ResetButton-BC1zJie2.js";import{B as f}from"./Button-BJ_Dg9g5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-s7NSVc-U.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./remote-cWDQ0h3n.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./RadioGroup-BmeyXoHw.js";import"./utils-CaY6-C_T.js";import"./FieldError-Cm2eS0Qx.js";import"./Text-CsTzsUsp.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C7-6k5t9.js";import"./useLabel-7qQt_FP7.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./SelectionIndicator-BO4ZIlru.js";import"./useFormValidation-CCaCqHBd.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useControlledState-DSekeTPZ.js";import"./FocusScope-D_QyZTFZ.js";import"./useFormReset-lQZuuaDU.js";import"./usePress-D3so-j8A.js";import"./useFocusable-CvI9gOnC.js";import"./VisuallyHidden-SzhNhvGP.js";import"./useFieldComponent-BsZ1NoTf.js";import"./useMakeFocusable-zz1JSJ_e.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";import"./dynamic-D8j0vgwF.js";import"./useRef-DhpslEjl.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./useStatic-CvNWVJY5.js";import"./browser-DnRnaS9W.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./ButtonView-BBrehocd.js";import"./Text--QhKw61r.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
