import{r as g,j as r}from"./iframe-JHVlk64D.js";import{R as t}from"./Rating-C0rtkI2_.js";import{L as l}from"./Label-BVSjd_Ef.js";import{F as R}from"./FieldError-DkKHEf-8.js";import{u as h,F as b,t as F}from"./FormRootError-D0QsKVKu.js";import{B as f}from"./Button-BViHWx5D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D57fWT31.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./remote-CdnDmctD.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./RadioGroup-Ds_fDZu1.js";import"./utils-D9FbIhNL.js";import"./FieldError-CB6gvg8S.js";import"./Text-BPDMqDL5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C3MOdK6R.js";import"./useLabel-9l7svqw5.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./SelectionIndicator-D6El124b.js";import"./useFormValidation-BHVZgCg5.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useControlledState-BK0dEcU9.js";import"./FocusScope-D4b0Moap.js";import"./useFormReset-CuVjUJoL.js";import"./usePress-Dt-0MkOU.js";import"./useFocusable-vxzxlCI8.js";import"./VisuallyHidden-CJBb4HxH.js";import"./useFieldComponent-Dm_EHwx7.js";import"./useMakeFocusable-CHBR9WeV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./dynamic-B8NPXIjt.js";import"./ActionGroupView-Bc17c7sh.js";import"./Content-BX3eZD3n.js";import"./Heading-B5Pon5qA.js";import"./Heading-DWwskDgI.js";import"./RSPContexts-BaSES6Qq.js";import"./Text-D35H-2yr.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./ActionGroup-DZgnsmND.js";import"./getActionGroupSlot-DipsrrNF.js";import"./useStatic-BkeDEY_1.js";import"./Modal-Dd9stJQr.js";import"./useOverlayController-B_kJVQUM.js";import"./Overlay-KmyQfYDW.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./LoadingSpinner-Bl1fRewj.js";import"./Dialog-DIqACfnD.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DI9sbb4v.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./ActionBatch-1qW2-LTl.js";import"./ButtonView-BHsHy_WH.js";import"./Flex-CNTnvpl9.js";import"./useRef-m6O5GTv_.js";const wr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,Ar as __namedExportsOrder,wr as default};
