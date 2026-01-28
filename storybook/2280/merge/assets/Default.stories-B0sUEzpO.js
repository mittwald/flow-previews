import{j as r,r as g}from"./iframe-BE2KIrNP.js";import{R as t}from"./Rating-C_Ok7YYq.js";import{L as l}from"./Label-BBYAWH-Z.js";import{F as R}from"./FieldError-DLWZre89.js";import{u as h,F as b,t as F}from"./ResetButton-8M30IsUK.js";import{B as f}from"./Button-DTG6_onu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-pheKtU5F.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./remote-BDPI1xTN.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./RadioGroup-Bb3uEHL1.js";import"./utils-CetDBScY.js";import"./FieldError-CYuYbE_Y.js";import"./Text-D-kvbByn.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-7VWdSJkH.js";import"./useLabel-DlCzrbVx.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./SelectionIndicator-B0iQvxUu.js";import"./useFormValidation-BVWNV9RZ.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useControlledState-O9ITVI5k.js";import"./FocusScope-BDfy_Mz6.js";import"./useFormReset-DGFO0EL0.js";import"./usePress-wlnUrUkL.js";import"./useFocusable-PS7GdwKW.js";import"./VisuallyHidden-KypC6JrD.js";import"./useFieldComponent-8fOA-m-u.js";import"./useMakeFocusable-C9mVrmgt.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";import"./dynamic-DKw0AuDc.js";import"./useRef-fd8U2Hk2.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./browser-B5VZQlUE.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./ButtonView-BKjPbsQ0.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
