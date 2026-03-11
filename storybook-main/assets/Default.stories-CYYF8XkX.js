import{r as g,j as r}from"./iframe-BLisfkW1.js";import{R as t}from"./Rating-BTQ0E7oW.js";import{L as l}from"./Label-C4q0QTf_.js";import{F as R}from"./FieldError-ClH5zNHK.js";import{u as h,F as b,t as F}from"./FormRootError-D01m8GBs.js";import{B as f}from"./Button-BfYq4-Jl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Chxh05Fa.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./remote-fMZF2a4s.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./RadioGroup-B_bpkLLG.js";import"./utils-B2KexK2G.js";import"./FieldError-BmP7KZUf.js";import"./Text-CMQTkDl6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-mlAsayVr.js";import"./useLabel-DktisoZ5.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./SelectionIndicator-DkROylNb.js";import"./useFormValidation-BvwbNbVP.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useControlledState-BzKS6zrg.js";import"./FocusScope-CH3eRbFP.js";import"./useFormReset-fweVV-SC.js";import"./usePress-Bt2uh0Mh.js";import"./useFocusable-2bJXkpaN.js";import"./VisuallyHidden-y8IU71vp.js";import"./useFieldComponent-DG2srt-t.js";import"./useMakeFocusable-Coahnksm.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";import"./dynamic-B3kpKjwM.js";import"./ActionGroupView-CzzYWmgf.js";import"./Content-B4EEZXPN.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./RSPContexts-C6v4G0P9.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./ActionGroup-BXQPUWqY.js";import"./getActionGroupSlot-JAeF61ot.js";import"./useStatic-Cf1wupkY.js";import"./Modal-C3_EO7YW.js";import"./useOverlayController-UaqgI9Sz.js";import"./Overlay-3FwDNFry.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CazCWSIw.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./ActionBatch-Ba3fo7J6.js";import"./ButtonView-DQ0cot0U.js";import"./Flex-CtHT3-Wb.js";import"./useRef-DQg9ai21.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
