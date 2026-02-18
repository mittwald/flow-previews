import{r as g,j as r}from"./iframe-BDFzVZbC.js";import{R as t}from"./Rating-B6GfKizR.js";import{L as l}from"./Label-LyL-GXC8.js";import{F as R}from"./FieldError-BgOx5Pdv.js";import{u as h,F as b,t as F}from"./ResetButton-D1K9FtBE.js";import{B as f}from"./Button-C7bK1-uf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-aDXn3__r.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./remote-C6miTdu_.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./RadioGroup-CXYIqULX.js";import"./utils-DRqoG6OW.js";import"./FieldError-4UEPVceR.js";import"./Text-5CWdwzmY.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-MSkU5_70.js";import"./useLabel-D8fV0T39.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./SelectionIndicator-S2R90Jld.js";import"./useFormValidation-CtBJZQwA.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useControlledState-CxpqxoPE.js";import"./FocusScope-Djn4bjzo.js";import"./useFormReset-CQpdwD5T.js";import"./usePress-DJEnnjGh.js";import"./useFocusable-nLh15Hem.js";import"./VisuallyHidden-DL89d0r2.js";import"./useFieldComponent-DJTCy7fJ.js";import"./useMakeFocusable-DKwQY4Iy.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";import"./dynamic-78IPl_xO.js";import"./ActionGroupView-Dsksq701.js";import"./Content-w-_DoZqM.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./RSPContexts-CK_xwACt.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./ActionGroup-DXoxOsLZ.js";import"./getActionGroupSlot-DJwqOljU.js";import"./useStatic-DKe6XZbW.js";import"./Modal-Bz96LWDI.js";import"./useOverlayController-Bb-vbpCY.js";import"./Overlay-DkdcKSQA.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./LoadingSpinner-CPBqqCdo.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BhJrUQVC.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./ActionBatch-dkJpCMmD.js";import"./ButtonView-Co3oQwB4.js";import"./Flex-DbvEsOwD.js";import"./useRef-DOSvcyqg.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
