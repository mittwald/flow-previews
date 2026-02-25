import{r as g,j as r}from"./iframe-DG8PGYI2.js";import{R as t}from"./Rating-DVT_25ha.js";import{L as l}from"./Label-BPpS4vmA.js";import{F as R}from"./FieldError-Cib7Ob9Y.js";import{u as h,F as b,t as F}from"./ResetButton-BMqJhTJD.js";import{B as f}from"./Button-DsdihroW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-SSUZ9dob.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./index-LR7sdXL2.js";import"./remote-DDSPySo3.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./RadioGroup-XzNqd0cQ.js";import"./utils-07AIACoX.js";import"./FieldError-bE1Vz7Na.js";import"./Text-0L-5i7aJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-COtDtsRb.js";import"./useLabel-D3O2Shqb.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./SelectionIndicator-CS3Tqeow.js";import"./useFormValidation-DkNbsHEL.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useControlledState-CbmAXNAC.js";import"./FocusScope-By5yaDFE.js";import"./useFormReset-BIdGIAau.js";import"./usePress-Dy-OAjIk.js";import"./useFocusable-0ogj4vIM.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./useFieldComponent-CBicToer.js";import"./useMakeFocusable-P3bVxZG5.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";import"./dynamic-BkMen_On.js";import"./ActionGroupView-CyN-fLB9.js";import"./Content-CXy-CNoO.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./RSPContexts-DatC1hy5.js";import"./Text-DXfg_t75.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./ActionGroup-CyRYJEmZ.js";import"./getActionGroupSlot-D51i84O1.js";import"./useStatic-BxWRYqBR.js";import"./Modal-D9mRgYws.js";import"./useOverlayController-BzZu7ty6.js";import"./Overlay-BBbCl7H6.js";import"./OverlayContextProvider-DoYhYc18.js";import"./LoadingSpinner-JP8g8ixs.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BCWfoCHK.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./Separator-DxksnpFt.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./ActionBatch-BRiItlo9.js";import"./ButtonView-BM2ZoM3D.js";import"./Flex-zawCEP1d.js";import"./useRef-DIQYbD7f.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
