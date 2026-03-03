import{r as b,j as r}from"./iframe-BZ1p44Xs.js";import{a,u as l,F as d,R as c,S as f,t as g}from"./ResetButton-BCpb_Ry0.js";import{L as o}from"./Label-HK0aVnMe.js";import{B as u}from"./Button-BXzJaHaH.js";import{S as h}from"./Section-DYkPYl1t.js";import{A as F}from"./ActionGroup-D6AJDGA7.js";import{s as p}from"./ActionBatch-kp--iEDz.js";import{N as t}from"./NumberField-CUMFbJja.js";import{F as y}from"./FieldDescription-PY5u12Fd.js";import{F as E}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-FMJg67QM.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useFieldComponent-CdmiPNAX.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useFormValidation-oY9u4Y5a.js";import"./useSpinButton-BtppQm-i.js";import"./useFormReset-zSbsyNkN.js";import"./useTextField-CmQ5R2lB.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,A=S("submit"),zr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async j=>{await p(1500),A(j)},x=l({defaultValues:{ageDefaultValue:36}}),i=g();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(y,{children:"You have to be at least 18 years old"})]})}),r.jsxs(F,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:e,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
            <NumberField>
              <Label>Age</Label>
            </NumberField>
          </Field>
          <NumberField isInvalid>
            <Label>Age</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </NumberField>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Jr as __namedExportsOrder,zr as default};
