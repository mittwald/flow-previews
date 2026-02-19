import{r as g,j as r}from"./iframe-je41IZNf.js";import{R as t}from"./Rating-BA6cJzHs.js";import{L as l}from"./Label--ERuqbAg.js";import{F as R}from"./FieldError-BATB6zBo.js";import{u as h,F as b,t as F}from"./ResetButton-C7YuCwWl.js";import{B as f}from"./Button-CKqcv5FO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bnxn-M7Y.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./remote-CVh73cse.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./RadioGroup-CihT0YOu.js";import"./utils-Q4wA2zXG.js";import"./FieldError-MnbTPawu.js";import"./Text-DidYm6nP.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D8X7JUv8.js";import"./useLabel-_SRIQyLy.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./SelectionIndicator-DrqbtAz1.js";import"./useFormValidation-DLIHXRbT.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useControlledState-Behjjcy6.js";import"./FocusScope-ClZvkh4F.js";import"./useFormReset-BAaFkhxA.js";import"./usePress-BcrJWT2n.js";import"./useFocusable-Ldg9iOHo.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./useFieldComponent-b8-F_AVa.js";import"./useMakeFocusable-C5FiKgHP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";import"./dynamic-BrtagzWP.js";import"./ActionGroupView-CNDRVPWd.js";import"./Content-CI6m-d_y.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./RSPContexts-u6z1ubPU.js";import"./Text-BC-RZ7k4.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./ActionGroup-rchol9jY.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./useStatic-DB-qeJ4V.js";import"./Modal-CPZv7ujk.js";import"./useOverlayController-BUOVgKeB.js";import"./Overlay-B0VzEzJb.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./LoadingSpinner-DltTQrQc.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-7pXV33mr.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./ActionBatch-ChKsIRTP.js";import"./ButtonView-Dl5Y4ZWm.js";import"./Flex--JtxxRJ0.js";import"./useRef-DwDjpRrm.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
