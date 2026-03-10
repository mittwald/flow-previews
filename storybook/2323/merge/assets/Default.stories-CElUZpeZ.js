import{r as g,j as r}from"./iframe-EfPcFfHz.js";import{R as t}from"./Rating-BZf_Ip92.js";import{L as l}from"./Label-DkribH7U.js";import{F as R}from"./FieldError-Bm6xTrGY.js";import{u as h,F as b,t as F}from"./FormRootError-Chgvna3W.js";import{B as f}from"./Button-wFzIQtGi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-73LpV07E.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./index-BhGEUnhH.js";import"./remote-D3-8ROh8.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./context-kn7lEdrW.js";import"./RadioGroup-BEiLyLlk.js";import"./utils-Cnkpfm_P.js";import"./FieldError-DGjeovc7.js";import"./Text-B4oHPq8R.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DLgE0tCZ.js";import"./useLabel-DunHH7R3.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./SelectionIndicator-CeAI6QPx.js";import"./useFormValidation-DvOB0MQU.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useControlledState-WqoJm4pI.js";import"./FocusScope-CSvsVBha.js";import"./useFormReset-CDR6jl2x.js";import"./usePress-CzmE2CoS.js";import"./useFocusable-CT_qKlvn.js";import"./VisuallyHidden-CH2GsO1v.js";import"./useFieldComponent-BpgXbjM-.js";import"./useMakeFocusable-T9aRVjyn.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";import"./dynamic-BKd_XzPu.js";import"./Overlay-BiUskXOC.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./LoadingSpinner-5WRu_N9f.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./Separator-DgmB0SGY.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./ActionGroupView-HLt9OMBJ.js";import"./Content-CoxcjBGV.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./ActionGroup-Lxqbjb-D.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./Modal-Lm05iuR_.js";import"./ActionBatch-DG-IZD13.js";import"./ButtonView-BN2-gVKk.js";import"./Flex-DI6XMfKS.js";import"./useRef-ClwNZ3BN.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
