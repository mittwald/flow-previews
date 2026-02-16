import{r as g,j as r}from"./iframe-H3UGI_HB.js";import{R as t}from"./Rating-BoyhzUuM.js";import{L as l}from"./Label-BgH6R3x8.js";import{F as R}from"./FieldError-wcTb1U2C.js";import{u as h,F as b,t as F}from"./ResetButton-CWmPV2A5.js";import{B as f}from"./Button-fzixWt9q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D9BgjB6B.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./remote-uffOWPGy.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./RadioGroup-YarvdxEg.js";import"./utils-DSogMYdc.js";import"./FieldError-Be1mQ-cQ.js";import"./Text-UIHj6j-v.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BGaHvL5t.js";import"./useLabel-CtoVShGG.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./SelectionIndicator-BgUtvt2H.js";import"./useFormValidation-DekRXblw.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./useControlledState-DkMic-Ic.js";import"./FocusScope-DjcW1lzL.js";import"./useFormReset-CtKq0dbr.js";import"./usePress-CSCW4wCL.js";import"./useFocusable-BYwgOLI_.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./useFieldComponent-Bj80Ne3v.js";import"./useMakeFocusable-B7D2LJCK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";import"./dynamic-DBkJoO-a.js";import"./ActionGroupView-BZm8MaS_.js";import"./Content-DCXa1KEI.js";import"./Heading-F7Cj8meE.js";import"./Heading-CBpf9z-K.js";import"./RSPContexts-BrswSFX-.js";import"./Text-B0lwY8q7.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./ActionGroup-DUi3fLFY.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./useStatic-CxHSWaOd.js";import"./Modal-CfSIm2YK.js";import"./Overlay-B-ohzPPh.js";import"./useOverlayController-3aktaPy5.js";import"./OverlayContextProvider-BiL0j1tu.js";import"./LoadingSpinner-r6z_bU0O.js";import"./Dialog-DKMSACkI.js";import"./Button-5W_fyVDJ.js";import"./ProgressBar-Diyn8Lqp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-C-E8ydRe.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./ActionBatch-TsHiTfcO.js";import"./ButtonView-DND7dytH.js";import"./Flex-BcmdNa7O.js";import"./useRef-Cvv3Klvq.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
