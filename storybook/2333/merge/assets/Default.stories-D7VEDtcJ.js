import{r as g,j as r}from"./iframe-DQkRMfo_.js";import{R as t}from"./Rating-v4LmPJgq.js";import{L as l}from"./Label-CITwA187.js";import{F as R}from"./FieldError-Bk57uQQs.js";import{u as h,F as b,t as F}from"./ResetButton-CYoqNksw.js";import{B as f}from"./Button-CTuc7Sb1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D2qqMRrO.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./remote-CkmXCgJk.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./RadioGroup-DNHibUjJ.js";import"./utils-Bfb5K-41.js";import"./FieldError-BDV0g7vQ.js";import"./Text-BXxFgtol.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DMHoM5vs.js";import"./useLabel-BKmqgaQh.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./SelectionIndicator-D4WNQsp1.js";import"./useFormValidation-Baae3HaH.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useControlledState-CA4wGiI1.js";import"./FocusScope-DAhxUr4_.js";import"./useFormReset-CbTvEeV3.js";import"./usePress-D8-KGEPi.js";import"./useFocusable-BWtjl4YZ.js";import"./VisuallyHidden-CreEQc-P.js";import"./useFieldComponent-DKGKIVkH.js";import"./useMakeFocusable-DViAzEe9.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";import"./dynamic-Bf6rAVHb.js";import"./ActionGroupView-3Ij1E1q5.js";import"./Content-o4sDFduR.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./RSPContexts-Bk8qKDL5.js";import"./Text-DZXogYJp.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";import"./ActionGroup-CsHM66H4.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./useStatic-D2wW9JFL.js";import"./Modal-CJ5SZ1IH.js";import"./useOverlayController-CkVtRdpi.js";import"./Overlay-Z1E506pH.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./LoadingSpinner-BfuFQdyU.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CqKSMCIB.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./ActionBatch-CnbeSwOL.js";import"./ButtonView-CdT4dZVW.js";import"./Flex-DdCAiEkA.js";import"./useRef-D8jPCy5Y.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
