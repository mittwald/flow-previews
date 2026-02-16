import{r as g,j as r}from"./iframe-C5ZTNo7B.js";import{R as t}from"./Rating-CV7OQjKa.js";import{L as l}from"./Label-D_0GeMuu.js";import{F as R}from"./FieldError-BDB9mSsz.js";import{u as h,F as b,t as F}from"./ResetButton-BsxvTmJM.js";import{B as f}from"./Button-CTD3uiWd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bhk_rtuP.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./remote-DVpXA9eO.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./RadioGroup-BUb7iHoA.js";import"./utils-BuDA3Ujk.js";import"./FieldError-CU71BOGK.js";import"./Text-DfHOPDAf.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CMpIiu9M.js";import"./useLabel-BfXWSkVN.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./useFormValidation-CtRrQmcu.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./useControlledState-e_mWhKHk.js";import"./FocusScope-PkAgaAiM.js";import"./useFormReset-D7awHB0C.js";import"./usePress-ef-k5VSc.js";import"./useFocusable-DlWx3Zdp.js";import"./VisuallyHidden-eGwjz06V.js";import"./useFieldComponent-hFC9tXxl.js";import"./useMakeFocusable-D4exx3u2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";import"./dynamic-Bw3_nZ9y.js";import"./ActionGroupView-BDcHe3GE.js";import"./Content-CH2yQGd8.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./RSPContexts-BwPNB4Pl.js";import"./Text-vc01bOb1.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./ActionGroup-Dj8ge-dL.js";import"./getActionGroupSlot-D914C5WA.js";import"./useStatic-yr3GM-AX.js";import"./Modal-DnrTq3-t.js";import"./Overlay-DtDYWi_A.js";import"./useOverlayController-DKmEbncM.js";import"./OverlayContextProvider-CtLnis9C.js";import"./LoadingSpinner-DA9Opfj3.js";import"./Dialog-n3Xabcyo.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-F8uV4qkU.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./ActionBatch-DQnznSVa.js";import"./ButtonView-DEthqiLB.js";import"./Flex-CwoZU0pA.js";import"./useRef-BCHa9Y83.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
