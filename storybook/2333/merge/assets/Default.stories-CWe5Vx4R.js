import{r as g,j as r}from"./iframe-ByHSJ7Zj.js";import{R as t}from"./Rating-DM2kIBpn.js";import{L as l}from"./Label-tcy2V_mA.js";import{F as R}from"./FieldError-C1ELgHYl.js";import{u as h,F as b,t as F}from"./ResetButton-BIryrxd9.js";import{B as f}from"./Button-DRqw54Mf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-D57HRYjk.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./index-Bsvsb8kg.js";import"./remote-NqjFlPNq.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./RadioGroup-DPNxmqhB.js";import"./utils-AuVRPQNE.js";import"./FieldError-N78nigrI.js";import"./Text-CMdjYF8F.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B6nfDOYR.js";import"./useLabel-DwarV1Dq.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./useFormValidation-BGcU6QC0.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useControlledState-CZXI0X0f.js";import"./FocusScope-CdPzSUjP.js";import"./useFormReset-BeZmi33v.js";import"./usePress-53w3WrUq.js";import"./useFocusable-CTHcGGNa.js";import"./VisuallyHidden-DjUeNVhy.js";import"./useFieldComponent-CBB8cMnJ.js";import"./useMakeFocusable-DW7PayyY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./dynamic-C8-Mz4LM.js";import"./ActionGroupView-WZNbE7iy.js";import"./Content-CmPZ5biX.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./ActionGroup-gRZ2yxB4.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./useStatic-DqDfuSHj.js";import"./Modal-CSnqDHAV.js";import"./useOverlayController-ClfDXpmr.js";import"./Overlay-BXECwhfH.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./Dialog-Bv6y7U-F.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-y5FFWgxm.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./ActionBatch-DAYGGFfY.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./useRef-C1sK2iwB.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
