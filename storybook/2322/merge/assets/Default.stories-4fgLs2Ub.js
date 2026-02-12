import{r as g,j as r}from"./iframe-BECefjM4.js";import{R as t}from"./Rating-o7OlLMCJ.js";import{L as l}from"./Label-CVvbUjW4.js";import{F as R}from"./FieldError-B21MiKyw.js";import{u as h,F as b,t as F}from"./ResetButton-C-RI2y7J.js";import{B as f}from"./Button-DAjxqCNq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-CvVn1QxU.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./remote-CqI4D0us.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./RadioGroup-DKnRPMb8.js";import"./utils-bqUpXLHN.js";import"./FieldError-8R1qsZQS.js";import"./Text-IrzRAzMs.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-FdseNRzi.js";import"./useLabel-d0BVjP-J.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./SelectionIndicator-B2vofSgQ.js";import"./useFormValidation-I8j-SbQp.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useControlledState-2Tdfwl5E.js";import"./FocusScope-CjCXh94P.js";import"./useFormReset-CDquwT_C.js";import"./usePress-427CihAL.js";import"./useFocusable-DTBBh1VF.js";import"./VisuallyHidden-GWiC-wFe.js";import"./useFieldComponent-B5iNz-5m.js";import"./useMakeFocusable-45bGOva1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./dynamic-DJ76M0aZ.js";import"./ActionGroupView-DqUzS8K9.js";import"./Content-LSOtaIIS.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./RSPContexts-C61Ijawi.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./ActionGroup-p2GKrbTu.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./useStatic-Bcu2QKMg.js";import"./Modal-BdrjL7gW.js";import"./Overlay-yXgmDyXI.js";import"./useOverlayController-7vnF_84u.js";import"./context-mnhTcWwX.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./LoadingSpinner-DXxHNnrx.js";import"./Dialog-BvIZXNXz.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-C6gZr2kK.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./ActionBatch-DZRJQ0Jr.js";import"./ButtonView-C56jVANI.js";import"./Flex-BjbASY3g.js";import"./useRef-NKl_qwib.js";const wr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,Ar as __namedExportsOrder,wr as default};
