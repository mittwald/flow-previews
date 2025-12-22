import{j as e,r as E}from"./iframe-a9513Vq6.js";import{A as j}from"./ActionGroup-CEk1ZVey.js";import{B as f}from"./Button-CbZraw7Z.js";import{L as t}from"./Label-BZ3qOvYQ.js";import{S as b}from"./Section-C8UMRpV9.js";import{T as n}from"./TextField-J-kkWp3G.js";import{b as p,u,F as c,t as S}from"./Form-v8TMyo2H.js";import{R as h,S as x}from"./ResetButton-5AR8fVnz.js";import{s as F}from"./Action-CS14UEhl.js";import{F as B}from"./FieldError-WoUSVR_n.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7T7LY8j.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./getActionGroupSlot-gpXu2eix.js";import"./useStatic-BYKWrdXY.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Text-hxI3a1Rs.js";import"./browser-CuCeyixq.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./utils-Q60aVnZq.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOdCqvu.js";import"./useFocus-CH_x6C_j.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BAncSsp2.js";import"./Dialog-C14EYRfp.js";import"./RSPContexts-DpIEdSL7.js";import"./OverlayArrow-BuQIV4ze.js";import"./useControlledState-CemUvUps.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./TextFieldBase-ChofrBCm.js";import"./FieldDescription-B1DZzGI9.js";import"./useFieldComponent-DoOT3wm0.js";import"./TextField-C0XDoeam.js";import"./FieldError-C3zvz5gI.js";import"./Form-DpSLYLL6.js";import"./Group-D-ENRzUh.js";import"./Input-CtQP6IcM.js";import"./useTextField-CtFPXen_.js";import"./useFormReset-CYu_Lr-z.js";import"./useFormValidation-vP3SVKb2.js";import"./useControlledHostValueProps-BNY-TyT6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Do3Y2xpl.js";import"./context-RLH4ysrR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ue as __namedExportsOrder,Ie as default};
