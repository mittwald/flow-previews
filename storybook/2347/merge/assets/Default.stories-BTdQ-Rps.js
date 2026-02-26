import{r as g,j as r}from"./iframe-teIxY4wP.js";import{R as t}from"./Rating-Dkh1Y19h.js";import{L as l}from"./Label-CKh72PTo.js";import{F as R}from"./FieldError-4X4kCiGy.js";import{u as h,F as b,t as F}from"./ResetButton-BGJ4soxO.js";import{B as f}from"./Button-CCmGuoae.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-C8c-iA3p.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./remote-DC3yMzFm.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./context-Bkxu1haQ.js";import"./RadioGroup-BkpJU9vX.js";import"./utils-C8wUhSun.js";import"./FieldError-HPfFKZ-Z.js";import"./Text-BEd6-Qqe.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BrsNngNz.js";import"./useLabel-BwGc14jy.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./useFormValidation-CRVUVzjp.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useControlledState-Dnjkc9fO.js";import"./FocusScope-Crjq_ymp.js";import"./useFormReset-DcLCq2Kv.js";import"./usePress-Znh85jsw.js";import"./useFocusable-C4kMCM88.js";import"./VisuallyHidden-BEOGf6u-.js";import"./useFieldComponent-DaZL5efl.js";import"./useMakeFocusable-DRoIWUXq.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B6Az6kDS.js";import"./AlertIcon-nbGMee0S.js";import"./dynamic-Bd0vnJCs.js";import"./ActionGroupView-CAxVNdho.js";import"./Content-C4FtWXhl.js";import"./Heading-BcZ49Txx.js";import"./Heading-CqSJbJuk.js";import"./RSPContexts-DVypfZug.js";import"./Text-CB74-0Ir.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./ActionGroup-CZ4gZfnQ.js";import"./getActionGroupSlot-BwsAD19l.js";import"./useStatic-JzrpAx77.js";import"./Modal-asH2HsR2.js";import"./useOverlayController-2V9dFGfh.js";import"./Overlay-C9X8JugR.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./LoadingSpinner-CKqfIoaL.js";import"./Dialog-CPTLkUM-.js";import"./Button-DPcEERaP.js";import"./ProgressBar-uiVLSJyQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BnOVUBMe.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./ActionBatch-BzoAcrhu.js";import"./ButtonView-JoXTWy5r.js";import"./Flex-B1uMy55R.js";import"./useRef-DqhFWaAg.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
