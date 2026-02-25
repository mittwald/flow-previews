import{r as g,j as r}from"./iframe-DCel2PhG.js";import{R as t}from"./Rating-B_QIJrO2.js";import{L as l}from"./Label-DVkF56bm.js";import{F as R}from"./FieldError-DI0hFked.js";import{u as h,F as b,t as F}from"./ResetButton-Bo6dOnRX.js";import{B as f}from"./Button-CjhaH8vt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CNMqfC0c.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./index-DcvCSlSd.js";import"./remote-MfAOzJwE.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./RadioGroup-2lRcBj6e.js";import"./utils-jFfJrK0I.js";import"./FieldError-QICB5hyW.js";import"./Text-H5k4jR7L.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BsISnRaP.js";import"./useLabel-V0mABmwM.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./SelectionIndicator-DYHfPyq2.js";import"./useFormValidation-CVEw0jVb.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useControlledState-uXSCouXp.js";import"./FocusScope-BrLtMtFa.js";import"./useFormReset-DvzBERJE.js";import"./usePress-l6QeQysM.js";import"./useFocusable-CF_X-2Wu.js";import"./VisuallyHidden-giqV-lwH.js";import"./useFieldComponent-CWMmv0d5.js";import"./useMakeFocusable-MNtgtyJ2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";import"./dynamic-CoRoJ1gY.js";import"./ActionGroupView-4YYVwVM7.js";import"./Content-B1u41BWn.js";import"./Heading-DPAdBgTw.js";import"./Heading-Cs7GlIOt.js";import"./RSPContexts-BWRH8UQz.js";import"./Text-CfcNN3C1.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./ActionGroup-BLs0BWGb.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./useStatic-Gj7JsFzP.js";import"./Modal-V5k8QPuM.js";import"./useOverlayController-BAgKybrq.js";import"./Overlay-LFamQv73.js";import"./OverlayContextProvider-BfHmVY35.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./Dialog-BnrJ3EGg.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./ActionBatch-BNnkW8Wa.js";import"./ButtonView--o7XYYP5.js";import"./Flex-tHl6Xyli.js";import"./useRef-C3FTlCPC.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
