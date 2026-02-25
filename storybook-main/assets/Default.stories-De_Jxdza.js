import{r as g,j as r}from"./iframe-CAK8FS83.js";import{R as t}from"./Rating-CTWo17N-.js";import{L as l}from"./Label-B8vv94Ak.js";import{F as R}from"./FieldError-Ijqs7ZUi.js";import{u as h,F as b,t as F}from"./ResetButton-BkxxWY5H.js";import{B as f}from"./Button-itgufTCs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-EFpx-Gs1.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./remote-BiZ00o_J.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./RadioGroup-PYrOjM13.js";import"./utils-th26LVD6.js";import"./FieldError-W7aOon2A.js";import"./Text-BoinRLOA.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CCLCpM-d.js";import"./useLabel-uRe61yXZ.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./SelectionIndicator-D_639S3U.js";import"./useFormValidation-CCAHF_BW.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useControlledState-ik7lpKJV.js";import"./FocusScope-B2Hz6ms7.js";import"./useFormReset-ClNM6Kah.js";import"./usePress-BYhFSapw.js";import"./useFocusable-wkYmEvUK.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./useFieldComponent-DkAI1nDB.js";import"./useMakeFocusable-ClulXj8L.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";import"./dynamic-D8OXR4zz.js";import"./ActionGroupView-CCGUgUS0.js";import"./Content-DIxZ35M2.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./RSPContexts-B_v10Iug.js";import"./Text-DLuRhlhH.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./ActionGroup-DOh7AJi0.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./useStatic-CRQBoMuN.js";import"./Modal-C0YYyFVW.js";import"./useOverlayController-Cgn9MX8W.js";import"./Overlay-oKaaxmZR.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./LoadingSpinner-BC7xHqe0.js";import"./Dialog-Bg78UE4C.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DH2T_qZc.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./ActionBatch-BT7PEprG.js";import"./ButtonView-LoZK7xQ_.js";import"./Flex-CRH3-b1R.js";import"./useRef-CHg-rbUQ.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
