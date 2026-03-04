import{r as b,j as r}from"./iframe-CBpAxFwW.js";import{a,u as l,F as d,R as c,S as f,t as g}from"./ResetButton-DdOkIqmb.js";import{L as o}from"./Label-D9Ki8i5H.js";import{B as u}from"./Button-DJILh_tx.js";import{S as h}from"./Section-7R7SCXQ7.js";import{A as F}from"./ActionGroup-CIZlagD5.js";import{s as p}from"./ActionBatch-BgON7N4c.js";import{N as t}from"./NumberField-C3FHYO6-.js";import{F as y}from"./FieldDescription-cbN0tmKj.js";import{F as E}from"./FieldError-0XXNPrVk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./utils-DlBHsIHw.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CSCUKvfx.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useControlledHostValueProps-H85_02BB.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useFormValidation-D1j-Spao.js";import"./useSpinButton-D6KrnP9n.js";import"./useFormReset-DcIaZXr3.js";import"./useTextField-W7kX8bZQ.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,A=S("submit"),zr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async j=>{await p(1500),A(j)},x=l({defaultValues:{ageDefaultValue:36}}),i=g();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(y,{children:"You have to be at least 18 years old"})]})}),r.jsxs(F,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:e,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
