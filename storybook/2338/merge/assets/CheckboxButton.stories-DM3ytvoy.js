import{r as b,j as o}from"./iframe-BcqfzoOA.js";import{a as d,u as c,F as p,R as h,S as x,t as B}from"./ResetButton--7CtDtWT.js";import{B as l}from"./Button-C2msjhlA.js";import{S as f}from"./Section-B_QgMIam.js";import{A as F}from"./ActionGroup-Cjv-TUqT.js";import{s as u}from"./ActionBatch-D231mKj-.js";import{T as i}from"./Text-1XRmWCfn.js";import{C as m}from"./CheckboxButton-CMob0RiR.js";import{C as a}from"./Content-B5PlHrRz.js";import{F as E}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./Text-CALsrB3x.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./browser-CFz57TUe.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Checkbox-CmrdkA_o.js";import"./useFieldComponent-CSNqGKWj.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./useFormValidation-BMgNFXni.js";import"./useToggleState-CCPEOAsS.js";import"./useFormReset-neBkOLPK.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Mo={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async C=>{await u(1500),y(C)},r=c({defaultValues:{acceptTerms:!1}}),j=B();return o.jsx(p,{form:r,onSubmit:t,children:o.jsxs(f,{children:[o.jsx(j,{name:"acceptTerms",children:o.jsxs(m,{children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(F,{children:[o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})})}},n={},e={render:t=>{const r=c();return b.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsx(p,{form:r,onSubmit:async()=>await u(2e3),children:o.jsxs(f,{children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsxs(m,{...t,isInvalid:!0,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const r=c();return o.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[o.jsx(d,{name:"field",children:o.jsxs(m,{...t,children:[o.jsx(i,{children:"Terms and Conditions"}),o.jsx(a,{children:"Consent to terms and conditions"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsxs(F,{children:[o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),o.jsx(l,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),o.jsx(h,{slot:"abort",children:"Reset"}),o.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <CheckboxButton {...props}>
              <Text>Terms and Conditions</Text>
              <Content>Consent to terms and conditions</Content>
            </CheckboxButton>
          </Field>
          <CheckboxButton {...props} isInvalid>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </CheckboxButton>
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const No=["Default","WithFieldError","WithFocus"];export{n as Default,e as WithFieldError,s as WithFocus,No as __namedExportsOrder,Mo as default};
