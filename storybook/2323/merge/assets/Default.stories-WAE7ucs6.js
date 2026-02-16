import{r as g,j as r}from"./iframe-CIhdjqSz.js";import{R as t}from"./Rating-i0YEyz5J.js";import{L as l}from"./Label-DvNJKWaN.js";import{F as R}from"./FieldError-C6Vi3jlh.js";import{u as h,F as b,t as F}from"./ResetButton-BOR4CHdA.js";import{B as f}from"./Button--NFWCTgK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-NrGPSND5.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./remote-C6ukCFNy.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./context-C9Id__Ro.js";import"./RadioGroup-DuWUGd8w.js";import"./utils-3Ll5mTsj.js";import"./FieldError-BrGZX-9W.js";import"./Text-BWZGL9q7.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C-8UFtdt.js";import"./useLabel-wcYinYgg.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./SelectionIndicator-BybBuRuw.js";import"./useFormValidation-kYNpgjw2.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useControlledState-Bhs9bgfq.js";import"./FocusScope-DnRcaDs5.js";import"./useFormReset-CCc0UGFI.js";import"./usePress-BAXbDaCF.js";import"./useFocusable-DArPbii_.js";import"./VisuallyHidden-Szd7uPuS.js";import"./useFieldComponent-BDBEatho.js";import"./useMakeFocusable-UREXot88.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";import"./dynamic-DC2aGj60.js";import"./Overlay-knx40pXC.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./LoadingSpinner-CnQRgWlh.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./Separator-CvRy5z-e.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./ActionGroupView-DErmmX1C.js";import"./Content-C_lJcoxE.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./Text-DgrqnOua.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./ActionGroup-CRpQMoSl.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./Modal-BPdWM4cS.js";import"./ActionBatch-DvjVnKvH.js";import"./ButtonView-DCesTJ_4.js";import"./Flex-JT-R-kzn.js";import"./useRef-ZatrU-r0.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
