import{j as r,r as g}from"./iframe-CdVpWnc8.js";import{R as t}from"./Rating-CGYPKxPR.js";import{L as l}from"./Label-CQQzXuOB.js";import{F as R}from"./FieldError-0fRgmDO9.js";import{u as h,F as b,t as F}from"./ResetButton-CR4d1ryI.js";import{B as f}from"./Button-BYd_Eo9F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Ba9_xFUh.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./remote-BheCwFS8.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./RadioGroup-BHMyij67.js";import"./utils-ClIic5nH.js";import"./FieldError-U_T6R5BY.js";import"./Text-DmePsxpx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BAj6LeSM.js";import"./useLabel-BKXkodj0.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./SelectionIndicator-DTqsITpO.js";import"./useFormValidation-5isdk9bY.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useControlledState-B7ztCH5k.js";import"./FocusScope-D5Cgd53Y.js";import"./useFormReset-D5EHipFr.js";import"./usePress-CCAUNqmr.js";import"./useFocusable-CzSEJZTE.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./useFieldComponent-pH8UQhzW.js";import"./useMakeFocusable-DGHqaO07.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./dynamic-Dpbpwd3I.js";import"./useRef-DpTmSntJ.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./browser-CWGq_9Zm.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./ButtonView-TCVIqSjz.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
