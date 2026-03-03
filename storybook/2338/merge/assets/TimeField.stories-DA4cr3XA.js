import{r as b,j as r}from"./iframe-BZ1p44Xs.js";import{a,u as p,F as c,R as u,S as f,t as E}from"./ResetButton-BCpb_Ry0.js";import{L as e}from"./Label-HK0aVnMe.js";import{B as d}from"./Button-BXzJaHaH.js";import{S as h}from"./Section-DYkPYl1t.js";import{A as F}from"./ActionGroup-D6AJDGA7.js";import{s as l}from"./ActionBatch-kp--iEDz.js";import{L as S}from"./DateInput-B_8KCsIr.js";import{T as t}from"./TimeField-CvOVt6uV.js";import{F as y}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-FMJg67QM.js";import"./getActionGroupSlot-D6uph6L1.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./useSpinButton-BtppQm-i.js";import"./useFilter-BuFHaQpv.js";import"./useFieldComponent-CdmiPNAX.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,B=T("submit"),Ur={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const o=async j=>{await l(1500),B(j)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=E();return r.jsx(c,{form:x,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(F,{children:[r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},i={},m={render:()=>{const o=p();return b.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await l(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(e,{children:"Time"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:()=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <TimeField>
              <Label>Time</Label>
            </TimeField>
          </Field>
          <TimeField isInvalid>
            <Label>Time</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TimeField>
        </Section>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="text">
          <TimeField>
            <Label>Time</Label>
          </TimeField>
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
}`,...s.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Yr as __namedExportsOrder,Ur as default};
