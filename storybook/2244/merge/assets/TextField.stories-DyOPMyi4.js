import{j as e,r as E}from"./iframe-rOlqB43H.js";import{A as j}from"./ActionGroup-C5Ll53hT.js";import{B as f}from"./Button-Bjmah8F5.js";import{L as t}from"./Label-DjfUIXm4.js";import{S as b}from"./Section-mXRQd9wd.js";import{T as n}from"./TextField-Crtl4XFH.js";import{b as p,u,F as c,t as S}from"./Form-ZrhvCVcs.js";import{R as h,S as x}from"./ResetButton-CrWOnpMD.js";import{s as F}from"./Action-CHaj31Fl.js";import{F as B}from"./FieldError-B7iskscN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DIoaqwvI.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./clsx-B-dksMZM.js";import"./index-DzmHy0yH.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./useStatic-B2jLjEI4.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./Text-CXuVairg.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";import"./Text-CjxKuecI.js";import"./utils-Ccj3VlSZ.js";import"./LoadingSpinner-BbLFRhi0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./context-C0IlT2TZ.js";import"./Button-CW-dJdjv.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D4qdaxsz.js";import"./useFocus-B5EXjvsK.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Djibs7wW.js";import"./Dialog-B6AZQFUz.js";import"./RSPContexts-D_fvST6z.js";import"./OverlayArrow-OpojsIn2.js";import"./useControlledState-BGrTDRws.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./VisuallyHidden-CY9UiAKH.js";import"./TextFieldBase-DnS_bUai.js";import"./FieldDescription-DkDvm_UR.js";import"./useFieldComponent-sAEQMV1g.js";import"./TextField-QNCfzxQC.js";import"./FieldError-CnSkRhK3.js";import"./Form-C-fbNo1l.js";import"./Group-DT2FxViN.js";import"./Input-DoF-1MyK.js";import"./useTextField-CM0Sin4-.js";import"./useFormReset-BZ2QXIUx.js";import"./useFormValidation-DWvRQI9h.js";import"./useControlledHostValueProps-658OjKDK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BUwqGHDc.js";import"./context-BHPibtfH.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ke=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ke as __namedExportsOrder,Ge as default};
