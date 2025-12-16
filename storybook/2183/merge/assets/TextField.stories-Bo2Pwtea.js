import{j as e,r as E}from"./iframe-B9O3ZODG.js";import{A as j}from"./ActionGroup-Cs7TEC0c.js";import{B as F}from"./Button-_bqaGPGi.js";import{L as t}from"./Label-B_yUo08w.js";import{S as b}from"./Section-D0wO1wxm.js";import{T as o}from"./TextField-Yo-jdURY.js";import{F as p,t as S}from"./Field-C1mLbov2.js";import{s as h}from"./Action-BQuW1ndX.js";import{u,F as c}from"./Form-BITB_N9N.js";import{F as B}from"./FieldError-Kcym6Pi9.js";import{R as x}from"./ResetButton-DICAuUJI.js";import{S as f}from"./SubmitButton-DarLBIcW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-18R3GcKE.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./clsx-B-dksMZM.js";import"./index-CtGMuppQ.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./useStatic-q7_HxIxT.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./Text-BRHICk1_.js";import"./browser-B4_YLigQ.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./utils-B6bG5pl_.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./Label-CUW7vXaw.js";import"./Hidden-1Y6zqjHd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Hhq7J4bP.js";import"./lib-90ocxLs-.js";import"./Dialog-DJkxmbot.js";import"./RSPContexts-_UgIwAnW.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useControlledState-C-iuwE9o.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./TextFieldBase-CBTlgBcb.js";import"./FieldDescription-Ch5HP30p.js";import"./useFieldComponent-CRvrWckq.js";import"./TextField-DEuIFKut.js";import"./FieldError-BrC6eHcT.js";import"./Form-BpuzTWI4.js";import"./Group-Ds4785A_.js";import"./Input-DL2ocd8r.js";import"./useTextField-_A1P15Z-.js";import"./useFormReset-Cc2EXXxK.js";import"./useFormValidation-Dlo1bwd1.js";import"./useControlledHostValueProps--c5a68bC.js";import"./context-DoFxq3ih.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-Aj7LdC1h.js";import"./useRef-jwi4kh1m.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const n=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
