import{r as E,j as e}from"./iframe-BgKMnsqP.js";import{A as j}from"./ActionGroup-Baw08tLW.js";import{B as f}from"./Button-BtfzhoC2.js";import{L as t}from"./Label-8eLvO5Vl.js";import{S as b}from"./Section-D7E7l6M3.js";import{T as o}from"./TextField-C8kMMFVY.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-COmaz_iZ.js";import{s as F}from"./ActionBatch-4ndP-n8L.js";import{F as B}from"./FieldError-C-lZWEzn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-EDiDAp0E.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./useStatic-BGwbdR9P.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Text-C3i_8DOD.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Text-DxRa_Q_m.js";import"./utils-DF7rIzyn.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DBH05xVc.js";import"./Dialog-BWmXoaKF.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./useControlledHostValueProps-BQEekCgN.js";import"./useFieldComponent-BrPuybAK.js";import"./FieldDescription-DSPaRw4X.js";import"./TextField-Bep40rlk.js";import"./FieldError-DrPRBP1_.js";import"./Form-BeISznmy.js";import"./Group-B1pnNyn-.js";import"./Input-DxGeYMpI.js";import"./useTextField-DgG9YqRb.js";import"./useFormReset-BD4Q_TlS.js";import"./useFormValidation-BuWufY-j.js";import"./ActionGroupView-Clwct5K6.js";import"./Content-CbjXc6mW.js";import"./Heading-Dr5lCRWs.js";import"./Heading-DVJa8yG2.js";import"./Modal-Bb86vIfw.js";import"./useOverlayController-D55f6wXT.js";import"./Overlay-jspJFumx.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./ButtonView-DXAFCp_d.js";import"./Flex-Cg9PpE8E.js";import"./useRef-B-um_LIx.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <ResetButton>Reset</ResetButton>
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
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
