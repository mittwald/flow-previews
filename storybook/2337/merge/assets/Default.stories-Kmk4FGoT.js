import{r as g,j as r}from"./iframe-DYssR0ZO.js";import{R as t}from"./Rating-BckW7572.js";import{L as l}from"./Label-D9oETDcN.js";import{F as R}from"./FieldError-BB68CtMB.js";import{u as h,F as b,t as F}from"./ResetButton-C46gT09w.js";import{B as f}from"./Button-DWrm_dbc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BhLXBIfL.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./remote-cHYIdIzb.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./context-CUXiPoRo.js";import"./RadioGroup-CV1jt5Hh.js";import"./utils-C3q1cDFY.js";import"./FieldError-Bq-6FZKj.js";import"./Text-C48KhL8P.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_ZwOWyd.js";import"./useLabel-BksUhJpA.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./SelectionIndicator-02MGjaw1.js";import"./useFormValidation-D1fghWFH.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useControlledState-CDSB3NYp.js";import"./FocusScope-CNZRDNpk.js";import"./useFormReset-CxfaiCUr.js";import"./usePress-xSc99ptM.js";import"./useFocusable-CmCmEjiW.js";import"./VisuallyHidden-B8I9N7kv.js";import"./useFieldComponent-MDeHyLVI.js";import"./useMakeFocusable-Dyv8lb9u.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";import"./dynamic-3BYImiyG.js";import"./ActionGroupView-HsrfXwWr.js";import"./Content-B3-6LeFE.js";import"./Heading-De8T3vTM.js";import"./Heading-CZjnkckI.js";import"./RSPContexts-CDW_96-t.js";import"./Text-S9F4vE2H.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";import"./ActionGroup-R3KZtlTh.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./useStatic-BJkvCPdg.js";import"./Modal-CmAFXMHf.js";import"./useOverlayController-BfbCDLsY.js";import"./Overlay-CBBWFTg2.js";import"./OverlayContextProvider-C4hsr81s.js";import"./LoadingSpinner-lL7MHRW7.js";import"./Dialog-DF_yv1N5.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Cf72_x8q.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./ActionBatch-Cjtwd20r.js";import"./ButtonView-BsRNqhDl.js";import"./Flex-CDdSdzbN.js";import"./useRef-3pdhvvGy.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
