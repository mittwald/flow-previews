import{r as j,j as r}from"./iframe-BZ1p44Xs.js";import{a as m,u as a,F as c,R as l,S as u,t as b}from"./ResetButton-BCpb_Ry0.js";import{L as s}from"./Label-HK0aVnMe.js";import{B as d}from"./Button-BXzJaHaH.js";import{S as h}from"./Section-DYkPYl1t.js";import{A as f}from"./ActionGroup-D6AJDGA7.js";import{s as p}from"./ActionBatch-kp--iEDz.js";import{S as n}from"./SearchField-haGuO0PB.js";import{F as E}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-FMJg67QM.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useFieldComponent-CdmiPNAX.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Ur={title:"Integrations/React Hook Form/SearchField",component:m,render:()=>{const o=async x=>{await p(5e3),B(x)},F=a({defaultValues:{user:""}}),S=b();return r.jsx(c,{form:F,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(S,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(f,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(f,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
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
            <SearchField>
              <Label>Suche</Label>
            </SearchField>
          </Field>
          <SearchField isInvalid>
            <Label>Suche</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </SearchField>
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
