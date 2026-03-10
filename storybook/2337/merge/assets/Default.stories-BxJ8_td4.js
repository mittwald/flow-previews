import{r as g,j as r}from"./iframe-BJFPIndf.js";import{R as t}from"./Rating-C7ejFiYC.js";import{L as l}from"./Label-CVJICKuL.js";import{F as R}from"./FieldError-CerVitTZ.js";import{u as h,F as b,t as F}from"./FormRootError-Dqv401TK.js";import{B as f}from"./Button-CMLIz8EV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BUqpCqdO.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./remote-BMkebNs4.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./RadioGroup-B06-rOfa.js";import"./utils-WT8FFEB4.js";import"./FieldError-Coj9-PqS.js";import"./Text-D3Y_kc1g.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-x5xxOUHd.js";import"./useLabel-lMRjDAnL.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./useFormValidation-BhmC515N.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useControlledState-DywfuSZK.js";import"./FocusScope-shVJmAPD.js";import"./useFormReset-CwfjSagb.js";import"./usePress-BHGoooY9.js";import"./useFocusable-DGQMpBVb.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./useFieldComponent-gU-XMME4.js";import"./useMakeFocusable-DkJzSv9O.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";import"./dynamic-Ds5yn-UC.js";import"./ActionGroupView-Dw8RZYa_.js";import"./Content-Dz9K6tbl.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./RSPContexts-BXfCPyGV.js";import"./Text-CGF68X8s.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./ActionGroup-DdfrGWlw.js";import"./getActionGroupSlot-ggari8la.js";import"./useStatic-BUxz8dmg.js";import"./Modal-BGgt1ria.js";import"./useOverlayController-BY9uU74J.js";import"./Overlay-BWkVMZMt.js";import"./OverlayContextProvider-BuTLd76h.js";import"./LoadingSpinner-mc2sXUEG.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BSkSIfQ7.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./ActionBatch-91iU7Ul_.js";import"./ButtonView-BZflCgnt.js";import"./Flex-7kPLhUeS.js";import"./useRef-BdfxdyUk.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
