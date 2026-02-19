import{r as g,j as r}from"./iframe-Cbm1tYQ5.js";import{R as t}from"./Rating-DvksEGDY.js";import{L as l}from"./Label-C1u7fixG.js";import{F as R}from"./FieldError-DdEKXl5v.js";import{u as h,F as b,t as F}from"./ResetButton-CR0iXgtB.js";import{B as f}from"./Button-Cqfz7zcL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-HRESMERf.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./remote-CNywZcFz.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./context-CpUEkiXT.js";import"./RadioGroup-CLF8O-kT.js";import"./utils-CwSfACxU.js";import"./FieldError-b__4rZn4.js";import"./Text-CRfwxtsq.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DE723K-l.js";import"./useLabel-BhJmZsby.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./SelectionIndicator-oJF9tjaE.js";import"./useFormValidation-SL6QRRh_.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useControlledState-CcdBsJdv.js";import"./FocusScope-BGzNCZ_B.js";import"./useFormReset-DovDq4jf.js";import"./usePress-D-cWxohr.js";import"./useFocusable-DfxkJnS0.js";import"./VisuallyHidden--ZEPdGNY.js";import"./useFieldComponent-BRiGBo1N.js";import"./useMakeFocusable-C4XeOx_r.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";import"./dynamic-CgrPgLPo.js";import"./ActionGroupView-C0tm-8ht.js";import"./Content-Bz7pLqo2.js";import"./Heading-DoywAf3I.js";import"./Heading-CJu_lfUD.js";import"./RSPContexts-BN50OY8k.js";import"./Text-K6yu7K7n.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./ActionGroup-DDbBTeyS.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./useStatic-CSSB8BCl.js";import"./Modal-B7ggXlTZ.js";import"./useOverlayController-BSdz9lOP.js";import"./Overlay-Cr8QYrRm.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./LoadingSpinner-CziFUZ0y.js";import"./Dialog-DOWWi4PD.js";import"./Button-DMDpRFJa.js";import"./ProgressBar-BRc7Paog.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DLVTOKg_.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./ActionBatch-CjHdyiP4.js";import"./ButtonView-DnjtrRMk.js";import"./Flex-727o-fn3.js";import"./useRef-lBqR2J42.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
