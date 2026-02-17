import{r as g,j as r}from"./iframe-DwsGXJVG.js";import{R as t}from"./Rating-DvbvKwJC.js";import{L as l}from"./Label-DOR8D5QK.js";import{F as R}from"./FieldError-BPT_klMb.js";import{u as h,F as b,t as F}from"./ResetButton-DNLz9h87.js";import{B as f}from"./Button-CqL_vLUu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Ci9l-8b2.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./remote-Co6v5gQ1.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./RadioGroup-Bt3isvx9.js";import"./utils-DRn9wprx.js";import"./FieldError-BZQRredP.js";import"./Text-_i5SHi6c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BVLfeGH7.js";import"./useLabel-DGPoQV-x.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./SelectionIndicator-BqSVIa4a.js";import"./useFormValidation-Bdpbh0WL.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useControlledState-CRB4bW25.js";import"./FocusScope-4Fd3tZfM.js";import"./useFormReset-hk4HwqV2.js";import"./usePress-CckbZpi5.js";import"./useFocusable-s83SGTZ-.js";import"./VisuallyHidden-Fvx90J8z.js";import"./useFieldComponent-BobnjoTA.js";import"./useMakeFocusable-B87Yxjec.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";import"./dynamic-CY6fGUGp.js";import"./ActionGroupView-MmtnTSxu.js";import"./Content-knY6EnXd.js";import"./Heading-BKffDfDn.js";import"./Heading-CsVZ9AEI.js";import"./RSPContexts-CFeGdYTg.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./ActionGroup-DKP4zTXr.js";import"./getActionGroupSlot-BRP57hZk.js";import"./useStatic-BwWlrMEh.js";import"./Modal-BWobx_T-.js";import"./Overlay-BTIksBpa.js";import"./useOverlayController-Bn3a-KRG.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DURPAUST.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./ActionBatch-CjTnBW9C.js";import"./ButtonView-CH2jD_Y9.js";import"./Flex-CPs0qh3k.js";import"./useRef-DR2JPmPu.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
