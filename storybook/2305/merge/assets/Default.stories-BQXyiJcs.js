import{j as r,r as g}from"./iframe-nlVW-CPZ.js";import{R as t}from"./Rating-B98kAqJ1.js";import{L as l}from"./Label-BuWy1qrT.js";import{F as R}from"./FieldError-C-5FG0Dy.js";import{u as h,F as b,t as F}from"./ResetButton-C0RVFwP1.js";import{B as f}from"./Button-_Sn69Jgj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-VZ7ITFqu.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./remote-D3GclicH.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./RadioGroup-D37vSQ07.js";import"./utils-CyuEFqip.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./SelectionIndicator-DdhOYUUY.js";import"./useFormValidation-DqSMo-uw.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./FocusScope-DihhZg9P.js";import"./useFormReset-J8eUPjf8.js";import"./usePress-BSHzPeES.js";import"./useFocusable-DHxyzauV.js";import"./VisuallyHidden-44O2XzGD.js";import"./useFieldComponent-DOzg870F.js";import"./useMakeFocusable-CxUrmYH6.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./dynamic-Dsm5lbml.js";import"./useRef-CfQO_nnJ.js";import"./Action-VhJyCQWd.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./browser-BoEfPalF.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./ButtonView-CLlJ09F8.js";import"./Text-BzuDjaz9.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
