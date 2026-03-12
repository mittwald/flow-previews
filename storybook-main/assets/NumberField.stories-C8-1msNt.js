import{r as x,j as r}from"./iframe-C8tsaODo.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./FormRootError-Ce5cv5RF.js";import{L as o}from"./Label-1oLHWqvU.js";import{B as u}from"./Button-BxguJBhT.js";import{S as g}from"./Section-DA8oIEqU.js";import{A as b}from"./ActionGroup-CU9s6S-m.js";import{s as p}from"./ActionBatch-BUyIhhJw.js";import{N as t}from"./NumberField-DMNvKcj5.js";import{F as E}from"./FieldDescription-BZoE01SC.js";import{F as S}from"./FieldError-EQJdnOUU.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DA7vjxZL.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./ActionGroupView-DhBOLqQn.js";import"./Content-Cp_HsIUT.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./RSPContexts-DtfJrVYY.js";import"./utils-CdcYI7XL.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./Modal-BYMO-zFY.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./Overlay-BnyG3_RP.js";import"./OverlayContextProvider-Buisu9vo.js";import"./LoadingSpinner-C-PnKOui.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";import"./ButtonView-CjeFZr2s.js";import"./Flex-CcRj0a-w.js";import"./useRef-Dg0IXyzM.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BnK78UMz.js";import"./getActionGroupSlot-C3_vSruP.js";import"./useFieldComponent-FgbLRzY4.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./FieldError-DSXMmXMO.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useFormValidation-CZJdaAR2.js";import"./useSpinButton-C_9aiTp0.js";import"./useFormReset-BpTKK099.js";import"./useTextField-BlhjZ_T-.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
