import{r as g,j as r}from"./iframe-Bz3NPU1o.js";import{R as t}from"./Rating-BKzOpYZq.js";import{L as l}from"./Label-DJFgm5M0.js";import{F as R}from"./FieldError-fbbECv40.js";import{u as h,F as b,t as F}from"./ResetButton-C6u6UNu5.js";import{B as f}from"./Button-DmREI3b0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Cqqx4tMU.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./remote-D_M7roLC.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./context-pgk2HPHJ.js";import"./RadioGroup-CM-Faw9J.js";import"./utils-DuUJF5nC.js";import"./FieldError-BDAUq_c5.js";import"./Text-ClD1r8b1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DrqAye7f.js";import"./useLabel-C5lED9IT.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./SelectionIndicator-DWP2zhMc.js";import"./useFormValidation-itgD5oYf.js";import"./useFocus-DMRfkGw8.js";import"./useFocusRing-BLuP37PT.js";import"./useControlledState-e4YYsLZE.js";import"./FocusScope-Bk96q2B-.js";import"./useFormReset-D4UcXUYp.js";import"./usePress-BmxXpscc.js";import"./useFocusable-DZRtaeEQ.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./useFieldComponent-kW7iCi5m.js";import"./useMakeFocusable-ClUHlkb8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";import"./dynamic-CvekFh9y.js";import"./ActionGroupView-CscudnEo.js";import"./Content-CjcJxOBw.js";import"./Heading-0jGXR_g9.js";import"./Heading-BkR9lkEu.js";import"./RSPContexts-BgkP6bIF.js";import"./Text-ByJancxD.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";import"./ActionGroup-rIPGzSy7.js";import"./getActionGroupSlot--8oaPbEm.js";import"./useStatic-hPs_nES1.js";import"./Modal-BVW6OhrB.js";import"./useOverlayController-BTsOQKJk.js";import"./Overlay-oLKw2upU.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./LoadingSpinner-C6XGp2xl.js";import"./Dialog-DrbZDX-D.js";import"./Button-BMxU8wWi.js";import"./ProgressBar-Dn9Yutju.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Co0kQ8lC.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./Separator-4S0Txhk8.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./ActionBatch-DB6HM48H.js";import"./ButtonView-B1T1gpd9.js";import"./Flex-BZRK7zof.js";import"./useRef-DVap1TEX.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
