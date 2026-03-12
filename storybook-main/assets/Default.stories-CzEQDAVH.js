import{r as g,j as r}from"./iframe-C8tsaODo.js";import{R as t}from"./Rating-BEFI3MvW.js";import{L as l}from"./Label-1oLHWqvU.js";import{F as R}from"./FieldError-EQJdnOUU.js";import{u as h,F as b,t as F}from"./FormRootError-Ce5cv5RF.js";import{B as f}from"./Button-BxguJBhT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Up7WC4e0.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./remote-Ckar2tK9.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./RadioGroup-0qBdBUwr.js";import"./utils-CdcYI7XL.js";import"./FieldError-DSXMmXMO.js";import"./Text-BkxlIu3p.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ch0mipSV.js";import"./useLabel-oJhcJRxp.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./SelectionIndicator-5GEQvOaX.js";import"./useFormValidation-CZJdaAR2.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useControlledState-CN29789s.js";import"./FocusScope-DFjW_d09.js";import"./useFormReset-BpTKK099.js";import"./usePress-vv50L64r.js";import"./useFocusable-BW2xec3w.js";import"./VisuallyHidden-hgCntKQk.js";import"./useFieldComponent-FgbLRzY4.js";import"./useMakeFocusable-z_gQmx2U.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";import"./dynamic-DA7vjxZL.js";import"./ActionGroupView-DhBOLqQn.js";import"./Content-Cp_HsIUT.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./RSPContexts-DtfJrVYY.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./ActionGroup-CU9s6S-m.js";import"./getActionGroupSlot-C3_vSruP.js";import"./useStatic-jSI8PS8c.js";import"./Modal-BYMO-zFY.js";import"./useOverlayController-Bf797MvO.js";import"./Overlay-BnyG3_RP.js";import"./OverlayContextProvider-Buisu9vo.js";import"./LoadingSpinner-C-PnKOui.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./ProgressBar-DplTBNX0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CxwkoRJi.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./Separator-AhH2lqvH.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./ActionBatch-BUyIhhJw.js";import"./ButtonView-CjeFZr2s.js";import"./Flex-CcRj0a-w.js";import"./useRef-Dg0IXyzM.js";const wr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,Ar as __namedExportsOrder,wr as default};
