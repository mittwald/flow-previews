import{r as g,j as r}from"./iframe-CdHyQgwh.js";import{R as t}from"./Rating-8zM06CBx.js";import{L as l}from"./Label-C70YwB90.js";import{F as R}from"./FieldError-BmlEdUcT.js";import{u as h,F as b,t as F}from"./ResetButton-DIOtYJtW.js";import{B as f}from"./Button-B83uT_W5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-DGc3SgEa.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./remote-BRyh19SP.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./context--lHaHpmz.js";import"./RadioGroup-DaVDAY5g.js";import"./utils-B0AChKxF.js";import"./FieldError-BTLVyZmC.js";import"./Text-CFtcNM5e.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BHZ6w-7V.js";import"./useLabel-DXx1BftH.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./SelectionIndicator-DV4fwApE.js";import"./useFormValidation-8M-A-L7s.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useControlledState-D2jLiTCX.js";import"./FocusScope-OuWnR4TG.js";import"./useFormReset-D88R_CF2.js";import"./usePress-DIa0iaS-.js";import"./useFocusable-CIZyv2_u.js";import"./VisuallyHidden-U7btBlyO.js";import"./useFieldComponent-t62DY9AA.js";import"./useMakeFocusable-0wkkx8l8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";import"./dynamic-CJo41kua.js";import"./ActionGroupView-CSh8Io46.js";import"./Content-CeVPKDmn.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./RSPContexts-DthjkPm0.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./ActionGroup-CFPYc31d.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./useStatic-BBvdmwt_.js";import"./Modal-DZut7RYA.js";import"./Overlay-BZoP2uMy.js";import"./useOverlayController-Cw4NEVT3.js";import"./OverlayContextProvider-CjArtki4.js";import"./LoadingSpinner-DJPu7RL-.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./ProgressBar-DEPx6SkE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Lhpnfcsg.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./ActionBatch-DZLzYfk2.js";import"./ButtonView-D4pWD16C.js";import"./Flex-B7-1TfDw.js";import"./useRef-BBhsdY2o.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
