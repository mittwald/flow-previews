import{r as g,j as r}from"./iframe-Bas3a7fO.js";import{R as t}from"./Rating-BWS5wQH5.js";import{L as l}from"./Label-QWyaEZ02.js";import{F as R}from"./FieldError-B_qklWB_.js";import{u as h,F as b,t as F}from"./ResetButton-Cd-wp-Vd.js";import{B as f}from"./Button-CCev3q47.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-9FMOeqa7.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./remote-CQRN9i7s.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./RadioGroup-B2fQSxI2.js";import"./utils-eswKxOcw.js";import"./FieldError-CYd-7Lc_.js";import"./Text-Di9JAG-3.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C6AVvH4S.js";import"./useLabel-AX-jpDlX.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./SelectionIndicator-C1UYqe1w.js";import"./useFormValidation-nso2YHkv.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useControlledState-DnKF_srQ.js";import"./FocusScope-yn2ZelXu.js";import"./useFormReset-C6M9OYlp.js";import"./usePress-BXALpkIT.js";import"./useFocusable-Dz64TW3s.js";import"./VisuallyHidden-DwReVjRm.js";import"./useFieldComponent-CHbV_zSr.js";import"./useMakeFocusable-B_WH9QDK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./dynamic-CtBYvx23.js";import"./ActionGroupView-BoEMuKNt.js";import"./Content-jsO27phX.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./RSPContexts-BxdWTHUz.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./ActionGroup-D7GnjScM.js";import"./getActionGroupSlot-DxyevWSt.js";import"./useStatic-LTDZm_8J.js";import"./Modal-CZas3fxE.js";import"./useOverlayController-Bne___mw.js";import"./Overlay-CKC1BDXC.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./LoadingSpinner-CaJGFcVk.js";import"./Dialog-BsJqG9mx.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-B1y4rBya.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./ActionBatch-Ctg3LC0z.js";import"./ButtonView-fFevQyKz.js";import"./Flex-BYJmVhKw.js";import"./useRef-TqOxF1Gm.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
