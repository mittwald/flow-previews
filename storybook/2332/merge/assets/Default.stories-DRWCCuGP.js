import{r as g,j as r}from"./iframe-PZSwL5UI.js";import{R as t}from"./Rating-DPdMBSx_.js";import{L as l}from"./Label-DHad4C3T.js";import{F as R}from"./FieldError-DI2vGfZA.js";import{u as h,F as b,t as F}from"./ResetButton-DSe7vvOE.js";import{B as f}from"./Button-Dx8ytIXV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Brl3hUMe.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./remote-mdYu2fN6.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./RadioGroup-DjZYqbnZ.js";import"./utils-lOj21ZD_.js";import"./FieldError-mE8Rrcl-.js";import"./Text-BG-2dzKS.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BblXnLIP.js";import"./useLabel-N6JTHu_p.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./SelectionIndicator-CKNEQhdD.js";import"./useFormValidation-BFZ87yhB.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useControlledState-DIXXzqms.js";import"./FocusScope-BkNZ8LpG.js";import"./useFormReset-DtrcblTn.js";import"./usePress-B1ZCcdw8.js";import"./useFocusable-B4WRTgkS.js";import"./VisuallyHidden-UxX7HzEl.js";import"./useFieldComponent-BUmkKSsK.js";import"./useMakeFocusable-DMtEky_M.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";import"./dynamic-DDVyub9n.js";import"./ActionGroupView-CIbffeee.js";import"./Content-DRuiMhgn.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./ActionGroup-CuC620Qy.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./useStatic-Bw6k9Sf5.js";import"./Modal-C7FSQX3Q.js";import"./useOverlayController-BVZAJrcY.js";import"./Overlay-DZSkN4bv.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./LoadingSpinner-kHlSwNnH.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Cvgp3jMH.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./ActionBatch-KmZgQ_FO.js";import"./ButtonView-XkIAqQ4n.js";import"./Flex-Bs1WbtgB.js";import"./useRef-BIiAMvRM.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
