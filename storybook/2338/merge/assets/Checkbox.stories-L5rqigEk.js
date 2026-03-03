import{r as j,j as r}from"./iframe-BZ1p44Xs.js";import{a as c,u as p,F as a,R as l,S as f,t as b}from"./ResetButton-BCpb_Ry0.js";import{B as u}from"./Button-BXzJaHaH.js";import{S as h}from"./Section-DYkPYl1t.js";import{A as x}from"./ActionGroup-D6AJDGA7.js";import{s as d}from"./ActionBatch-kp--iEDz.js";import{C as t}from"./Checkbox-bIMtdw3v.js";import{F as E}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./ContextMenuSection-FMJg67QM.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useFieldComponent-CdmiPNAX.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./useFormValidation-oY9u4Y5a.js";import"./useToggleState-DudHCVeE.js";import"./useFormReset-zSbsyNkN.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const e=async F=>{await d(1500),y(F)},o=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=b();return r.jsx(a,{form:o,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(x,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},i={render:e=>{const o=p();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(h,{children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:e=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(x,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <Checkbox {...props}>Accept terms</Checkbox>
          </Field>
          <Checkbox isInvalid>
            Accept terms
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Checkbox>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...m.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Vr as __namedExportsOrder,Gr as default};
