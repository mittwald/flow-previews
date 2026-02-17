import{r as g,j as r}from"./iframe-DU1OTSEW.js";import{R as t}from"./Rating-CnO0tl5q.js";import{L as l}from"./Label-BFsMAETu.js";import{F as R}from"./FieldError-lAQ6GllT.js";import{u as h,F as b,t as F}from"./ResetButton-BsyJpF7l.js";import{B as f}from"./Button-C02FBbwW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BOLd-bsg.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./index-Ben_k6_D.js";import"./remote-C4J6eDzq.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./RadioGroup-fsZuLWP9.js";import"./utils-Dj7KEBV3.js";import"./FieldError-C-1FXxCh.js";import"./Text-iBzBCpEi.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFVlj26J.js";import"./useLabel-B3DB9qnR.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./SelectionIndicator-BBXAzCHo.js";import"./useFormValidation-Bnl6yMKM.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useControlledState-C4NYpY3o.js";import"./FocusScope-BR4Z_k_s.js";import"./useFormReset-B6aj4tVR.js";import"./usePress-DCIqPyrL.js";import"./useFocusable-XjJjjkQd.js";import"./VisuallyHidden---d_BDnt.js";import"./useFieldComponent-DAmXFBUF.js";import"./useMakeFocusable-7nPSjM8m.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";import"./dynamic-BTXPuCk3.js";import"./ActionGroupView-ZPgNa0UK.js";import"./Content-BXIdNakr.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./Text-BlwSaqXM.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./ActionGroup-BZNfB_OW.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./useStatic-B4QbuKZS.js";import"./Modal-D00g1B7I.js";import"./useOverlayController-CN_E_UXR.js";import"./Overlay-DxVOVPlK.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./Dialog-rIHNVDTB.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Bh5zDL_J.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./ActionBatch-BeODW9YZ.js";import"./ButtonView-B-0Eh3g3.js";import"./Flex-hLK_L7IW.js";import"./useRef-BOtMNj3F.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
