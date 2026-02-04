import{j as r,r as g}from"./iframe-BrRYKFNZ.js";import{R as t}from"./Rating-COV74lfp.js";import{L as l}from"./Label-16dSI6nY.js";import{F as R}from"./FieldError-Ce69irxX.js";import{u as h,F as b,t as F}from"./ResetButton-B0FIkwa9.js";import{B as f}from"./Button-C60cqGfK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BeyOYKIy.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./index--DYCSdQe.js";import"./remote-CSM401Gb.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./RadioGroup-C50x5PpS.js";import"./utils-B1YhIU5r.js";import"./FieldError-DMOv5TcV.js";import"./Text-C7DedtDs.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C0F-7ONn.js";import"./useLabel-B8Txg4ii.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./SelectionIndicator-DkMRnaGM.js";import"./useFormValidation-vznVoA4Z.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useControlledState-BbGuTZMM.js";import"./FocusScope-C9Un_YW5.js";import"./useFormReset-9TaX9dD_.js";import"./usePress-fw0Lqzwn.js";import"./useFocusable-NfSEA2Af.js";import"./VisuallyHidden-VjzJwiBh.js";import"./useFieldComponent-D0nvFHA9.js";import"./useMakeFocusable-BtUzaHNU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";import"./dynamic-CVEHQCEx.js";import"./useRef-CwDhitpI.js";import"./Action-D8nw7HFc.js";import"./context-CrKKxYCQ.js";import"./useStatic-CMNgov9B.js";import"./browser-rpb3JyGK.js";import"./getActionGroupSlot-BX1oqOED.js";import"./ButtonView-CpxOXa2e.js";import"./Text-BQhotjr-.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./NumberFormatter-DNR9MAW-.js";const xr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},s={args:{isReadOnly:!0}},n={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},i={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
