import{r as g,j as e}from"./iframe-CBpAxFwW.js";import{A as p}from"./ActionGroup-CIZlagD5.js";import{B as b}from"./Button-DJILh_tx.js";import{L as o}from"./Label-D9Ki8i5H.js";import{S as h}from"./Section-7R7SCXQ7.js";import{T as t}from"./TextField-O3WXJJAC.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./ResetButton-DdOkIqmb.js";import{s as j}from"./ActionBatch-BgON7N4c.js";import{F as E}from"./FieldError-0XXNPrVk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useStatic-CDkGs2jt.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./utils-DlBHsIHw.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CSCUKvfx.js";import"./Dialog-r9nlMSfh.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./useControlledHostValueProps-H85_02BB.js";import"./useFieldComponent-PtL7ZYGA.js";import"./FieldDescription-cbN0tmKj.js";import"./TextField-U22TZmuN.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useTextField-W7kX8bZQ.js";import"./useFormReset-DcIaZXr3.js";import"./useFormValidation-D1j-Spao.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton slot="abort">Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <TextField>
              <Label>Field</Label>
            </TextField>
          </Field>
          <TextField isInvalid>
            <Label>Field</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TextField>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
